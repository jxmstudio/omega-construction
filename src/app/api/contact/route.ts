import { NextResponse } from "next/server";

/**
 * Contact enquiry handler.
 *
 * Validates the submission and (when configured) forwards it to Omega's inbox.
 * Email delivery is intentionally pluggable: set CONTACT_TO + an email provider
 * (e.g. Resend / SMTP) and complete the `deliver()` call below. Until then it
 * validates and logs server-side so the form flow works end to end.
 */

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field.
  if ((form.get("company") as string)?.trim()) {
    return NextResponse.json({ ok: true }); // silently accept + drop
  }

  const name = (form.get("name") as string)?.trim() || "";
  const email = (form.get("email") as string)?.trim() || "";
  const message = (form.get("message") as string)?.trim() || "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Please complete the required fields." },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const attachment = form.get("attachment");
  const enquiry = {
    name,
    email,
    phone: (form.get("phone") as string)?.trim() || "",
    enquiryType: (form.get("enquiryType") as string)?.trim() || "",
    location: (form.get("location") as string)?.trim() || "",
    budget: (form.get("budget") as string)?.trim() || "",
    message,
    hasAttachment: attachment instanceof File && attachment.size > 0,
    attachmentName: attachment instanceof File ? attachment.name : "",
    receivedAt: new Date().toISOString(),
  };

  try {
    await deliver(enquiry);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] delivery failed:", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't send that just now. Please call us instead." },
      { status: 502 }
    );
  }
}

type Enquiry = Record<string, string | boolean>;

async function deliver(enquiry: Enquiry) {
  // TODO: wire an email provider. Example (Resend):
  //   if (process.env.RESEND_API_KEY && process.env.CONTACT_TO) { ...send... }
  // Until configured, log the enquiry so nothing is lost during development.
  console.log("[contact] new enquiry:", enquiry);
}
