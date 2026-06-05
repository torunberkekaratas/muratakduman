import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDict } from "@/lib/dictionary";
import { brands } from "@/lib/data";
import { pick } from "@/lib/utils";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/ui";
import { BrandCard } from "@/components/cards";
import { CtaBand } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale);
  return { title: t.brandsHub.hero.title, description: t.brandsHub.hero.subtitle };
}

export default async function BrandsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDict(locale);
  const c = t.brandsHub.compareCols;

  return (
    <>
      <PageHero badge={t.brandsHub.hero.badge} title={t.brandsHub.hero.title} subtitle={t.brandsHub.hero.subtitle} />

      <section className="section">
        <div className="container grid gap-6 md:grid-cols-3">
          {brands.map((b, i) => (
            <Reveal key={b.id} delay={i * 80}>
              <BrandCard brand={b} locale={locale} t={t} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="section bg-brand-50/50 pt-0">
        <div className="container pt-16">
          <SectionHeader eyebrow={t.common.brands} title={t.brandsHub.compareTitle} center />
          <Reveal className="mt-10 overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-brand-100 bg-brand-50/60 text-xs font-semibold uppercase tracking-wide text-brand-500">
                    <th className="px-6 py-4">{c.brand}</th>
                    <th className="px-6 py-4">{c.forWho}</th>
                    <th className="px-6 py-4">{c.focus}</th>
                    <th className="px-6 py-4">{c.packaging}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-100">
                  {brands.map((b) => (
                    <tr key={b.id} className="transition hover:bg-brand-50/40">
                      <td className="px-6 py-5">
                        <div className="font-display font-bold text-ink">{b.name}</div>
                        <div className="text-xs text-brand-500">{pick(b.tagline, locale)}</div>
                      </td>
                      <td className="px-6 py-5 text-brand-900/75">{pick(b.forWho, locale)}</td>
                      <td className="px-6 py-5 text-brand-900/75">{pick(b.focus, locale)}</td>
                      <td className="px-6 py-5 text-brand-900/75">{pick(b.packaging, locale)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand locale={locale} t={t} />
    </>
  );
}
