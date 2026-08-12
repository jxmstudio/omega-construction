"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const inputBase =
  "w-full rounded-lg border border-line-2 bg-surface px-4 py-2.5 text-ink outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
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
    <form onSubmit={onSubmit} className="space-y-5">
      {/* honeypot — hidden from users, catches bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
            Name <span className="text-accent">*</span>
          </label>
          <input id="name" name="name" required className={inputBase} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
            Email <span className="text-accent">*</span>
          </label>
          <input id="email" name="email" type="email" required className={inputBase} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-ink">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={inputBase} />
        </div>
        <div>
          <label htmlFor="enquiryType" className="mb-1.5 block text-sm font-semibold text-ink">
            Enquiry type <span className="text-accent">*</span>
          </label>
          <select id="enquiryType" name="enquiryType" required defaultValue="" className={inputBase}>
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

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="location" className="mb-1.5 block text-sm font-semibold text-ink">
            Project location
          </label>
          <input
            id="location"
            name="location"
            placeholder="Suburb"
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="budget" className="mb-1.5 block text-sm font-semibold text-ink">
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
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
          Project details <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project — scope, timing, and anything else that helps."
          className={inputBase}
        />
      </div>

      <div>
        <label htmlFor="attachment" className="mb-1.5 block text-sm font-semibold text-ink">
          Plans or photos <span className="font-normal text-mute">(optional)</span>
        </label>
        <input
          id="attachment"
          name="attachment"
          type="file"
          accept="image/*,.pdf"
          className="w-full text-sm text-slate file:mr-4 file:rounded file:border-0 file:bg-accent file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-accent-strong"
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-accent px-6 py-3.5 font-semibold text-white transition-colors hover:bg-accent-strong disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
