import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products, site } from "@/lib/site";
import PageHeader from "@/components/PageHeader";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { title: product.metaTitle, description: product.metaDescription },
  };
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.metaDescription,
    brand: { "@type": "Brand", name: product.name.replace(/™/g, "") },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: site.legalName },
      areaServed: "NZ",
    },
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
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
        title={product.name}
        intro={product.tagline}
      />

      {product.image && (
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative -mt-8 aspect-[21/9] overflow-hidden rounded-2xl border border-line bg-ink-2 shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
          </div>
        </div>
      )}

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            {product.description.map((para, i) => (
              <p
                key={i}
                className={`text-lg leading-relaxed text-slate ${i > 0 ? "mt-4" : ""}`}
              >
                {para}
              </p>
            ))}

            <h2 className="mt-10 font-display text-2xl font-bold text-ink">Key features</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {product.features.map((f) => (
                <li key={f} className="flex gap-3 text-slate">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {product.usedBy && (
              <>
                <h2 className="mt-10 font-display text-2xl font-bold text-ink">Ideal for</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.usedBy.map((u) => (
                    <span
                      key={u}
                      className="rounded-full border border-line-2 px-4 py-1.5 text-sm text-slate"
                    >
                      {u}
                    </span>
                  ))}
                </div>
              </>
            )}

            {product.resources && (
              <>
                <h2 className="mt-10 font-display text-2xl font-bold text-ink">
                  Product testing &amp; safety
                </h2>
                <ul className="mt-4 space-y-2">
                  {product.resources.map((r) => (
                    <li key={r.label}>
                      <a
                        href={r.href}
                        className="inline-flex items-center gap-2 text-accent hover:text-accent-strong"
                      >
                        <span aria-hidden>↓</span> {r.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-mute">
                  Documents supplied on request — reports and SDS to be linked at launch.
                </p>
              </>
            )}
          </div>

          {/* enquiry sidebar */}
          <aside className="md:col-span-5">
            <div className="sticky top-28 rounded-xl border border-line-2 bg-sand p-7">
              {product.formats && (
                <>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">
                    Available in
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {product.formats.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm font-medium text-slate"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="my-6 border-t border-line-2" />
                </>
              )}
              <h3 className="font-display text-xl font-bold text-ink">Trade &amp; stockist enquiries</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Omega Construction is the sole New Zealand distributor of {product.name}.
              </p>
              <Link
                href="/contact"
                className="mt-5 block rounded bg-accent px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-accent-strong"
              >
                Enquire about {product.name}
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
    </>
  );
}
