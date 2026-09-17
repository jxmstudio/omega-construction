import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, recentProjects, services, site } from "@/lib/site";
import { areas, childAreas, getArea } from "@/lib/areas";
import { absoluteUrl, faqJsonLd, JsonLd, ORG_ID } from "@/lib/seo";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import FaqList from "@/components/FaqList";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  const hero = projects.find((p) => p.slug === area.projectSlugs[0])?.hero ?? site.ogImage;
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `/areas/${area.slug}` },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      images: [{ url: hero, alt: `Omega Construction work in ${area.name}` }],
    },
  };
}

export default async function AreaPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const parent = area.parent ? getArea(area.parent) : undefined;
  const kids = childAreas(area.slug);
  const siblings = parent
    ? childAreas(parent.slug).filter((a) => a.slug !== area.slug)
    : areas.filter((a) => a.kind === "region" && a.slug !== area.slug);

  const areaProjects = area.projectSlugs
    .map((s) => projects.find((p) => p.slug === s))
    .filter((p): p is (typeof projects)[number] => Boolean(p));
  const areaRecent = recentProjects.filter((r) => area.recentProjectTitles.includes(r.title));
  const areaServices = area.serviceSlugs
    .map((s) => services.find((x) => x.slug === s))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Areas we serve", href: "/areas" },
    ...(parent ? [{ label: parent.name, href: `/areas/${parent.slug}` }] : []),
    { label: area.name },
  ];

  const localServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(`/areas/${area.slug}`)}#service`,
    name: `Construction services in ${area.name}`,
    serviceType: "General contractor",
    description: area.metaDescription,
    url: absoluteUrl(`/areas/${area.slug}`),
    provider: { "@id": ORG_ID },
    areaServed: [area.name, ...area.suburbs].map((name) => ({ "@type": "Place", name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Services in ${area.name}`,
      itemListElement: areaServices.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          url: absoluteUrl(`/services/${s.slug}`),
        },
      })),
    },
  };

  return (
    <>
      <JsonLd data={localServiceJsonLd} />
      <JsonLd data={faqJsonLd(area.faqs)} />

      <PageHeader crumbs={crumbs} title={area.title} intro={area.intro[0]}>
        <div className="mt-7 flex flex-wrap gap-2">
          {area.suburbs.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70"
            >
              {s}
            </span>
          ))}
        </div>
      </PageHeader>

      {/* body */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            {area.intro.slice(1).map((para, i) => (
              <p
                key={i}
                className={`text-lg leading-relaxed text-slate ${i > 0 ? "mt-4" : ""}`}
              >
                {para}
              </p>
            ))}

            <h2 className="mt-10 font-display text-2xl font-bold text-ink">
              What we build in {area.name}
            </h2>
            <ul className="mt-4 space-y-3">
              {area.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-slate">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-2xl font-bold text-ink">
              Services in {area.name}
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {areaServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-center justify-between rounded-lg border border-line-2 bg-surface p-5 transition-colors hover:border-accent"
                >
                  <div>
                    <h3 className="font-display text-base font-bold text-ink group-hover:text-accent">
                      {s.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-mute">{s.short}</p>
                  </div>
                  <span className="ml-4 text-accent">→</span>
                </Link>
              ))}
            </div>

            <div className="mt-12">
              <FaqList faqs={area.faqs} heading={`Building in ${area.name}: common questions`} />
            </div>
          </div>

          {/* sidebar */}
          <aside className="md:col-span-5">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-xl border border-line-2 bg-sand p-7">
                <h3 className="font-display text-xl font-bold text-ink">
                  Planning a project in {area.name}?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Registered Master Builder and Licensed Building Practitioner, Site Safe
                  member, based in Mt Eden and building across Auckland since{" "}
                  {site.established}.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 block rounded bg-accent px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-accent-strong"
                >
                  Request a Quote
                </Link>
                <a
                  href={site.phoneHref}
                  className="mt-3 block rounded border border-line-2 px-5 py-3 text-center font-semibold text-ink transition-colors hover:border-ink"
                >
                  Call {site.phone}
                </a>
              </div>

              {(kids.length > 0 || siblings.length > 0) && (
                <div className="rounded-xl border border-line-2 bg-surface p-7">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">
                    {kids.length > 0 ? `Suburbs in ${area.name}` : parent ? `Also in ${parent.name}` : "Other areas"}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm">
                    {(kids.length > 0 ? kids : siblings).map((a) => (
                      <li key={a.slug}>
                        <Link href={`/areas/${a.slug}`} className="font-medium text-accent hover:text-accent-strong">
                          {a.name}
                        </Link>
                      </li>
                    ))}
                    {parent && (
                      <li className="pt-2">
                        <Link href={`/areas/${parent.slug}`} className="text-slate hover:text-ink">
                          ← All of {parent.name}
                        </Link>
                      </li>
                    )}
                    <li>
                      <Link href="/areas" className="text-slate hover:text-ink">
                        All areas we serve
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* local work */}
      {(areaProjects.length > 0 || areaRecent.length > 0) && (
        <section className="border-t border-line bg-sand">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
              Our work in {area.name}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {areaProjects.map((p) => (
                <Reveal key={p.slug}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group block h-full overflow-hidden rounded-lg border border-line bg-surface"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-ink-2">
                      <Image
                        src={p.hero}
                        alt={`${p.title}, ${p.location}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        {p.category} · {p.location}
                      </span>
                      <h3 className="mt-1 font-display text-lg font-bold text-ink group-hover:text-accent">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate">{p.summary}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
              {areaRecent.map((r) => (
                <Reveal key={r.title}>
                  <div className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface">
                    <div className="relative aspect-[4/3] overflow-hidden bg-ink-2">
                      <Image
                        src={r.image}
                        alt={`${r.title}, ${r.location}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        {r.tag} · {r.location}
                      </span>
                      <h3 className="mt-1 font-display text-lg font-bold text-ink">{r.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate">{r.brief}</p>
                      <p className="mt-3 text-xs uppercase tracking-wider text-mute">
                        Partner · {r.partner}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Link
              href="/projects"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-strong"
            >
              View the full portfolio →
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
