import { NextResponse } from "next/server";

// Forwards website enquiries to JXM Forms, which stores them, runs its spam
// check and emails Omega through Resend (Reply-To = the enquirer, uploaded
// plans/photos attached). Calling it server-side keeps the API key out of the
// browser bundle. Same pattern as the other JXM client sites.
const FORMS_ENDPOINT =
  process.env.JXM_FORMS_URL ?? "https://jxm-forms.vercel.app/api/submit/omega-construction";
const FORMS_API_KEY = process.env.JXM_FORMS_API_KEY;

// Form field -> key sent to JXM Forms, in the order Dave reads them. The
// notification email prints keys as-is, so scoping fields are written as prose;
// name / email / phone / message stay lowercase because JXM Forms reads those
// to identify the lead and set Reply-To.
const FIELDS: [string, string, number][] = [
  ["company", "Company", 200],
  ["role", "Role", 100],
  ["enquiryType", "Enquiry type", 100],
  ["workType", "Type of work", 100],
  ["street", "Site address", 200],
  ["suburb", "Suburb", 100],
  ["size", "Approx. size", 200],
  ["planStage", "Plans & consent", 100],
  ["budget", "Indicative budget", 100],
  ["timeframe", "Ideal start", 100],
  ["message", "message", 5000],
  ["files_note", "Attachments note", 1000],
];

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  if (!FORMS_API_KEY) {
    console.error("JXM_FORMS_API_KEY is not set");
    return NextResponse.json({ ok: false, error: "Enquiry service not configured" }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const firstName = text(body.firstName, 100);
  const lastName = text(body.lastName, 100);
  const email = text(body.email, 200);
  const phone = text(body.phone, 50);
  const message = text(body.message, 5000);

  // Dave needs these to call back and start scoping the job.
  if (!firstName || !lastName || !phone || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, phone, email and project details." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const payload: Record<string, unknown> = {
    name: `${firstName} ${lastName}`,
    phone,
    email,
  };
  for (const [field, key, max] of FIELDS) {
    const value = text(body[field], max);
    if (value) payload[key] = value;
  }
  payload._form = "quote";
  // Honeypot value rides along so JXM Forms applies its own bot handling.
  const gotcha = text(body._gotcha, 200);
  if (gotcha) payload._gotcha = gotcha;
  // Files already uploaded to storage via /api/contact/uploads.
  if (Array.isArray(body._attachments) && body._attachments.length > 0) {
    payload._attachments = body._attachments.slice(0, 10);
  }

  try {
    const response = await fetch(FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": FORMS_API_KEY },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || result?.ok !== true) {
      console.error("JXM Forms rejected enquiry:", response.status, result);
      return NextResponse.json({ ok: false }, { status: 502 });
    }
    // Spam gets the same success response — never tip off the submitter.
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("JXM Forms unreachable:", err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
