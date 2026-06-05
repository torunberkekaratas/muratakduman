import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDict } from "@/lib/dictionary";
import { cases, testimonials, sectors } from "@/lib/data";
import { pick } from "@/lib/utils";
import { PageHero } from "@/components/PageHero";
import { SectionHeader, Stat } from "@/components/ui";
import { CtaBand } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Icon, Star } from "@/components/icons";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale);
  return { title: t.references.hero.title, description: t.references.hero.subtitle };
}

export default async function ReferencesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDict(locale);
  const r = t.references;
  const s = t.solutions.structure;
  const base = `/${locale}`;

  return (
    <>
      <PageHero badge={r.hero.badge} title={r.hero.title} subtitle={r.hero.subtitle} />

      {/* Stats */}
      <section className="border-b border-brand-100 bg-white py-10">
        <div className="container grid grid-cols-2 gap-6 sm:grid-cols-4">
          <Stat value="80+" label={t.common.exportTo} />
          <Stat value="4" label={locale === "tr" ? "Fabrika" : "Factories"} />
          <Stat value="3" label={t.common.brands} />
          <Stat value="21+" label={locale === "tr" ? "Yıl tecrübe" : "Years"} />
        </div>
      </section>

      {/* Cases */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={r.hero.badge} title={r.casesTitle} center />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {cases.map((c, i) => (
              <Reveal key={i} delay={i * 80} className="card card-hover flex flex-col">
                <span className="chip-teal w-fit">{pick(c.sector, locale)}</span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">{pick(c.title, locale)}</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-400">{s.problem}</p>
                    <p className="mt-0.5 text-brand-900/70">{pick(c.problem, locale)}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">{s.solution}</p>
                    <p className="mt-0.5 text-brand-900/70">{pick(c.solution, locale)}</p>
                  </div>
                </div>
                <div className="mt-auto flex items-end justify-between gap-3 border-t border-brand-100 pt-4">
                  <p className="text-sm text-brand-900/70">{pick(c.result, locale)}</p>
                </div>
                <div className="mt-4 rounded-2xl bg-gradient-to-br from-teal-500 to-brand-600 px-4 py-3 text-white">
                  <div className="font-display text-2xl font-extrabold">{c.stat.v}</div>
                  <div className="text-xs text-white/85">{pick(c.stat.l, locale)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors that trust us */}
      <section className="section bg-brand-50/50">
        <div className="container">
          <SectionHeader eyebrow="" title={r.logosTitle} center />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
            {sectors.map((sec) => (
              <Reveal key={sec.id} className="flex flex-col items-center gap-2 rounded-2xl border border-brand-100 bg-white px-3 py-5 text-center">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={sec.icon} className="h-5 w-5" />
                </span>
                <span className="text-xs font-medium leading-tight text-brand-700">{pick(sec.name, locale)}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="" title={r.testimonialsTitle} center />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((tm, i) => (
              <Reveal key={i} delay={i * 80} className="card flex flex-col">
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, x) => (
                    <Star key={x} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-brand-900/75">“{pick(tm.quote, locale)}”</p>
                <div className="mt-5 border-t border-brand-100 pt-4">
                  <div className="text-sm font-semibold text-ink">{tm.author}</div>
                  <div className="text-xs text-brand-500">{pick(tm.role, locale)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        locale={locale}
        t={t}
        title={r.ctaTitle}
        text={r.ctaText}
        primary={{ label: t.cta.requestSample, href: `${base}/contact?type=sample` }}
        secondary={{ label: t.cta.getQuote, href: `${base}/contact?type=quote` }}
      />
    </>
  );
}
