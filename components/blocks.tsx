import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/lib/dictionary";
import { certs, milestones, markets, faqs as allFaqs, type Faq } from "@/lib/data";
import { pick, cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./ui";
import { ArrowRight, Plus, Icon } from "./icons";

/* ---------------- Trust band (sade statik şerit) ---------------- */

export function TrustBand({ t }: { t: Dict }) {
  return (
    <section className="border-y border-line bg-white">
      <div className="container flex flex-col items-center gap-5 py-6 md:flex-row md:justify-between md:gap-8">
        <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-brand-400">
          {t.home.trustIntro}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
          {certs.map((c) => (
            <span key={c.code} className="text-sm font-semibold tracking-tight text-brand-700">
              {c.code}
            </span>
          ))}
          <span className="hidden h-4 w-px bg-line sm:block" />
          <span className="text-sm font-semibold text-teal-700">80+ {t.common.exportTo}</span>
          <span className="text-sm font-semibold text-teal-700">%100 {t.common.madeInTurkey}</span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA band (temiz lacivert, editöryel) ---------------- */

export function CtaBand({
  locale,
  t,
  title,
  text,
  primary,
  secondary,
}: {
  locale: Locale;
  t: Dict;
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  const base = `/${locale}`;
  const _title = title ?? t.contact.hero.title;
  const _text = text ?? t.contact.hero.subtitle;
  const _primary = primary ?? { label: t.cta.getQuote, href: `${base}/contact?type=quote` };
  const _secondary = secondary ?? { label: t.cta.requestSample, href: `${base}/contact?type=sample` };

  return (
    <section className="section-sm">
      <div className="container">
        <Reveal className="rounded-[12px] bg-ink px-6 py-12 sm:px-12 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center">
            <div>
              <span className="block h-[2px] w-10 bg-accent-500" />
              <h2 className="mt-5 max-w-xl font-display text-3xl font-semibold leading-[1.08] text-white sm:text-[2.4rem]">
                {_title}
              </h2>
              <p className="mt-4 max-w-xl text-white/65">{_text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
              <Link href={_primary.href} className="btn btn-accent btn-lg w-full sm:w-auto">
                {_primary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={_secondary.href} className="btn btn-light btn-lg w-full sm:w-auto">
                {_secondary.label}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FAQ accordion (native details) ---------------- */

export function FaqList({ locale, items }: { locale: Locale; items?: Faq[] }) {
  const list = items ?? allFaqs;
  return (
    <div className="mx-auto max-w-3xl divide-y divide-brand-100 overflow-hidden rounded-3xl border border-brand-100 bg-white">
      {list.map((f, i) => (
        <details key={i} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-display text-base font-semibold text-ink transition hover:bg-brand-50/50">
            {pick(f.q, locale)}
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition group-open:rotate-45 group-open:bg-teal-500 group-open:text-white">
              <Plus className="h-4 w-4" />
            </span>
          </summary>
          <div className="px-6 pb-5 text-[0.95rem] leading-relaxed text-brand-900/70">
            {pick(f.a, locale)}
          </div>
        </details>
      ))}
    </div>
  );
}

/* ---------------- Certificates grid ---------------- */

export function CertGrid({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {certs.map((c, i) => (
        <Reveal key={c.code} delay={i * 60} className="group flex items-start gap-4 rounded-3xl border border-brand-100 bg-white p-5 transition hover:border-teal-200 hover:shadow-soft">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-teal-50 to-brand-50 text-teal-600 transition group-hover:from-teal-500 group-hover:to-brand-600 group-hover:text-white">
            <Icon name="award" className="h-6 w-6" />
          </span>
          <div>
            <div className="font-display font-bold text-ink">{c.code}</div>
            <div className="text-sm font-medium text-brand-700">{pick(c.name, locale)}</div>
            <div className="mt-0.5 text-xs text-brand-900/55">{pick(c.desc, locale)}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- Timeline ---------------- */

export function Timeline({ locale }: { locale: Locale }) {
  return (
    <div className="relative ml-3 border-l-2 border-dashed border-brand-200 pl-8">
      {milestones.map((m, i) => (
        <Reveal key={i} delay={i * 60} className="relative pb-10 last:pb-0">
          <span className="absolute -left-[41px] grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-teal-500 to-brand-600 text-[0.6rem] font-bold text-white ring-4 ring-white">
            {i + 1}
          </span>
          <div className="text-sm font-bold uppercase tracking-wide text-teal-600">{m.year}</div>
          <h3 className="mt-1 font-display text-lg font-semibold text-ink">{pick(m.title, locale)}</h3>
          <p className="mt-1 text-sm leading-relaxed text-brand-900/65">{pick(m.text, locale)}</p>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- Markets grid ---------------- */

export function MarketsGrid({ locale }: { locale: Locale }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
      {markets.map((m, i) => (
        <Reveal
          key={i}
          delay={i * 25}
          className="flex items-center gap-3 bg-white px-4 py-3.5"
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-[1px] bg-accent-500" />
          <span className="text-sm font-medium text-brand-800">{pick(m.name, locale)}</span>
        </Reveal>
      ))}
    </div>
  );
}
