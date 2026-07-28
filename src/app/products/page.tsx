import type { Metadata } from "next";
import Link from "next/link";
import { products, site } from "@/lib/site";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Products | Cem-Gon™ & Fab-Form — Sole NZ Distributor",
  description:
    "Omega Construction is the sole New Zealand distributor of Cem-Gon™ concrete splash remover and Fab-Form sustainable fabric forming systems.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        title="Sole New Zealand distributor"
        intro="Beyond building, Omega Construction is the sole New Zealand distributor of two products tradespeople genuinely rely on."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {products.map((p) => (
            <div
              key={p.slug}
              className="flex flex-col overflow-hidden rounded-2xl border border-line-2 bg-surface"
            >
              <div className="relative flex aspect-[16/10] items-center justify-center bg-ink-2 text-white/30">
                <div className="bg-grid absolute inset-0 opacity-40" />
                <span className="relative font-display text-lg uppercase tracking-wider">
                  {p.name}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {p.tagline}
                </span>
                <h2 className="mt-2 font-display text-2xl font-bold text-ink">{p.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{p.blurb}</p>
                <Link
                  href={`/products/${p.slug}`}
                  className="mt-5 inline-block rounded bg-accent px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
                >
                  View {p.name} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 text-center md:pb-24">
        <p className="text-slate">
          Trade or stockist enquiry?{" "}
          <Link href="/contact" className="font-semibold text-accent hover:text-accent-strong">
            Get in touch
          </Link>{" "}
          or call{" "}
          <a href={site.phoneHref} className="font-semibold text-accent hover:text-accent-strong">
            {site.phone}
          </a>
          .
        </p>
      </section>
    </>
  );
}
