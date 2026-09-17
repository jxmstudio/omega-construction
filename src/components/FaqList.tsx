import type { Faq } from "@/lib/site";

/**
 * Accessible, JS-free FAQ accordion. Pair with `faqJsonLd()` on the page so the
 * same questions are emitted as FAQPage structured data.
 */
export default function FaqList({
  faqs,
  heading = "Frequently asked questions",
}: {
  faqs: Faq[];
  heading?: string;
}) {
  if (faqs.length === 0) return null;
  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="font-display text-2xl font-bold text-ink md:text-3xl">
        {heading}
      </h2>
      <div className="mt-6 divide-y divide-line rounded-xl border border-line-2 bg-surface">
        {faqs.map((f) => (
          <details key={f.q} className="group px-6 py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-base font-bold text-ink [&::-webkit-details-marker]:hidden">
              <span>{f.q}</span>
              <span
                aria-hidden
                className="mt-0.5 shrink-0 text-accent transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
