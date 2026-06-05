import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDict } from "@/lib/dictionary";
import { sectors } from "@/lib/data";
import { pick, cn } from "@/lib/utils";
import { PageHero } from "@/components/PageHero";
import { SectorCard, CheckList } from "@/components/cards";
import { CtaBand } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Icon, ArrowRight } from "@/components/icons";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale);
  return { title: t.solutions.hero.title, description: t.solutions.hero.subtitle };
}

export default async function SolutionsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDict(locale);
  const base = `/${locale}`;
  const st = t.solutions.structure;
  const detailSectors = sectors.filter((s) => !s.featured);

  return (
    <>
      <PageHero badge={t.solutions.hero.badge} title={t.solutions.hero.title} subtitle={t.solutions.hero.subtitle} />

      {/* Sector cards */}
      <section className="section">
        <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((s, i) => (
            <Reveal key={s.id} delay={(i % 4) * 60}>
              <SectorCard sector={s} locale={locale} t={t} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Marine highlight */}
      <section className="section pt-0">
        <div className="container">
          <Reveal className="relative overflow-hidden rounded-[12px] bg-gradient-to-br from-ink to-brand-800 p-8 text-white sm:p-12">
            <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-teal-500/20 blur-3xl" />
            <div className="bg-grid-faint absolute inset-0 opacity-[0.08] [background-size:26px_26px]" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <span className="chip-teal">★ {locale === "tr" ? "Öne çıkan sektör" : "Featured sector"}</span>
                <h2 className="mt-4 font-display text-3xl font-bold">{t.marine.hero.title}</h2>
                <p className="mt-3 max-w-xl text-white/75">{t.marine.hero.subtitle}</p>
                <Link href={`${base}/solutions/marine-defense`} className="btn btn-primary btn-lg mt-6">
                  {t.cta.discover}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <Icon name="marine" className="mx-auto hidden h-40 w-40 text-teal-300/80 lg:block" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Per-sector detail */}
      <div className="bg-brand-50/40">
        {detailSectors.map((s, i) => (
          <section
            key={s.id}
            id={`sector-${s.id}`}
            className="section scroll-mt-28 border-t border-brand-100 first:border-t-0"
          >
            <div className="container grid items-center gap-10 lg:grid-cols-2">
              <Reveal className={cn(i % 2 === 1 && "lg:order-last")}>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-teal-500 to-brand-600 text-white">
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>
                <h2 className="mt-5 font-display text-2xl font-bold text-ink sm:text-3xl">{pick(s.name, locale)}</h2>
                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-400">{st.problem}</p>
                    <p className="mt-1 text-brand-900/75">{pick(s.problem, locale)}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">{st.solution}</p>
                    <p className="mt-1 text-brand-900/75">{pick(s.solution, locale)}</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="rounded-3xl border border-brand-100 bg-white p-7 shadow-soft">
                  <p className="mb-4 text-sm font-semibold text-ink">{st.benefits}</p>
                  <CheckList items={s.benefits.map((b) => pick(b, locale))} />
                  <div className="mt-6 flex flex-wrap gap-3 border-t border-brand-100 pt-5">
                    <Link href={`${base}/contact?type=sample&sector=${s.id}`} className="btn btn-primary btn-sm">
                      {t.cta.requestSample}
                    </Link>
                    <Link href={`${base}/contact?type=quote&sector=${s.id}`} className="btn btn-outline btn-sm">
                      {t.cta.getQuote}
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <CtaBand locale={locale} t={t} />
    </>
  );
}
