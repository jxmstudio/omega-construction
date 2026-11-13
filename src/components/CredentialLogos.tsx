import Image from "next/image";
import { credentialLogos } from "@/lib/site";

type Props = {
  /** "row": even strip of tiles. "compact": small chips (footer, sidebars). */
  variant?: "row" | "compact";
  /** Show the label + number under each mark. */
  captions?: boolean;
  /** Caption colours for dark sections. */
  dark?: boolean;
  className?: string;
};

/**
 * Master Builders, Site Safe, LBP and BCITO marks. The artwork is supplied on
 * white, so each mark sits on its own white tile and works on any background.
 */
export default function CredentialLogos({
  variant = "row",
  captions = false,
  dark = false,
  className = "",
}: Props) {
  if (variant === "compact") {
    return (
      <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
        {credentialLogos.map((c) => (
          <li
            key={c.key}
            className="flex h-11 items-center rounded-md bg-white px-2 py-1.5 ring-1 ring-line-2"
            title={`${c.label} — ${c.note}`}
          >
            <Image
              src={c.src}
              alt={c.alt}
              width={c.width}
              height={c.height}
              sizes="120px"
              className="h-full w-auto object-contain"
            />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={`grid grid-cols-2 gap-4 md:grid-cols-4 ${className}`}>
      {credentialLogos.map((c) => (
        <li key={c.key} className="flex flex-col">
          <div className="flex h-28 items-center justify-center rounded-lg bg-white p-4 ring-1 ring-line-2 md:h-32">
            <Image
              src={c.src}
              alt={c.alt}
              width={c.width}
              height={c.height}
              sizes="(min-width: 768px) 240px, 45vw"
              className="h-full w-auto max-w-full object-contain"
            />
          </div>
          {captions && (
            <div className="mt-3 text-center">
              <div className={`text-sm font-semibold ${dark ? "text-white" : "text-ink"}`}>
                {c.label}
              </div>
              <div className={`text-xs ${dark ? "text-white/50" : "text-mute"}`}>{c.note}</div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
