import type { Metadata } from "next";
import Link from "next/link";
import { services, site } from "@/lib/site";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Construction Services Auckland — Commercial & Residential",
  description:
    "Omega Construction's Auckland services: commercial construction, residential building & renovations, interior fit-outs, alterations, project management and subdivision management.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      {/* header */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="bg-grid absolute inset-0 opacity-70" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
          <nav className="text-xs text-white/50">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">Services</span>
          </nav>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold md:text-5xl">
            What we build across Auckland
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            Over 30 years of proven success in the New Zealand construction industry —
            you name it, we can build it. Every service is delivered with the same
            end-to-end quality control and health &amp; safety systems.
          </p>
        </div>
      </section>

      {/* services grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col rounded-lg border border-line-2 bg-surface p-7 transition-shadow hover:shadow-lg"
              >
                <span className="font-display text-sm font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-display text-xl font-bold text-ink group-hover:text-accent">
                  {s.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{s.short}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.sectors.map((sec) => (
                    <span
                      key={sec}
                      className="rounded border border-line px-2 py-0.5 text-xs text-mute"
                    >
                      {sec}
                    </span>
                  ))}
                </div>
                <span className="mt-5 text-sm font-semibold text-accent group-hover:text-accent-strong">
                  Learn more →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-24">
        <div className="relative overflow-hidden rounded-2xl bg-ink px-8 py-14 text-center text-white md:py-16">
          <div className="bg-grid absolute inset-0 opacity-60" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              Tell us what you&apos;re planning and we&apos;ll come back with a clear next step.
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
