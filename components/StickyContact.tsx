"use client";

import { useEffect, useState } from "react";
import type { Dict } from "@/lib/dictionary";
import { WhatsApp, ArrowRight } from "./icons";

export function StickyContact({ t }: { t: Dict }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waNumber = t.topbar.phone.replace(/[^\d]/g, "");
  const waText = encodeURIComponent(
    "Merhaba, WUNSC ürünleri hakkında bilgi almak istiyorum.",
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Yukarı çık"
        className={`grid h-11 w-11 place-items-center rounded-full border border-brand-100 bg-white text-ink shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:text-teal-600 ${
          showTop ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowRight className="h-5 w-5 -rotate-90" />
      </button>

      <a
        href={`https://wa.me/${waNumber}?text=${waText}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group inline-flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] py-3 pl-3.5 pr-3.5 text-white shadow-xs transition-all duration-300 hover:gap-2 hover:pr-5"
      >
        <WhatsApp className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[120px]">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
