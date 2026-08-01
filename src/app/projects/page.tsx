import type { Metadata } from "next";
import Link from "next/link";
import { projects, recentProjects, site } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Projects & Case Studies — Commercial & Residential Auckland",
  description:
    "A portfolio of Omega Construction's commercial and residential projects across Auckland — from architectural home remodels to structural commercial transformations.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        title="Our work does the selling"
        intro="A selection of Omega Construction's commercial and residential projects across Auckland — the scope, the challenge and the result."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <ProjectsExplorer projects={projects} />
      </section>

      {/* recent work — range of building types */}
      <section className="border-t border-line bg-sand">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
              More recent work
            </h2>
            <p className="mt-3 text-slate">
              A sense of the range we build across, from hospitality to infrastructure. Full
              case studies coming soon.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {recentProjects.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 80} className="h-full">
                <div className="flex h-full flex-col rounded-lg border border-line bg-surface p-6">
                  <span className="w-fit rounded-full bg-accent-tint px-3 py-1 text-xs font-semibold text-accent-strong">
                    {p.tag}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-ink">{p.title}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-mute">
                    {p.location}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{p.brief}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-24">
        <div className="relative overflow-hidden rounded-2xl bg-ink px-8 py-14 text-center text-white md:py-16">
          <div className="bg-grid absolute inset-0 opacity-60" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Your project could be next
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              Registered Master Builder, building across Auckland since {site.established}.
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
