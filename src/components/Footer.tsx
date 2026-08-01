import Link from "next/link";
import Image from "next/image";
import { credentials, nav, services, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/brand/omega-mark-white.png"
            alt="Omega Construction"
            width={249}
            height={94}
            className="h-10 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Auckland commercial and residential building contractor, established{" "}
            {site.established}. Registered Master Builder, Site Safe member, fully
            licensed and insured.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-accent">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.phoneHref} className="hover:text-accent">
                {site.phone}
              </a>
              <span className="text-white/40"> · </span>
              <a href={site.officePhoneHref} className="hover:text-accent">
                {site.officePhone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-accent">
                {site.email}
              </a>
            </li>
            <li>{site.address}</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {credentials.map((c) => (
              <span
                key={c.label}
                className="rounded border border-white/15 px-2 py-1 text-xs text-white/60"
              >
                {c.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-white/50 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </span>
          <span>Sole NZ distributor of Cem-Gon™ &amp; Fab-Form</span>
        </div>
      </div>
    </footer>
  );
}
