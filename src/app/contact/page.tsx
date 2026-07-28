import type { Metadata } from "next";
import { careers, site } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Omega Construction | Request a Quote",
  description:
    "Get in touch with Omega Construction, Auckland. Request a quote for commercial or residential building, or a trade enquiry for Cem-Gon™ and Fab-Form. Call or send an enquiry.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        title="Let's talk about your project"
        intro="Tell us what you're planning and we'll come back with a clear next step. Commercial or residential — we'll point you to the right team."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* form */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl font-bold text-ink">Send an enquiry</h2>
            <p className="mt-2 text-slate">
              Fields marked <span className="text-accent">*</span> are required.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          {/* details */}
          <aside className="lg:col-span-5">
            <div className="rounded-xl border border-line-2 bg-sand p-7">
              <h2 className="font-display text-xl font-bold text-ink">Get in touch</h2>
              <dl className="mt-5 space-y-5 text-sm">
                <div>
                  <dt className="font-semibold uppercase tracking-wider text-mute">Phone</dt>
                  <dd className="mt-1 space-y-1">
                    <a href={site.phoneHref} className="block font-semibold text-ink hover:text-accent">
                      {site.phone} <span className="font-normal text-mute">(mobile)</span>
                    </a>
                    <a href={site.officePhoneHref} className="block font-semibold text-ink hover:text-accent">
                      {site.officePhone} <span className="font-normal text-mute">(office)</span>
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wider text-mute">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${site.email}`} className="font-semibold text-ink hover:text-accent">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wider text-mute">Postal</dt>
                  <dd className="mt-1 text-ink">{site.address}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={site.phoneHref}
                  className="rounded bg-accent px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-accent-strong"
                >
                  Call {site.phone}
                </a>
              </div>
            </div>

            {careers.hiring && (
              <div className="mt-6 rounded-xl border border-line-2 bg-surface p-7">
                <h3 className="font-display text-lg font-bold text-ink">Join our team</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  We&apos;re currently looking for{" "}
                  <span className="font-semibold text-ink">{careers.roles.join(", ")}</span>. If
                  that&apos;s you, get in touch using the form or give us a call.
                </p>
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
