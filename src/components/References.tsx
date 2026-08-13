import type { Reference } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function References({ items }: { items: Reference[] }) {
  const hasQuotes = items.some((r) => r.quote);

  return (
    <section id="references" className="scroll-mt-24 border-y border-line bg-sand">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-strong">
            <span className="h-px w-6 bg-accent" />
            References
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
            Trusted across business, education and private sectors
          </h2>
          <p className="mt-3 text-slate">
            Three decades of positive partnerships and repeat clients across Auckland.
          </p>
        </div>

        {hasQuotes ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items
              .filter((r) => r.quote)
              .map((r, i) => (
                <Reveal key={r.org} delay={(i % 3) * 80} className="h-full">
                  <figure className="flex h-full flex-col rounded-xl border border-line-2 bg-surface p-7">
                    <span className="font-display text-4xl leading-none text-accent/30">
                      &ldquo;
                    </span>
                    <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                      {r.quote}
                    </blockquote>
                    <figcaption className="mt-5 border-t border-line pt-4">
                      <div className="font-display text-sm font-bold text-ink">{r.org}</div>
                      {r.author && <div className="text-xs text-mute">{r.author}</div>}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
          </div>
        ) : (
          <>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((r, i) => (
                <Reveal key={r.org} delay={(i % 3) * 70} className="h-full">
                  <div className="flex h-full items-center gap-3 rounded-lg border border-line-2 bg-surface px-5 py-4">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="font-display text-sm font-bold text-ink">{r.org}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-sm text-mute">
              Written references available on request.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
