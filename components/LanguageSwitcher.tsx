"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, upcomingLocales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { Globe, ChevronDown, Check } from "./icons";

export function LanguageSwitcher({
  locale,
  tone = "dark",
}: {
  locale: Locale;
  tone?: "dark" | "light";
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function switchTo(next: Locale) {
    if (next === locale) return setOpen(false);
    const segments = pathname.split("/");
    segments[1] = next;
    document.cookie = `NEXT_LOCALE=${next};path=/;max-age=31536000;samesite=lax`;
    router.push(segments.join("/") || `/${next}`);
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wide transition",
          tone === "light"
            ? "text-white/80 hover:bg-white/10 hover:text-white"
            : "text-brand-700 hover:bg-brand-50",
        )}
      >
        <Globe className="h-4 w-4" />
        {locale}
        <ChevronDown className={cn("h-3.5 w-3.5 transition", open && "rotate-180")} />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-2xl border border-brand-100 bg-white p-1.5 shadow-card"
        >
          {locales.map((l) => (
            <button
              key={l}
              role="option"
              aria-selected={l === locale}
              onClick={() => switchTo(l)}
              className={cn(
                "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition",
                l === locale ? "bg-teal-50 text-teal-700" : "text-brand-800 hover:bg-brand-50",
              )}
            >
              {localeNames[l]}
              {l === locale && <Check className="h-4 w-4" />}
            </button>
          ))}
          <div className="my-1 border-t border-brand-100" />
          {upcomingLocales.map((l) => (
            <div
              key={l}
              className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm text-brand-300"
            >
              <span className="uppercase">{l}</span>
              <span className="text-[0.6rem] font-semibold uppercase tracking-wide text-brand-300">
                yakında
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
