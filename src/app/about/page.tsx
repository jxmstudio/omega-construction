import type { Metadata } from "next";
import Link from "next/link";
import { credentials, site, stats } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

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
              Over three decades, David and Omega Construction have formed and maintained
              a wide range of positive partnerships within the business, education and
              private sectors — planning, constructing, altering and refurbishing
              commercial and residential properties across Auckland.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              David is a Registered Master Builder of more than 30 years and a Licensed
              Building Practitioner. That experience shows in the calibre of the projects
              Omega takes on — and in the quality control and safety systems behind them.
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
              Builder.
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
                    <dt className="font-display text-2xl font-bold text-accent">{s.value}</dt>
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

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-24">
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
