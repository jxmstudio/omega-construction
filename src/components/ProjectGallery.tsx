"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function ProjectGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const move = useCallback(
    (dir: number) =>
      setOpen((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, move]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`View ${title} photo ${i + 1}`}
            className={`group relative overflow-hidden rounded-xl border border-line bg-ink-2 ${
              i === 0 ? "aspect-[4/3] sm:col-span-2 sm:aspect-[16/9]" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={src}
              alt={`${title} — photo ${i + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/20" />
            <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-surface/90 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              ⤢
            </span>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery`}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-2xl text-white transition hover:bg-white/10"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            aria-label="Previous"
            className="absolute left-4 grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
          >
            ‹
          </button>
          <div
            className="relative h-[82vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[open]}
              alt={`${title} — photo ${open + 1}`}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            aria-label="Next"
            className="absolute right-4 grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
          >
            ›
          </button>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-white/70">
            {open + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
