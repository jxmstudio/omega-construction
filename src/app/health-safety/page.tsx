import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Health & Safety | Site Safe Member & Master Builder",
  description:
    "Omega Construction's health & safety credentials — Site Safe membership, Site Smart cloud-based H&S management and $10 million public liability insurance, with full compliance to the Health and Safety at Work Act 2015.",
  alternates: { canonical: "/health-safety" },
};

const systems = [
  {
    name: "Site Safe member",
    body: "Membership of Site Safe, New Zealand's leading health & safety organisation for the construction sector.",
  },
  {
    name: "Site Smart",
    body: "A cloud-based health & safety management system that creates a safer environment for everyone on our jobs — and provides hands-on H&S training to our employees and subcontractors while on site.",
  },
  {
    name: "SiteWise",
    body: "We hold SiteWise contractor prequalification, an independent grading of our health & safety systems. Our reaccreditation is currently in progress.",
  },
];

export default function HealthSafetyPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Health & Safety" }]}
        title="Health & safety as a competitive asset"
        intro="For commercial tenders, safety credentials decide who makes the shortlist. Ours are front and centre — because a safer site is a better-run site."
      />

      {/* systems */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {systems.map((s, i) => (
            <Reveal key={s.name} delay={i * 80} className="h-full">
              <div className="flex h-full flex-col rounded-xl border border-line-2 bg-surface p-7">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent-tint text-accent-strong">
                  <span className="font-display text-lg font-bold">✓</span>
                </div>
                <h2 className="mt-4 font-display text-xl font-bold text-ink">{s.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* commitment */}
      <section className="border-y border-line bg-sand">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-strong">
                <span className="h-px w-6 bg-accent" />
                Our commitment
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
                Compliant, and trusted to work safely
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-lg leading-relaxed text-slate">
                Omega Construction has developed robust business, procedures and health &amp;
                safety systems. Our cloud-based management ensures our commitment to — and
                compliance with — the Health and Safety at Work Act 2015 on every job.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate">
                What this means for you is simple: our company is health &amp; safety
                compliant, and can be trusted to work safely and to get your job done.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate">
                We&apos;re also a Registered Master Builder (MBA #{site.mbaNumber}) and
                Licensed Building Practitioner (LBP #{site.lbpNumber}), and we hold{" "}
                {site.publicLiability} in public liability insurance — protecting you, your
                family and our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="relative overflow-hidden rounded-2xl bg-ink px-8 py-14 text-center text-white md:py-16">
          <div className="bg-grid absolute inset-0 opacity-60" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Tendering a project? Let&apos;s talk.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              A Site Safe–certified, fully licensed and insured team you can put in front of
              any procurement panel.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="rounded bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-strong">
                Request a Quote
              </Link>
              <a href={site.phoneHref} className="rounded border border-white/25 px-6 py-3 font-semibold text-white hover:bg-white/10">
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
