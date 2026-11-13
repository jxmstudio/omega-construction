import { NextResponse } from "next/server";

// Gets signed upload URLs from JXM Forms so the browser can upload plans and
// photos straight to storage (keeps big files clear of Vercel's 4.5 MB request
// limit). Body: { files: [{ filename, content_type, size }] }.
const UPLOADS_ENDPOINT =
  process.env.JXM_FORMS_UPLOADS_URL ??
  "https://jxm-forms.vercel.app/api/submit/omega-construction/uploads";
const FORMS_API_KEY = process.env.JXM_FORMS_API_KEY;

export async function POST(request: Request) {
  if (!FORMS_API_KEY) {
    console.error("JXM_FORMS_API_KEY is not set");
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  let body: { files?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  try {
    const response = await fetch(UPLOADS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": FORMS_API_KEY },
      body: JSON.stringify({ files: body.files }),
      cache: "no-store",
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || result?.ok !== true) {
      console.error("JXM Forms rejected upload request:", response.status, result);
      return NextResponse.json(
        { ok: false, error: result?.error },
        { status: response.ok ? 502 : response.status }
      );
    }
    return NextResponse.json({ ok: true, uploads: result.uploads });
  } catch (err) {
    console.error("JXM Forms unreachable:", err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
