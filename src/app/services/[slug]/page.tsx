import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, services, site } from "@/lib/site";
import Reveal from "@/components/Reveal";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = service.relatedCategory
    ? projects.filter((p) => p.category === service.relatedCategory)
    : [];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        serviceType: service.title,
        description: service.metaDescription,
        areaServed: { "@type": "City", name: "Auckland" },
        provider: {
          "@type": "GeneralContractor",
          name: site.legalName,
          url: `https://${site.domain}`,
          telephone: site.phone,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `https://${site.domain}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `https://${site.domain}/services` },
          { "@type": "ListItem", position: 3, name: service.title, item: `https://${site.domain}/services/${service.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* header */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="bg-grid absolute inset-0 opacity-70" />
        <div
          className="absolute inset-y-0 right-0 w-1/2 opacity-[0.15]"
          style={{
            background:
              "radial-gradient(60% 80% at 80% 20%, var(--color-accent), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
          <nav className="text-xs text-white/50">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{service.title}</span>
          </nav>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            {service.short}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {service.sectors.map((sec) => (
              <span
                key={sec}
                className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70"
              >
                {sec}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* body */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            {service.intro.map((para, i) => (
              <p
                key={i}
                className={`text-lg leading-relaxed text-slate ${i > 0 ? "mt-4" : ""}`}
              >
                {para}
              </p>
            ))}

            <h2 className="mt-10 font-display text-2xl font-bold text-ink">
              What&apos;s included
            </h2>
            <ul className="mt-4 space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3 text-slate">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* sidebar CTA */}
          <aside className="md:col-span-5">
            <div className="sticky top-28 rounded-xl border border-line-2 bg-sand p-7">
              <h3 className="font-display text-xl font-bold text-ink">
                Start your {service.title.toLowerCase()} project
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Registered Master Builder, Site Safe certified, building across Auckland
                since {site.established}.
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
          </aside>
        </div>
      </section>

      {/* related work */}
      {related.length > 0 && (
        <section className="border-t border-line bg-sand">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
              Related {service.relatedCategory?.toLowerCase()} projects
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.slice(0, 3).map((p) => (
                <Reveal key={p.slug}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group block overflow-hidden rounded-lg border border-line bg-surface"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-ink-2">
                      <Image
                        src={p.hero}
                        alt={p.title}
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
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* other services */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
          Other services
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {others.map((s) => (
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
      </section>
    </>
  );
}
