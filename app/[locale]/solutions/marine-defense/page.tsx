import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDict } from "@/lib/dictionary";
import { products } from "@/lib/data";
import { pick } from "@/lib/utils";
import { SectionHeader } from "@/components/ui";
import { ProductCard, CheckList } from "@/components/cards";
import { CtaBand } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { Icon, ArrowRight } from "@/components/icons";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale);
  return { title: t.marine.hero.title, description: t.marine.hero.subtitle };
}

export default async function MarineDefensePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDict(locale);
  const m = t.marine;
  const base = `/${locale}`;
  const marineProducts = products.filter((p) => p.sectors.includes("denizcilik-savunma"));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ink via-brand-800 to-brand-700 text-white">
        <div className="bg-grid-faint absolute inset-0 opacity-[0.1] [background-size:30px_30px]" />
        <div className="absolute -left-16 top-1/3 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="container relative grid items-center gap-10 py-16 lg:grid-cols-[1.3fr_1fr] lg:py-24">
          <Reveal>
            <Link href={`${base}/solutions`} className="text-sm font-medium text-white/60 hover:text-white">
              ← {t.nav.solutions}
            </Link>
            <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-teal-500/20 px-3 py-1.5 text-xs font-semibold text-teal-200">
              ★ {m.hero.badge}
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              {m.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">{m.hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`${base}/contact?type=quote&sector=denizcilik-savunma`} className="btn btn-primary btn-lg">
                {t.cta.technicalTalk}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={`${base}/contact?type=sample&sector=denizcilik-savunma`} className="btn btn-light btn-lg">
                {t.cta.requestSample}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150} className="hidden lg:block">
            <div className="relative overflow-hidden rounded-[12px] shadow-card ring-1 ring-white/10">
              <div className="relative aspect-[4/5] w-full">
                <Photo
                  src="/img/wb/slider-001.jpg"
                  alt={m.hero.title}
                  fit="cover"
                  priority
                  sizes="(max-width: 1024px) 0px, 420px"
                  className="h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white">
                  <Icon name="beaker" className="h-4 w-4" />
                  {locale === "tr" ? "Sertifikalı kimya & yağ çözücüler" : "Certified chemistry & degreasers"}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Applications */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={t.nav.solutions} title={m.applications.title} center />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {m.applications.items.map((it, i) => (
              <Reveal key={i} delay={(i % 4) * 70} className="card">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-50 font-display text-lg font-bold text-brand-600">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">{it.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-900/60">{it.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / industrial reference */}
      <section className="section bg-brand-50/50">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-[12px] bg-gradient-to-br from-teal-600 to-brand-700 p-10 text-white shadow-card">
              <Icon name="shield" className="h-14 w-14 text-white/90" />
              <p className="mt-6 font-display text-2xl font-bold leading-snug">{m.trust.title}</p>
              <div className="mt-6 [&_li]:text-white/85 [&_span]:bg-white/20 [&_span]:text-white">
                <CheckList items={m.trust.points} />
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeader eyebrow={t.home.reputation.eyebrow} title={t.home.reputation.defenseTitle} text={m.trust.text} />
            <Link href={`${base}/quality`} className="btn btn-dark mt-7">
              {t.quality.hero.badge}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      {marineProducts.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHeader eyebrow={t.nav.products} title={locale === "tr" ? "Denizcilik ürünleri" : "Marine products"} center />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {marineProducts.map((p, i) => (
                <Reveal key={p.id} delay={(i % 4) * 70}>
                  <ProductCard product={p} locale={locale} t={t} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Export expansion */}
      <section className="section bg-brand-50/50">
        <div className="container">
          <Reveal className="mx-auto max-w-3xl rounded-[12px] border border-brand-100 bg-white p-8 text-center shadow-soft sm:p-12">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-teal-500 to-brand-600 text-white">
              <Icon name="globe" className="h-7 w-7" />
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold text-ink sm:text-3xl">{m.export.title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-brand-900/70">{m.export.text}</p>
            <Link href={`${base}/export`} className="btn btn-primary btn-lg mt-7">
              {t.exportPage.hero.badge}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        locale={locale}
        t={t}
        primary={{ label: t.cta.technicalTalk, href: `${base}/contact?type=quote&sector=denizcilik-savunma` }}
      />
    </>
  );
}
