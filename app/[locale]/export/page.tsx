import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDict } from "@/lib/dictionary";
import { markets, type IconKey } from "@/lib/data";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/ui";
import { CheckList, FeatureItem } from "@/components/cards";
import { MarketsGrid } from "@/components/blocks";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";
import { Icon, ArrowRight } from "@/components/icons";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale);
  return { title: t.exportPage.hero.title, description: t.exportPage.hero.subtitle };
}

const whyIcons: IconKey[] = ["tag", "shield", "box", "truck"];

export default async function ExportPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDict(locale);
  const e = t.exportPage;
  const base = `/${locale}`;

  return (
    <>
      <PageHero badge={e.hero.badge} title={e.hero.title} subtitle={e.hero.subtitle}>
        <Link href="#apply" className="btn btn-primary">{t.cta.distributorApply}<ArrowRight className="h-4 w-4" /></Link>
        <Link href={`${base}/contact?type=quote`} className="btn btn-outline">{t.cta.priceList}</Link>
      </PageHero>

      {/* Markets */}
      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
            <div>
              <SectionHeader title={e.marketsTitle} text={e.marketsText} />
              <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-teal-500 to-brand-600 px-6 py-4 text-white">
                <span className="font-display text-4xl font-extrabold">80+</span>
                <span className="text-sm leading-tight text-white/85">{t.common.exportTo}</span>
              </div>
            </div>
            <MarketsGrid locale={locale} />
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section bg-brand-50/50 pt-0">
        <div className="container pt-16">
          <SectionHeader eyebrow="" title={e.whyTitle} center />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {e.why.map((w, i) => (
              <Reveal key={i} delay={(i % 4) * 70}>
                <FeatureItem icon={whyIcons[i]} title={w.t} text={w.d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow={e.hero.badge} title={e.advantagesTitle} />
            <CheckList items={e.advantages} className="mt-7" />
          </div>
          <Reveal delay={120} className="order-first lg:order-last">
            <div className="relative overflow-hidden rounded-[12px] bg-ink p-10 text-white shadow-card">
              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-teal-500/20 blur-2xl" />
              <Icon name="globe" className="relative h-14 w-14 text-teal-300" />
              <p className="relative mt-6 font-display text-2xl font-bold leading-snug">
                {locale === "tr" ? "Bölgenizde münhasır WUNSC ortağı olun" : "Become the exclusive WUNSC partner in your region"}
              </p>
              <Link href="#apply" className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-300 hover:text-teal-200">
                {t.cta.distributorApply}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-brand-50/50">
        <div className="container">
          <SectionHeader eyebrow="" title={e.processTitle} center />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {e.process.map((s, i) => (
              <Reveal key={i} delay={(i % 4) * 70} className="relative rounded-3xl border border-brand-100 bg-white p-6">
                <span className="font-display text-5xl font-extrabold text-brand-100">0{i + 1}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">{s.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-900/60">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Private label */}
      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-[12px] bg-gradient-to-br from-brand-700 to-teal-600 p-10 text-white shadow-card">
              <div className="bg-grid-faint absolute inset-0 opacity-[0.12] [background-size:24px_24px]" />
              <Icon name="box" className="relative h-14 w-14 text-white/90" />
              <p className="relative mt-6 font-display text-2xl font-bold leading-snug">{e.privateLabel.title}</p>
              <p className="relative mt-3 text-white/80">{e.privateLabel.text}</p>
            </div>
          </Reveal>
          <div>
            <SectionHeader eyebrow={e.privateLabel.eyebrow} title={e.privateLabel.title} />
            <CheckList items={e.privateLabel.points} className="mt-6" />
            <Link href={`${base}/contact?type=quote`} className="btn btn-dark mt-7">
              {t.cta.quoteFason}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="section scroll-mt-24 bg-brand-50/50">
        <div className="container max-w-3xl">
          <SectionHeader eyebrow={e.hero.badge} title={t.cta.distributorApply} center />
          <Reveal className="mt-10 rounded-[12px] border border-brand-100 bg-white p-6 shadow-soft sm:p-10">
            <LeadForm locale={locale} t={t} kind="distributor" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
