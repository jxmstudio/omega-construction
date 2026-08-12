import type { Metadata } from "next";
import Link from "next/link";
import { credentials, processSteps, site, stats, values } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "About Omega Construction | Auckland Builder Since 1994",
  description:
    "Omega Construction was founded in 1994 by David Williams, a Registered Master Builder and Licensed Building Practitioner. Three decades of commercial and residential building across Auckland.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        title="Three decades of building, and the reputation to match"
        intro="Omega Construction (Auckland) Limited was created in 1994 by David Williams to advance his successful sole-trading business and become an acknowledged competitor within the construction industry."
      />

      {/* story */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-slate">
              As the founder of Omega Construction, David leads his team with extensive
              experience managing a variety of construction projects, from complex builds
              to boutique renovations. Over more than three decades, David and Omega have
              formed and maintained positive partnerships across the business, education
              and private sectors.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              With over {site.yearsExperience} years of experience, David is a Registered
              Master Builder and Licensed Building Practitioner. That experience shows in the
              calibre of the projects Omega takes on — and in the quality control and safety
              systems behind them.
            </p>

            <h2 className="mt-10 font-display text-2xl font-bold text-ink">
              Quality control
            </h2>
            <p className="mt-3 leading-relaxed text-slate">
              Omega Construction has a comprehensive, end-to-end quality control procedure
              that starts with the tender process — ensuring we achieve the best possible
              products, service providers and price for our end customer. We monitor quality
              through systematic administration and site management, working to preset goals
              and timelines.
            </p>

            <h2 className="mt-10 font-display text-2xl font-bold text-ink">
              Partnerships
            </h2>
            <p className="mt-3 leading-relaxed text-slate">
              Our well-established professional affiliations mean we can get the job done
              right. We add value to your project, protect your interests and save you time
              and money wherever possible — and we&apos;re proud to be a Registered Master
              Builder for 35 years.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Business sector", "Education sector", "Private sector"].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line-2 px-4 py-1.5 text-sm text-slate"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* stats + credentials sidebar */}
          <aside className="md:col-span-5">
            <div className="rounded-xl border border-line-2 bg-sand p-7">
              <dl className="grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-2xl font-bold text-accent">
                      <Counter value={s.value} />
                    </dt>
                    <dd className="mt-1 text-xs leading-snug text-mute">{s.label}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-7 border-t border-line-2 pt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">
                  Credentials
                </h3>
                <ul className="mt-4 space-y-3">
                  {credentials.map((c) => (
                    <li key={c.label} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <div>
                        <div className="text-sm font-semibold text-ink">{c.label}</div>
                        <div className="text-xs text-mute">{c.note}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-line bg-sand">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">Our values</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 70} className="h-full">
                <div className="flex h-full flex-col rounded-xl border border-line-2 bg-surface p-6">
                  <h3 className="font-display text-lg font-bold text-accent">{v.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">Our process</h2>
          <p className="mt-3 text-slate">
            A clear path from first conversation to final handover.
          </p>
        </div>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.title} delay={(i % 3) * 70} className="h-full">
              <li className="flex h-full flex-col rounded-xl border border-line-2 bg-surface p-6">
                <span className="font-display text-3xl font-extrabold text-accent/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Memberships & Certifications */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-bright">
                <span className="h-px w-6 bg-accent-bright" />
                Memberships &amp; certifications
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
                Fully licensed, insured and accredited
              </h2>
              <p className="mt-5 leading-relaxed text-white/70">
                Omega Construction is an industry leader, backed by relevant certifications
                and memberships. We proudly belong to two of the most respected industry
                bodies in New Zealand — the Master Builders Association and Site Safe.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 self-center md:col-span-7">
              {[
                { k: "Master Builders Association", v: `MBA #${site.mbaNumber}` },
                { k: "Licensed Building Practitioner", v: `LBP #${site.lbpNumber}` },
                { k: "Site Safe member", v: "Site Smart H&S system" },
                { k: "Public liability insurance", v: `${site.publicLiability} cover` },
              ].map((c) => (
                <div key={c.k} className="rounded-lg border border-white/10 bg-white/5 p-5">
                  <div className="font-display text-base font-bold text-white">{c.k}</div>
                  <div className="mt-1 text-xs text-white/50">{c.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-ink px-8 py-14 text-center text-white md:py-16">
            <div className="bg-grid absolute inset-0 opacity-60" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Work with an established Auckland builder
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-white/70">
                Since {site.established}, and ready for your next project.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="rounded bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-strong">
                  Request a Quote
                </Link>
                <Link href="/projects" className="rounded border border-white/25 px-6 py-3 font-semibold text-white hover:bg-white/10">
                  See our work
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
