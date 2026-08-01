import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, site, SHOW_PROJECT_VALUES } from "@/lib/site";
import PageHeader from "@/components/PageHeader";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.metaTitle,
    description: project.metaDescription,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.metaTitle, description: project.metaDescription },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `https://${site.domain}/` },
      { "@type": "ListItem", position: 2, name: "Projects", item: `https://${site.domain}/projects` },
      { "@type": "ListItem", position: 3, name: project.title, item: `https://${site.domain}/projects/${project.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
        title={project.title}
      >
        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/70">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
            {project.category}
          </span>
          <span>{project.location}</span>
          {project.architect && (
            <>
              <span className="text-white/30">·</span>
              <span>Architect: {project.architect}</span>
            </>
          )}
        </div>
      </PageHeader>

      {/* hero image placeholder */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative -mt-8 flex aspect-[21/9] items-center justify-center overflow-hidden rounded-2xl border border-line bg-ink-2 text-white/30 shadow-lg">
          <div className="bg-grid absolute inset-0 opacity-40" />
          <span className="relative font-display text-sm uppercase tracking-wider">
            Project photography
          </span>
        </div>
      </div>

      {/* body */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="font-display text-2xl font-bold text-ink">Project overview</h2>
            {project.overview.map((para, i) => (
              <p key={i} className="mt-4 text-lg leading-relaxed text-slate">
                {para}
              </p>
            ))}

            <h2 className="mt-12 font-display text-2xl font-bold text-ink">
              The challenge &amp; specification
            </h2>
            {project.specification.map((para, i) => (
              <p key={i} className="mt-4 leading-relaxed text-slate">
                {para}
              </p>
            ))}

            {project.scope && project.scope.length > 0 && (
              <>
                <h2 className="mt-12 font-display text-2xl font-bold text-ink">
                  Scope of project
                </h2>
                <ul className="mt-4 space-y-3">
                  {project.scope.map((item) => (
                    <li key={item} className="flex gap-3 text-slate">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <aside className="md:col-span-4">
            <div className="sticky top-28 rounded-xl border border-line-2 bg-sand p-7">
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-mute">Category</dt>
                  <dd className="font-semibold text-ink">{project.category}</dd>
                </div>
                <div>
                  <dt className="text-mute">Location</dt>
                  <dd className="font-semibold text-ink">{project.location}</dd>
                </div>
                {project.architect && (
                  <div>
                    <dt className="text-mute">Architect</dt>
                    <dd className="font-semibold text-ink">{project.architect}</dd>
                  </div>
                )}
                {SHOW_PROJECT_VALUES && project.value && (
                  <div>
                    <dt className="text-mute">Indicative value</dt>
                    <dd className="font-semibold text-ink">{project.value}</dd>
                  </div>
                )}
              </dl>
              <Link
                href="/contact"
                className="mt-6 block rounded bg-accent px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-accent-strong"
              >
                Start a project like this
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* more projects */}
      <section className="border-t border-line bg-sand">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
              More projects
            </h2>
            <Link href="/projects" className="font-semibold text-accent hover:text-accent-strong">
              View all →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group overflow-hidden rounded-lg border border-line bg-surface"
              >
                <div className="relative flex aspect-[16/9] items-center justify-center bg-ink-2 text-white/30">
                  <div className="bg-grid absolute inset-0 opacity-40" />
                  <span className="relative font-display text-xs uppercase tracking-wider">
                    Project image
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {p.category} · {p.location}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold text-ink group-hover:text-accent">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
