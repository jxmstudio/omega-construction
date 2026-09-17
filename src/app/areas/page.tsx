import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects, site } from "@/lib/site";
import { childAreas, regions } from "@/lib/areas";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Areas We Serve | Auckland-Wide Builders",
  description:
    "Auckland-wide builders based in Mt Eden — Central Auckland, the North Shore, West and South Auckland and Rodney. See where we've built and what we build in each area.",
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Areas we serve" }]}
        title="Building across Auckland since 1994"
        intro={`Based on Dominion Road in Mt Eden, Omega Construction delivers commercial projects and upper-end homes from the city fringe to the Shore, the West, the South and up to Warkworth. Every area below is somewhere we've built.`}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="space-y-14">
          {regions.map((region, i) => {
            const kids = childAreas(region.slug);
            const featured = region.projectSlugs
              .map((slug) => projects.find((p) => p.slug === slug))
              .filter(Boolean)
              .slice(0, 1);
            return (
              <Reveal key={region.slug} delay={(i % 2) * 80}>
                <article className="grid gap-8 rounded-2xl border border-line-2 bg-surface p-7 md:grid-cols-12 md:p-9">
                  <div className="md:col-span-7">
                    <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
                      <Link href={`/areas/${region.slug}`} className="hover:text-accent">
                        {region.name}
                      </Link>
                    </h2>
                    <p className="mt-3 leading-relaxed text-slate">{region.intro[0]}</p>
                    <p className="mt-4 text-sm text-mute">
                      <span className="font-semibold text-ink">Covers:</span>{" "}
                      {region.suburbs.join(" · ")}
                    </p>
                    {kids.length > 0 && (
                      <p className="mt-2 text-sm text-mute">
                        <span className="font-semibold text-ink">Suburb guides:</span>{" "}
                        {kids.map((k, j) => (
                          <span key={k.slug}>
                            <Link
                              href={`/areas/${k.slug}`}
                              className="font-medium text-accent hover:text-accent-strong"
                            >
                              {k.name}
                            </Link>
                            {j < kids.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </p>
                    )}
                    <Link
                      href={`/areas/${region.slug}`}
                      className="mt-5 inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-strong"
                    >
                      Builders in {region.name} →
                    </Link>
                  </div>
                  <div className="md:col-span-5">
                    {featured[0] ? (
                      <Link
                        href={`/projects/${featured[0].slug}`}
                        className="group block overflow-hidden rounded-lg border border-line bg-ink-2"
                      >
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={featured[0].hero}
                            alt={`${featured[0].title}, ${featured[0].location}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="bg-surface p-4">
                          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                            {featured[0].category} · {featured[0].location}
                          </span>
                          <h3 className="mt-1 font-display text-base font-bold text-ink group-hover:text-accent">
                            {featured[0].title}
                          </h3>
                        </div>
                      </Link>
                    ) : (
                      <ul className="space-y-3 rounded-lg bg-sand p-6 text-sm text-slate">
                        {region.highlights.map((h) => (
                          <li key={h} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-24">
        <div className="relative overflow-hidden rounded-2xl bg-ink px-8 py-14 text-center text-white md:py-16">
          <div className="bg-grid absolute inset-0 opacity-60" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Don&apos;t see your suburb?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              We work Auckland-wide. Tell us where the project is and we&apos;ll come back
              with a clear next step.
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
