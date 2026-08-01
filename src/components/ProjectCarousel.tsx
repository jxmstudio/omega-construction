"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/site";

const AUTOPLAY_MS = 5500;

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = projects.length;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count]
  );

  // Autoplay — respects reduced-motion and pauses on hover/focus/hidden tab.
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || paused || count <= 1) return;
    timer.current = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, count]);

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured projects"
    >
      {/* track */}
      <div
        className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {projects.map((p, i) => (
          <article
            key={p.slug}
            className="relative flex min-h-[440px] min-w-full flex-col justify-end overflow-hidden md:min-h-[520px]"
            aria-hidden={i !== index}
          >
            {/* backdrop — real project photography */}
            <div className="absolute inset-0 bg-ink-2">
              <Image
                src={p.hero}
                alt={p.title}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority={i === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/25" />
            </div>

            <div className="relative z-10 max-w-2xl p-8 md:p-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-bright">
                {p.category}
              </span>
              <h3 className="mt-4 font-display text-3xl font-extrabold text-white md:text-4xl">
                {p.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-white/60">{p.location}</p>
              <p className="mt-4 max-w-xl leading-relaxed text-white/80">{p.summary}</p>
              {p.architect && (
                <p className="mt-3 text-xs uppercase tracking-wider text-white/45">
                  Architect · {p.architect}
                </p>
              )}
              <Link
                href={`/projects/${p.slug}`}
                tabIndex={i === index ? 0 : -1}
                className="mt-6 inline-flex items-center gap-2 rounded bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
              >
                View case study →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* arrows */}
      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Previous project"
        className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-ink/40 text-white backdrop-blur transition hover:bg-ink/70 md:grid"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Next project"
        className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-ink/40 text-white backdrop-blur transition hover:bg-ink/70 md:grid"
      >
        ›
      </button>

      {/* dots */}
      <div className="absolute bottom-5 right-6 z-10 flex items-center gap-2">
        {projects.map((p, i) => (
          <button
            key={p.slug}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to ${p.title}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-7 bg-accent-bright" : "w-2 bg-white/35 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
