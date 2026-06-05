import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

/**
 * Solid, kurumsal marka işareti — gradient/parlaklık yok.
 * Lacivert kare + beyaz damla + tek turkuaz vurgu noktası.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative grid h-9 w-9 shrink-0 place-items-center rounded-md bg-ink text-white",
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M12 3.5s5 4.7 5 9a5 5 0 0 1-10 0c0-4.3 5-9 5-9Z" fill="#ffffff" />
      </svg>
      <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-[1px] bg-accent-500" />
    </span>
  );
}

export function Logo({
  locale,
  tone = "dark",
  className,
}: {
  locale: Locale;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href={`/${locale}`}
      className={cn("group flex items-center gap-2.5", className)}
      aria-label="WUNSC"
    >
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.35rem] font-extrabold tracking-tightest",
            tone === "light" ? "text-white" : "text-ink",
          )}
        >
          WUNSC
        </span>
        <span
          className={cn(
            "mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.24em]",
            tone === "light" ? "text-white/55" : "text-brand-400",
          )}
        >
          Clean &amp; Care Group
        </span>
      </span>
    </Link>
  );
}
