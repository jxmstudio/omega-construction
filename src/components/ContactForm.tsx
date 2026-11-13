"use client";

import { useRef, useState } from "react";
import { site } from "@/lib/site";
import { FILE_ACCEPT, MAX_FILES, MAX_FILE_MB, MAX_TOTAL_MB, checkFiles, submitEnquiry } from "@/lib/jxmForms";

type Status = "idle" | "sending" | "sent" | "error";

const inputBase =
  "w-full rounded-lg border border-line-2 bg-surface px-4 py-2.5 text-ink outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20";
const labelCls = "mb-1.5 block text-sm font-semibold text-ink";

const PROJECT_TYPES = ["Commercial project", "Residential project"];

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

const Req = () => <span className="text-accent">*</span>;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [enquiryType, setEnquiryType] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Scoping questions only make sense for an actual building project.
  const isProject = PROJECT_TYPES.includes(enquiryType);

  function onFilesChange(e: React.ChangeEvent<HTMLInputElement>) {
    const list = Array.from(e.target.files ?? []);
    setFiles(list);
    setFileError(checkFiles(list));
  }

  function clearFiles() {
    setFiles([]);
    setFileError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending" || fileError) return;
    setStatus("sending");
    setErrorMsg(null);
    const fields: Record<string, string> = {};
    for (const [key, value] of new FormData(e.currentTarget).entries()) {
      if (typeof value === "string") fields[key] = value;
    }
    const result = await submitEnquiry(fields, files);
    if (!result.ok) {
      setErrorMsg(result.error ?? null);
      setStatus("error");
      return;
    }
    setFiles([]);
    setEnquiryType("");
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-line-2 bg-sand p-8 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-safety/10 text-safety">
          <span className="text-xl font-bold">✓</span>
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold text-ink">Thanks — we&apos;ve got it.</h3>
        <p className="mx-auto mt-2 max-w-md text-slate">
          Your enquiry has been sent. We&apos;ll be in touch shortly. For anything urgent,
          give us a call and we&apos;ll talk it through.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded border border-line-2 px-5 py-2.5 font-semibold text-ink hover:border-ink"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* honeypot — hidden from users, catches bots. Must stay empty. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelCls}>
            First name <Req />
          </label>
          <input id="firstName" name="firstName" autoComplete="given-name" required className={inputBase} />
        </div>
        <div>
          <label htmlFor="lastName" className={labelCls}>
            Last name <Req />
          </label>
          <input id="lastName" name="lastName" autoComplete="family-name" required className={inputBase} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone <Req />
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required className={inputBase} />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email <Req />
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={inputBase} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelCls}>
            Company <span className="font-normal text-mute">(if applicable)</span>
          </label>
          <input id="company" name="company" autoComplete="organization" className={inputBase} />
        </div>
        <div>
          <label htmlFor="enquiryType" className={labelCls}>
            Enquiry type <Req />
          </label>
          <select
            id="enquiryType"
            name="enquiryType"
            required
            value={enquiryType}
            onChange={(e) => setEnquiryType(e.target.value)}
            className={inputBase}
          >
            <option value="" disabled>
              Select…
            </option>
            <option>Commercial project</option>
            <option>Residential project</option>
            <option>Trade / product (Cem-Gon / Fab-Form)</option>
            <option>General enquiry</option>
          </select>
        </div>
      </div>

      {isProject && (
        <fieldset className="space-y-5 rounded-xl border border-line-2 bg-sand p-5">
          <legend className="px-2 text-sm font-semibold uppercase tracking-wider text-mute">
            About the job
          </legend>
          <p className="!mt-0 text-sm text-slate">
            Optional, but the more we know the more accurately we can scope and price it.
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="workType" className={labelCls}>
                Type of work
              </label>
              <select id="workType" name="workType" defaultValue="" className={inputBase}>
                <option value="">Select…</option>
                <option>New build</option>
                <option>Renovation / alteration</option>
                <option>Extension / addition</option>
                <option>Reclad / weathertightness</option>
                <option>Commercial fit-out / refurbishment</option>
                <option>Structural / seismic upgrade</option>
                <option>Subdivision</option>
                <option>Project management</option>
                <option>Repairs / maintenance</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="role" className={labelCls}>
                Your role
              </label>
              <select id="role" name="role" defaultValue="" className={inputBase}>
                <option value="">Select…</option>
                <option>Property owner</option>
                <option>Architect / designer</option>
                <option>Property / facilities manager</option>
                <option>Body corporate</option>
                <option>Developer</option>
                <option>Tenant</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-[2fr_1fr]">
            <div>
              <label htmlFor="street" className={labelCls}>
                Site address
              </label>
              <input
                id="street"
                name="street"
                autoComplete="street-address"
                placeholder="Street number and name"
                className={inputBase}
              />
            </div>
            <div>
              <label htmlFor="suburb" className={labelCls}>
                Suburb
              </label>
              <input id="suburb" name="suburb" autoComplete="address-level2" className={inputBase} />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="size" className={labelCls}>
                Approximate size
              </label>
              <input
                id="size"
                name="size"
                placeholder="e.g. 180 m² floor area, 2 storeys"
                className={inputBase}
              />
            </div>
            <div>
              <label htmlFor="planStage" className={labelCls}>
                Plans &amp; consent
              </label>
              <select id="planStage" name="planStage" defaultValue="" className={inputBase}>
                <option value="">Select…</option>
                <option>No plans yet — just an idea</option>
                <option>Concept sketches</option>
                <option>Architect / designer drawings</option>
                <option>Building consent lodged</option>
                <option>Building consent approved</option>
                <option>No consent needed</option>
              </select>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="budget" className={labelCls}>
                Indicative budget
              </label>
              <select id="budget" name="budget" defaultValue="" className={inputBase}>
                <option value="">Not sure yet</option>
                <option>Under $50K</option>
                <option>$50K+</option>
                <option>$250K+</option>
                <option>$500K+</option>
                <option>$1 Million+</option>
              </select>
            </div>
            <div>
              <label htmlFor="timeframe" className={labelCls}>
                Ideal start
              </label>
              <select id="timeframe" name="timeframe" defaultValue="" className={inputBase}>
                <option value="">Not sure yet</option>
                <option>As soon as possible</option>
                <option>Within 3 months</option>
                <option>3–6 months</option>
                <option>6–12 months</option>
                <option>12+ months</option>
              </select>
            </div>
          </div>
        </fieldset>
      )}

      <div>
        <label htmlFor="message" className={labelCls}>
          Project details <Req />
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project — scope, site access, timing, and anything else that helps."
          className={inputBase}
        />
      </div>

      {/* Plans, photos and supporting documents */}
      <div>
        <span className={labelCls}>
          Plans, photos &amp; documents <span className="font-normal text-mute">(optional)</span>
        </span>
        <label
          htmlFor="files"
          className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-line-2 bg-surface px-4 py-3.5 text-sm text-slate transition-colors hover:border-accent hover:text-ink"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 text-accent"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <path d="M17 8l-5-5-5 5" />
            <path d="M12 3v12" />
          </svg>
          <span>
            {files.length
              ? `${files.length} file${files.length > 1 ? "s" : ""} selected`
              : "Choose build plans, site photos or documents"}
          </span>
        </label>
        <input
          ref={fileInputRef}
          id="files"
          name="files"
          type="file"
          multiple
          accept={FILE_ACCEPT}
          onChange={onFilesChange}
          className="sr-only"
        />
        <p className="mt-1.5 text-xs text-mute">
          {`Drawings, site photos, engineer's or council documents — images, PDFs or Word files. Up to ${MAX_FILES} files, ${MAX_FILE_MB} MB each, ${MAX_TOTAL_MB} MB in total.`}
        </p>

        {files.length > 0 && (
          <ul className="mt-2 grid gap-1">
            {files.map((f) => (
              <li
                key={`${f.name}-${f.size}`}
                className="flex items-center justify-between gap-3 rounded border border-line-2 bg-surface px-3 py-2 text-sm"
              >
                <span className="truncate text-ink">{f.name}</span>
                <span className="flex-none text-xs text-mute">{formatSize(f.size)}</span>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={clearFiles}
                className="mt-0.5 text-xs font-semibold text-mute underline underline-offset-4 transition-colors hover:text-accent"
              >
                Clear files
              </button>
            </li>
          </ul>
        )}
        {fileError && <p className="mt-2 text-sm text-red-700">{fileError}</p>}
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMsg ??
            `Something went wrong sending your enquiry. Please try again, or call us on ${site.phone}.`}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending" || !!fileError}
        className="w-full rounded-lg bg-accent px-6 py-3.5 font-semibold text-white transition-colors hover:bg-accent-strong disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? (files.length ? "Uploading & sending…" : "Sending…") : "Send enquiry"}
      </button>
    </form>
  );
}
