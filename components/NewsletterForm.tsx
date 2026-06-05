"use client";

import { useState } from "react";
import type { Dict } from "@/lib/dictionary";
import { Check, ArrowRight } from "./icons";

export function NewsletterForm({ t }: { t: Dict }) {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="inline-flex items-center gap-2 rounded-xl bg-teal-500/15 px-4 py-3 text-sm font-medium text-teal-200">
        <Check className="h-4 w-4" /> {t.forms.successContact}
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="flex gap-2"
    >
      <input
        type="email"
        required
        placeholder={t.footer.emailPlaceholder}
        aria-label={t.footer.emailPlaceholder}
        className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-teal-400 focus:ring-4 focus:ring-teal-500/10"
      />
      <button type="submit" className="btn btn-primary btn-sm shrink-0" aria-label={t.footer.newsletterCta}>
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
