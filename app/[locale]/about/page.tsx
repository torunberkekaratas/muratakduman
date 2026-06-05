import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDict } from "@/lib/dictionary";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/ui";
import { CheckList } from "@/components/cards";
import { Timeline, CtaBand } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { Icon, ArrowRight } from "@/components/icons";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale);
  return { title: t.about.hero.title, description: t.about.hero.subtitle };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDict(locale);
  const a = t.about;
  const base = `/${locale}`;

  const mvv = [
    { icon: "globe" as const, ...a.mvv.mission },
    { icon: "sparkles" as const, ...a.mvv.vision },
    { icon: "shield" as const, ...a.mvv.values },
  ];

  return (
    <>
      <PageHero badge={a.hero.badge} title={a.hero.title} subtitle={a.hero.subtitle}>
        <Link href={`${base}/quality`} className="btn btn-primary">{t.quality.hero.badge}</Link>
        <Link href={`${base}/contact`} className="btn btn-outline">{t.cta.contactUs}</Link>
      </PageHero>

      {/* Story */}
      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <SectionHeader eyebrow={t.home.aboutTeaser.eyebrow} title={a.storyTitle} />
          <Reveal className="prose-custom text-[1.02rem]">
            {a.story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="!mt-6 text-brand-900/80">{a.qualityTeaser}</p>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section bg-brand-50/50 pt-0 lg:pt-0">
        <div className="container pt-16 lg:pt-20">
          <SectionHeader eyebrow={a.mvv.title} title={a.mvv.title} center />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {mvv.map((m, i) => (
              <Reveal key={i} delay={i * 80} className="card flex flex-col">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-teal-500 to-brand-600 text-white">
                  <Icon name={m.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{m.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-900/65">{m.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* R&D */}
      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow={a.rnd.eyebrow} title={a.rnd.title} text={a.rnd.text} />
            <CheckList items={a.rnd.points} className="mt-7" />
          </div>
          <Reveal delay={120} className="order-first lg:order-last">
            <div className="relative overflow-hidden rounded-[12px] p-10 text-white shadow-card">
              <Photo
                src="/img/wb/slider-001.jpg"
                alt={locale === "tr" ? "Ar-Ge laboratuvarı" : "R&D laboratory"}
                fit="cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="absolute inset-0 h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-950/92 via-brand-900/80 to-teal-800/80" />
              <div className="relative">
                <Icon name="beaker" className="h-16 w-16 text-white/90" />
                <p className="mt-6 font-display text-2xl font-bold leading-snug">
                  {locale === "tr" ? "Kendi Ar-Ge ve kalite kontrol laboratuvarımız" : "Our own R&D and quality-control lab"}
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/15 pt-6">
                  <div><div className="font-display text-2xl font-bold">pH</div><div className="text-xs text-white/70">{locale === "tr" ? "kontrol" : "control"}</div></div>
                  <div><div className="font-display text-2xl font-bold">QC</div><div className="text-xs text-white/70">{locale === "tr" ? "her parti" : "each batch"}</div></div>
                  <div><div className="font-display text-2xl font-bold">R&D</div><div className="text-xs text-white/70">{locale === "tr" ? "formül" : "formula"}</div></div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Production */}
      <section className="section bg-brand-50/50">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              {a.production.stats.map((s, i) => (
                <div key={i} className={`rounded-3xl border border-brand-100 bg-white p-6 ${i % 2 ? "sm:mt-8" : ""}`}>
                  <div className="font-display text-3xl font-bold text-ink">{s.v}</div>
                  <div className="mt-1 text-sm text-brand-900/60">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <div>
            <SectionHeader eyebrow={a.production.eyebrow} title={a.production.title} text={a.production.text} />
            <Link href={`${base}/products`} className="btn btn-dark mt-8">
              {t.cta.viewProducts}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={a.timelineTitle} title={a.timelineTitle} center className="mb-14" />
          <div className="mx-auto max-w-2xl">
            <Timeline locale={locale} />
          </div>
        </div>
      </section>

      <CtaBand locale={locale} t={t} />
    </>
  );
}
