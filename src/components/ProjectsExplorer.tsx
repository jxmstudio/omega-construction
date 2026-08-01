"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/lib/site";

const filters = ["All", "Commercial", "Residential"] as const;
type Filter = (typeof filters)[number];

export default function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const shown =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
              filter === f
                ? "bg-accent text-white"
                : "border border-line-2 text-slate hover:border-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {shown.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group overflow-hidden rounded-lg border border-line bg-surface transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-ink-2">
              <Image
                src={p.hero}
                alt={p.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                {p.category}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 flex translate-y-2 items-center gap-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                View case study →
              </span>
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-mute">
                {p.location}
              </span>
              <h3 className="mt-1 font-display text-xl font-bold text-ink group-hover:text-accent">
                {p.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate">
                {p.summary}
              </p>
              {p.architect && (
                <p className="mt-3 text-xs uppercase tracking-wider text-mute">
                  Architect · {p.architect}
                </p>
              )}
              <span className="mt-4 inline-block text-sm font-semibold text-accent group-hover:text-accent-strong">
                View case study →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
