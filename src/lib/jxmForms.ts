/**
 * JXM Forms — lead capture for the website quote form.
 *
 * The browser posts to this site's own /api/contact route, which forwards to
 * JXM Forms with the API key (kept server-side). Files go first: we ask
 * /api/contact/uploads for signed URLs, PUT each file straight to storage,
 * then send their paths with the enquiry as `_attachments`. JXM Forms emails
 * the enquiry to Omega with the files attached.
 */

// Matches what JXM Forms accepts (src/lib/attachments.ts).
const TYPES_BY_EXT: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  heic: "image/heic",
  heif: "image/heif",
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};
const FILE_TYPES = new Set(Object.values(TYPES_BY_EXT));
export const FILE_ACCEPT = [...FILE_TYPES, ".heic", ".heif", ".pdf", ".doc", ".docx"].join(",");
export const MAX_FILES = 10;
export const MAX_FILE_MB = 10;
export const MAX_TOTAL_MB = 25;
const MB = 1024 * 1024;

export interface SubmitResult {
  ok: boolean;
  error?: string;
}

interface Upload {
  path: string;
  filename: string;
  content_type: string;
  size: number;
  signed_url: string;
}

/** Browsers often leave `type` empty for HEIC and some PDFs — fall back to the extension. */
function contentType(file: File): string {
  if (FILE_TYPES.has(file.type)) return file.type;
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  return TYPES_BY_EXT[ext] ?? file.type;
}

/** Returns a message for the customer if the chosen files can't be sent, otherwise null. */
export function checkFiles(files: File[]): string | null {
  if (files.length > MAX_FILES) return `Please attach no more than ${MAX_FILES} files.`;
  const bad = files.find((f) => !FILE_TYPES.has(contentType(f)));
  if (bad) return `"${bad.name}" isn't a supported type. Attach images, PDFs or Word documents.`;
  const big = files.find((f) => f.size > MAX_FILE_MB * MB);
  if (big) return `"${big.name}" is over ${MAX_FILE_MB} MB. Each file must be under ${MAX_FILE_MB} MB.`;
  if (files.reduce((sum, f) => sum + f.size, 0) > MAX_TOTAL_MB * MB) {
    return `Files must add up to ${MAX_TOTAL_MB} MB or less. Please attach fewer files.`;
  }
  return null;
}

type Attachment = Omit<Upload, "signed_url">;

interface UploadOutcome {
  attachments: Attachment[];
  errors: string[];
}

function errorMessage(err: unknown): string {
  return err instanceof Error ? `${err.name}: ${err.message}` : String(err);
}

/** Uploads each file on its own, so one failed file doesn't lose the rest. */
async function uploadFiles(files: File[]): Promise<UploadOutcome> {
  const res = await fetch("/api/contact/uploads", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      files: files.map((f) => ({ filename: f.name, content_type: contentType(f), size: f.size })),
    }),
  });
  const body = await res.json().catch(() => null);
  if (!res.ok || body?.ok !== true) throw new Error(body?.error || `Upload request failed (${res.status})`);

  const uploads: Upload[] = body.uploads;
  const results = await Promise.allSettled(
    uploads.map(async (upload, i) => {
      const put = await fetch(upload.signed_url, {
        method: "PUT",
        headers: { "content-type": upload.content_type },
        body: files[i],
      });
      if (!put.ok) throw new Error(`File upload failed (${put.status})`);
    })
  );

  const outcome: UploadOutcome = { attachments: [], errors: [] };
  results.forEach((result, i) => {
    const { path, filename, content_type, size } = uploads[i];
    if (result.status === "fulfilled") outcome.attachments.push({ path, filename, content_type, size });
    else outcome.errors.push(`${filename}: ${errorMessage(result.reason)}`);
  });
  return outcome;
}

/**
 * Submit an enquiry with optional files. Files that upload are attached; if
 * any fail, the enquiry is still sent with a note saying how many and why, so
 * the lead isn't lost.
 */
export async function submitEnquiry(
  fields: Record<string, string>,
  files: File[] = []
): Promise<SubmitResult> {
  const fileError = checkFiles(files);
  if (fileError) return { ok: false, error: fileError };

  const payload: Record<string, unknown> = { ...fields };
  if (files.length > 0) {
    let outcome: UploadOutcome;
    try {
      outcome = await uploadFiles(files);
    } catch (err) {
      outcome = { attachments: [], errors: [errorMessage(err)] };
    }
    if (outcome.attachments.length > 0) payload._attachments = outcome.attachments;
    if (outcome.errors.length > 0) {
      console.error("File upload failed:", outcome.errors);
      const failed = files.length - outcome.attachments.length;
      payload.files_note =
        `${failed} of ${files.length} file(s) failed to upload. Ask the customer to email them. ` +
        `Error: ${outcome.errors.join("; ")}`;
    }
  }

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const body = await res.json().catch(() => null);
    if (res.ok && body?.ok === true) return { ok: true };
    return { ok: false, error: body?.error };
  } catch {
    return { ok: false };
  }
}
