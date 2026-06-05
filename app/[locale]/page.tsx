import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDict } from "@/lib/dictionary";
import {
  brands,
  sectors,
  featuredProducts,
  testimonials,
  type IconKey,
} from "@/lib/data";
import { pick } from "@/lib/utils";
import { SectionHeader, Eyebrow, Stat } from "@/components/ui";
import { BrandCard, SectorCard, ProductCard, FeatureItem, CheckList } from "@/components/cards";
import { TrustBand, CtaBand, FaqList } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Icon, ArrowRight, Check, Star } from "@/components/icons";
import { Photo } from "@/components/Photo";

const whyIcons: IconKey[] = ["drop", "shield", "factory", "box", "globe", "beaker"];

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDict(locale);
  const base = `/${locale}`;
  const h = t.home;

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="border-b border-line bg-paper">
        <div className="container grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
          {/* Left */}
          <div>
            <Reveal>
              <span className="eyebrow">{h.hero.badge}</span>
            </Reveal>
            <Reveal delay={70}>
              <h1 className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.02] tracking-tightest text-ink sm:text-[3rem] lg:text-[3.4rem]">
                {h.hero.titleA} <span className="text-teal-700">{h.hero.titleB}</span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-700">{h.hero.subtitle}</p>
            </Reveal>
            <Reveal delay={210}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={`${base}/contact?type=quote`} className="btn btn-primary btn-lg">
                  {t.cta.getQuote}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href={`${base}/products`} className="btn btn-outline btn-lg">
                  {t.cta.viewProducts}
                </Link>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <dl className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-line border-t border-line pt-7">
                {[
                  { v: h.hero.stat1v, l: h.hero.stat1 },
                  { v: h.hero.stat2v, l: h.hero.stat2 },
                  { v: h.hero.stat3v, l: h.hero.stat3 },
                ].map((s, i) => (
                  <div key={i} className={i === 0 ? "pr-4" : "px-4"}>
                    <dd className="font-display text-3xl font-bold tracking-tight text-ink">{s.v}</dd>
                    <dt className="mt-1 text-sm text-brand-500">{s.l}</dt>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Right visual — tek güçlü gerçek fotoğraf */}
          <Reveal delay={160} className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[14px] border border-line sm:aspect-[5/4] lg:aspect-[4/5]">
              <Photo
                src="/img/wb/banner-006.jpg"
                alt={locale === "tr" ? "Profesyonel / endüstriyel temizlik" : "Professional / industrial cleaning"}
                fit="cover"
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                  {locale === "tr" ? "Tek çatı, üç marka" : "One company, three brands"}
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {brands.map((b) => (
                    <span key={b.id} className="rounded border border-white/25 px-2.5 py-1 text-xs font-semibold text-white">
                      {b.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-lg border border-line bg-white p-4 shadow-card xl:block">
              <div className="font-display text-2xl font-bold text-ink">80+</div>
              <div className="text-xs text-brand-500">{t.common.exportTo}</div>
            </div>
          </Reveal>
        </div>
      </section>

      <TrustBand t={t} />

      {/* ---------------- Brands ---------------- */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={h.brands.eyebrow} title={h.brands.title} text={h.brands.text} center />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {brands.map((b, i) => (
              <Reveal key={b.id} delay={i * 80}>
                <BrandCard brand={b} locale={locale} t={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Sectors ---------------- */}
      <section className="section bg-gradient-to-b from-white to-brand-50/50">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader eyebrow={h.sectors.eyebrow} title={h.sectors.title} text={h.sectors.text} />
            <Link href={`${base}/solutions`} className="btn btn-outline btn-sm shrink-0">
              {t.cta.viewAll}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s, i) => (
              <Reveal key={s.id} delay={(i % 4) * 70}>
                <SectorCard sector={s} locale={locale} t={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Why us ---------------- */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={h.why.eyebrow} title={h.why.title} center />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {h.why.items.map((item, i) => (
              <Reveal key={i} delay={(i % 3) * 70}>
                <FeatureItem icon={whyIcons[i]} title={item.t} text={item.d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Showcase ---------------- */}
      <section className="section bg-gradient-to-b from-brand-50/50 to-white">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader eyebrow={h.showcase.eyebrow} title={h.showcase.title} text={h.showcase.text} />
            <Link href={`${base}/products`} className="btn btn-outline btn-sm shrink-0">
              {t.cta.allProducts}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts().map((p, i) => (
              <Reveal key={p.id} delay={(i % 4) * 70}>
                <ProductCard product={p} locale={locale} t={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Reputation ---------------- */}
      <section className="section">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow={h.reputation.eyebrow} title={h.reputation.title} text={h.reputation.text} />
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2">
              <Stat value="80+" label={t.common.exportTo} />
              <Stat value="4" label={locale === "tr" ? "Fabrika" : "Factories"} />
              <Stat value="3" label={t.common.brands} />
              <Stat value="21+" label={locale === "tr" ? "Yıl tecrübe" : "Years"} />
            </div>
          </div>
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink to-brand-800 p-8 text-white shadow-card">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-teal-500/20 blur-2xl" />
              <Icon name="marine" className="h-10 w-10 text-teal-300" />
              <h3 className="mt-4 font-display text-xl font-semibold">{h.reputation.defenseTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{h.reputation.defenseText}</p>
              <div className="mt-5 [&_li]:text-white/80 [&_span]:bg-teal-400/20 [&_span]:text-teal-200">
                <CheckList items={t.marine.trust.points} />
              </div>
              <Link
                href={`${base}/solutions/marine-defense`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-300 hover:text-teal-200"
              >
                {t.cta.learnMore}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* testimonials */}
        <div className="container mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((tm, i) => (
            <Reveal key={i} delay={i * 80} className="card flex flex-col">
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-brand-900/75">
                “{pick(tm.quote, locale)}”
              </p>
              <div className="mt-5 border-t border-brand-100 pt-4">
                <div className="text-sm font-semibold text-ink">{tm.author}</div>
                <div className="text-xs text-brand-500">{pick(tm.role, locale)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- About teaser ---------------- */}
      <section className="section bg-brand-50/50">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {t.about.production.stats.map((s, i) => (
                <div
                  key={i}
                  className={`rounded-3xl border border-brand-100 bg-white p-6 ${i % 2 ? "mt-0 sm:mt-6" : ""}`}
                >
                  <div className="font-display text-3xl font-bold text-ink">{s.v}</div>
                  <div className="mt-1 text-sm text-brand-900/60">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeader eyebrow={h.aboutTeaser.eyebrow} title={h.aboutTeaser.title} text={h.aboutTeaser.text} />
            <Link href={`${base}/about`} className="btn btn-dark mt-8">
              {t.cta.learnMore}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- Export CTA ---------------- */}
      <CtaBand
        locale={locale}
        t={t}
        title={h.exportCta.title}
        text={h.exportCta.text}
        primary={{ label: t.cta.becomeDistributor, href: `${base}/export` }}
        secondary={{ label: t.cta.getQuote, href: `${base}/contact?type=quote` }}
      />

      {/* ---------------- FAQ ---------------- */}
      <section className="section pt-0">
        <div className="container">
          <SectionHeader eyebrow={t.faq.title} title={t.faq.title} text={t.faq.subtitle} center />
          <div className="mt-12">
            <FaqList locale={locale} items={undefined} />
          </div>
        </div>
      </section>
    </>
  );
}
