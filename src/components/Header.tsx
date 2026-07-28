"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur">
      {/* utility bar */}
      <div className="hidden bg-ink text-white/80 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs">
          <span>Auckland-wide · Established {site.established}</span>
          <div className="flex items-center gap-5">
            <span className="text-white/60">Site Safe certified · SiteWise accredited</span>
            <a href={site.phoneHref} className="font-medium text-white hover:text-accent">
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      {/* main bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center" aria-label="Omega Construction home">
          <Image
            src="/brand/omega-mark.png"
            alt="Omega Construction"
            width={249}
            height={94}
            priority
            className="h-11 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="text-sm font-semibold text-ink hover:text-accent"
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
          >
            Request a Quote
          </Link>
        </div>

        {/* mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded border border-line lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-line bg-surface lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-base font-medium text-slate"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-3 py-4">
              <a
                href={site.phoneHref}
                className="flex-1 rounded border border-ink py-2.5 text-center text-sm font-semibold text-ink"
              >
                Call {site.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex-1 rounded bg-accent py-2.5 text-center text-sm font-semibold text-white"
              >
                Request a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
