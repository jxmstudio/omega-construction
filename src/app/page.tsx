import Link from "next/link";
import Image from "next/image";
import {
  credentials,
  products,
  projects,
  references,
  services,
  site,
  stats,
  whyChooseUs,
} from "@/lib/site";
import ProjectCarousel from "@/components/ProjectCarousel";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import References from "@/components/References";

export default function Home() {
  return (
    <>
      <JsonLd />

      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src="/brand/home-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="ken-burns object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
        <div className="bg-grid absolute inset-0 opacity-70" />
        <div
          className="absolute inset-y-0 right-0 w-1/2 opacity-[0.15]"
          style={{
            background:
              "radial-gradient(60% 80% at 80% 20%, var(--color-accent), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
            Auckland · Established {site.established} · Registered Master Builder
          </span>
          <h1 className="animate-fade-up mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl [animation-delay:80ms]">
            Thirty-five years of proven construction across Auckland.
          </h1>
          <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-white/75 [animation-delay:160ms]">
            Commercial and residential building, alterations and fit-outs —
            delivered by a Site Safe–certified team trusted since {site.established}.
          </p>
          <div className="animate-fade-up mt-9 flex flex-wrap gap-4 [animation-delay:240ms]">
            <Link
              href="/contact"
              className="rounded bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-strong"
            >
              Request a Quote
            </Link>
            <a
              href={site.phoneHref}
              className="rounded border border-white/25 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Call {site.phone}
            </a>
          </div>

          <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-bold text-accent-bright sm:text-3xl">
                  <Counter value={s.value} />
                </dt>
                <dd className="mt-1 text-xs leading-snug text-white/60">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ───────── Credentials strip ───────── */}
      <section className="border-b border-line bg-sand">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-6 md:grid-cols-4">
          {credentials.map((c) => (
            <div key={c.label} className="px-4 py-6 text-center">
              <div className="font-display text-base font-bold text-ink">{c.label}</div>
              <div className="mt-1 text-xs text-mute">{c.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── Intro / positioning ───────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionTag>Who we are</SectionTag>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
              An established builder, matched by a team that delivers.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-slate">
              Founded in {site.established} by {site.founder} — a Registered Master
              Builder and Licensed Building Practitioner — Omega Construction has
              planned, built, altered and refurbished commercial and residential
              properties across Auckland for three decades, balanced between
              commercial projects and upper-end residential.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              We back it with a comprehensive, end-to-end quality control process and
              health &amp; safety systems — Site Safe membership, Site Smart management,
              and full licensing and insurance — the credentials procurement teams look
              for, at the centre of how we work.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-strong"
            >
              Read the Omega story →
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Services ───────── */}
      <section className="border-y border-line bg-sand">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionTag>What we build</SectionTag>
              <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
                Services
              </h2>
            </div>
            <Link href="/services" className="font-semibold text-accent hover:text-accent-strong">
              All services →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80} className="h-full">
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative flex h-full flex-col rounded-lg border border-line-2 bg-surface p-7 transition-shadow hover:shadow-lg"
                >
                  <span className="font-display text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-ink group-hover:text-accent">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{s.short}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.sectors.map((sec) => (
                      <span
                        key={sec}
                        className="rounded border border-line px-2 py-0.5 text-xs text-mute"
                      >
                        {sec}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Projects teaser ───────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionTag>Selected work</SectionTag>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
              Projects that do the selling
            </h2>
          </div>
          <Link href="/projects" className="font-semibold text-accent hover:text-accent-strong">
            View portfolio →
          </Link>
        </div>

        <div className="mt-10">
          <ProjectCarousel projects={projects} />
        </div>
      </section>

      {/* ───────── Why choose us ───────── */}
      <section className="border-y border-line bg-sand">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="max-w-2xl">
            <SectionTag>Why choose us</SectionTag>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
              Built on quality, run with care
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={(i % 4) * 70} className="h-full">
                <div className="flex h-full flex-col rounded-lg border border-line-2 bg-surface p-6">
                  <span className="font-display text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink">{w.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Health & Safety ───────── */}
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
          <div>
            <SectionTag dark>Our edge</SectionTag>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Health &amp; safety as a competitive asset
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-white/70">
              For commercial tenders, safety credentials decide who makes the shortlist.
              Omega is a Site Safe member running Site Smart cloud-based H&amp;S management,
              backed by Master Builder registration and {site.publicLiability} public
              liability insurance — the proof procurement teams need, front and centre.
            </p>
            <Link
              href="/health-safety"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-accent-bright hover:text-white"
            >
              Our H&amp;S credentials →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 self-center">
            {credentials.map((c) => (
              <div key={c.label} className="rounded-lg border border-white/10 bg-white/5 p-5">
                <div className="font-display text-lg font-bold text-white">{c.label}</div>
                <div className="mt-1 text-xs text-white/50">{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Products / distribution ───────── */}
      <section className="border-b border-line bg-sand">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <SectionTag>Distribution</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
            Sole New Zealand distributor
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {products.map((p) => (
              <div
                key={p.slug}
                className="flex flex-col rounded-lg border border-line-2 bg-surface p-7"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {p.tagline}
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-ink">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{p.blurb}</p>
                <Link
                  href={`/products/${p.slug}`}
                  className="mt-5 font-semibold text-accent hover:text-accent-strong"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── References ───────── */}
      <References items={references} />

      {/* ───────── Final CTA ───────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="relative overflow-hidden rounded-2xl bg-ink px-8 py-14 text-center text-white md:px-16 md:py-20">
          <div className="bg-grid absolute inset-0 opacity-60" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold md:text-4xl">
              Planning a build, renovation or fit-out?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Tell us about your project and we&apos;ll come back with a clear next step.
              Commercial or residential — we&apos;ll point you to the right team.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-strong"
              >
                Request a Quote
              </Link>
              <a
                href={site.phoneHref}
                className="rounded border border-white/25 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionTag({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${
        dark ? "text-accent-bright" : "text-accent-strong"
      }`}
    >
      <span className={`h-px w-6 ${dark ? "bg-accent-bright" : "bg-accent"}`} />
      {children}
    </span>
  );
}

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: site.legalName,
    url: `https://${site.domain}`,
    telephone: site.phone,
    foundingDate: String(site.established),
    areaServed: { "@type": "City", name: "Auckland" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Auckland",
      addressCountry: "NZ",
    },
    description:
      "Auckland commercial and residential building contractor established in 1994. Site Safe certified.",
    knowsAbout: services.map((s) => s.title),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
