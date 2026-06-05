import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDict } from "@/lib/dictionary";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/ui";
import { CertGrid, CtaBand } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Icon, ArrowRight } from "@/components/icons";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale);
  return { title: t.quality.hero.title, description: t.quality.hero.subtitle };
}

export default async function QualityPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDict(locale);
  const q = t.quality;
  const base = `/${locale}`;

  return (
    <>
      <PageHero badge={q.hero.badge} title={q.hero.title} subtitle={q.hero.subtitle} />

      {/* Certificates */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={q.hero.badge} title={q.certsTitle} center />
          <div className="mt-12">
            <CertGrid locale={locale} />
          </div>
          <p className="mt-6 text-center text-sm text-brand-400">{q.certsNote}</p>
        </div>
      </section>

      {/* R&D process */}
      <section className="section bg-brand-50/50">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow={t.about.rnd.eyebrow} title={q.rndTitle} text={q.rndText} />
          </div>
          <Reveal delay={120} className="order-first lg:order-last">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "beaker" as const, t: locale === "tr" ? "Hammadde QC" : "Raw-material QC" },
                { icon: "drop" as const, t: locale === "tr" ? "pH & viskozite" : "pH & viscosity" },
                { icon: "shield" as const, t: locale === "tr" ? "Parti tutarlılığı" : "Batch consistency" },
                { icon: "sparkles" as const, t: locale === "tr" ? "Performans testi" : "Performance test" },
              ].map((c, i) => (
                <div key={i} className="rounded-3xl border border-brand-100 bg-white p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-50 text-teal-600">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-ink">{c.t}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sustainability + SDS */}
      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-2">
          <Reveal className="relative overflow-hidden rounded-[12px] bg-gradient-to-br from-teal-600 to-brand-700 p-8 text-white shadow-card sm:p-10">
            <Icon name="leaf" className="h-12 w-12 text-white/90" />
            <h2 className="mt-5 font-display text-2xl font-bold">{q.sustainTitle}</h2>
            <p className="mt-3 text-white/80">{q.sustainText}</p>
          </Reveal>
          <Reveal delay={100} className="rounded-[12px] border border-brand-100 bg-white p-8 shadow-soft sm:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
              <Icon name="shield" className="h-6 w-6" />
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold text-ink">{q.sdsTitle}</h2>
            <p className="mt-3 text-brand-900/70">{q.sdsText}</p>
            <Link href={`${base}/contact?type=quote`} className="btn btn-outline mt-6">
              {t.common.downloadSds}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* Note */}
        <div className="container mt-6">
          <Reveal className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-amber-400 text-xs font-bold text-white">!</span>
            <p className="text-sm leading-relaxed text-amber-900">{q.note}</p>
          </Reveal>
        </div>
      </section>

      <CtaBand locale={locale} t={t} />
    </>
  );
}
