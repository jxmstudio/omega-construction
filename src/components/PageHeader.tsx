import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function PageHeader({
  crumbs,
  title,
  intro,
  children,
}: {
  crumbs: Crumb[];
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="bg-grid absolute inset-0 opacity-70" />
      <div
        className="absolute inset-y-0 right-0 w-1/2 opacity-[0.15]"
        style={{
          background:
            "radial-gradient(60% 80% at 80% 20%, var(--color-accent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
        <nav className="text-xs text-white/50">
          {crumbs.map((c, i) => (
            <span key={i}>
              {c.href ? (
                <Link href={c.href} className="hover:text-white">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white/80">{c.label}</span>
              )}
              {i < crumbs.length - 1 && <span className="mx-2">/</span>}
            </span>
          ))}
        </nav>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold md:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{intro}</p>
        )}
        {children}
      </div>
    </section>
  );
}
