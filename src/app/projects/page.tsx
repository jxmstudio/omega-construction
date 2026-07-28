import type { Metadata } from "next";
import Link from "next/link";
import { projects, site } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import ProjectsExplorer from "@/components/ProjectsExplorer";

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
