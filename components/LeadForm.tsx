"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/lib/dictionary";
import { sectors } from "@/lib/data";
import { pick, cn } from "@/lib/utils";
import { Check, Send } from "./icons";

export type LeadKind = "sample" | "quote" | "contact" | "distributor";

type FieldName =
  | "name" | "company" | "email" | "phone" | "country" | "city"
  | "sector" | "product" | "quantity" | "targetVolume" | "address" | "message";

const CONFIG: Record<
  LeadKind,
  { fields: FieldName[]; required: FieldName[]; submitKey: keyof Dict["forms"]; successKey: keyof Dict["forms"] }
> = {
  sample: {
    fields: ["name", "company", "email", "phone", "sector", "product", "address", "message"],
    required: ["name", "company", "email", "phone"],
    submitKey: "submitSample",
    successKey: "successSample",
  },
  quote: {
    fields: ["name", "company", "email", "phone", "product", "quantity", "sector", "city", "message"],
    required: ["name", "company", "email", "phone", "product"],
    submitKey: "submitQuote",
    successKey: "successQuote",
  },
  contact: {
    fields: ["name", "email", "phone", "company", "message"],
    required: ["name", "email", "message"],
    submitKey: "submitContact",
    successKey: "successContact",
  },
  distributor: {
    fields: ["name", "company", "email", "phone", "country", "sector", "targetVolume", "message"],
    required: ["name", "company", "email", "phone", "country"],
    submitKey: "submitDistributor",
    successKey: "successDistributor",
  },
};

const FULL_WIDTH: FieldName[] = ["address", "message"];

export function LeadForm({
  locale,
  t,
  kind,
  presetProduct,
}: {
  locale: Locale;
  t: Dict;
  kind: LeadKind;
  presetProduct?: string;
}) {
  const cfg = CONFIG[kind];
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload: Record<string, unknown> = { kind };
    fd.forEach((v, k) => (payload[k] = v));

    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-teal-200 bg-teal-50/60 p-8 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-teal-500 text-white shadow-xs">
          <Check className="h-7 w-7" />
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold text-ink">{t.forms.successTitle}</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-brand-900/70">
          {t.forms[cfg.successKey]}
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn btn-outline btn-sm mt-6">
          {t.forms.another}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {cfg.fields.map((field) => {
          const isReq = cfg.required.includes(field);
          const full = FULL_WIDTH.includes(field);
          return (
            <div key={field} className={cn(full && "sm:col-span-2")}>
              <label htmlFor={field} className="label">
                {t.forms[field as keyof Dict["forms"]]}
                {isReq ? <span className="text-teal-600"> *</span> : <span className="text-brand-300"> {t.forms.optional}</span>}
              </label>
              {field === "sector" ? (
                <select id={field} name={field} className="select" defaultValue="">
                  <option value="" disabled>{t.forms.selectSector}</option>
                  {sectors.map((s) => (
                    <option key={s.id} value={s.id}>{pick(s.name, locale)}</option>
                  ))}
                </select>
              ) : field === "message" || field === "address" ? (
                <textarea id={field} name={field} required={isReq} className="textarea" rows={field === "message" ? 4 : 2} />
              ) : (
                <input
                  id={field}
                  name={field}
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  required={isReq}
                  defaultValue={field === "product" && presetProduct ? presetProduct : undefined}
                  className="input"
                />
              )}
            </div>
          );
        })}
      </div>

      <label className="flex items-start gap-3 rounded-2xl bg-brand-50/60 p-4 text-sm text-brand-900/75">
        <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 shrink-0 rounded border-brand-300 text-teal-600 focus:ring-teal-500" />
        <span>
          {t.forms.consent}{" "}
          <Link href={`/${locale}/legal/privacy`} className="font-medium text-teal-700 underline underline-offset-2">
            {t.footer.privacy}
          </Link>
        </span>
      </label>

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {locale === "tr" ? "Bir hata oluştu, lütfen tekrar deneyin." : "Something went wrong, please try again."}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button type="submit" disabled={status === "loading"} className="btn btn-primary btn-lg">
          {status === "loading" ? t.cta.sending : t.forms[cfg.submitKey]}
          {status !== "loading" && <Send className="h-4 w-4" />}
        </button>
        <p className="text-xs text-brand-400">{t.forms.requiredNote}</p>
      </div>
    </form>
  );
}

/* ---------------- Tabbed wrapper (contact page) ---------------- */

export function LeadFormTabs({
  locale,
  t,
  tabs,
  initial,
  presetProduct,
}: {
  locale: Locale;
  t: Dict;
  tabs: LeadKind[];
  initial: LeadKind;
  presetProduct?: string;
}) {
  const [active, setActive] = useState<LeadKind>(tabs.includes(initial) ? initial : tabs[0]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2 rounded-2xl bg-brand-50 p-1.5">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={cn(
              "flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold transition",
              active === tab ? "bg-white text-teal-700 shadow-sm" : "text-brand-600 hover:text-ink",
            )}
          >
            {t.contact.tabs[tab]}
          </button>
        ))}
      </div>
      <LeadForm locale={locale} t={t} kind={active} presetProduct={presetProduct} />
    </div>
  );
}
