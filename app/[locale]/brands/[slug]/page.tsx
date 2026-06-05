import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { getDict } from "@/lib/dictionary";
import { brands, brandById, productsByBrand, type Brand } from "@/lib/data";
import { pick, cn } from "@/lib/utils";
import { SectionHeader, Eyebrow } from "@/components/ui";
import { ProductCard } from "@/components/cards";
import { CtaBand } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Icon, ArrowRight, Check } from "@/components/icons";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const brand = brandById(slug);
  if (!brand) return {};
  const t = getDict(locale);
  return { title: `${brand.name} — ${pick(brand.tagline, locale)}`, description: pick(brand.intro, locale) };
}

const grad: Record<Brand["accent"], string> = {
  teal: "from-teal-500 to-teal-600",
  brand: "from-brand-600 to-brand-800",
  red: "from-wieberr-600 to-wieberr-800",
};

export default async function BrandDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const brand = brandById(slug);
  if (!brand) notFound();

  const t = getDict(locale);
  const base = `/${locale}`;
  const items = productsByBrand(brand.id);
  const ctaLabel = t.cta[brand.ctaKey];

  return (
    <>
      {/* Branded hero */}
      <section className={cn("relative overflow-hidden bg-gradient-to-br text-white", grad[brand.accent])}>
        <div className="bg-grid-faint absolute inset-0 opacity-[0.12] [background-size:28px_28px]" />
        <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="container relative py-16 lg:py-24">
          <Reveal className="max-w-2xl">
            <Link href={`${base}/brands`} className="text-sm font-medium text-white/70 hover:text-white">
              ← {t.nav.brands}
            </Link>
            <div className="mt-4 flex items-center gap-4">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/15 text-2xl font-extrabold">
                {brand.name.charAt(0)}
              </span>
              <div>
                <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{brand.name}</h1>
                <p className="text-lg text-white/85">{pick(brand.tagline, locale)}</p>
              </div>
            </div>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{pick(brand.intro, locale)}</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white/85">
              <Icon name="tag" className="h-4 w-4" /> {pick(brand.audience, locale)}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`${base}/contact?type=${brand.ctaKey === "getQuote" ? "quote" : brand.ctaKey === "requestSample" ? "sample" : "quote"}`} className="btn btn-light btn-lg">
                {ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={`${base}/products?brand=${brand.id}`} className="btn btn-lg bg-white text-ink hover:bg-white/90">
                {t.cta.viewProducts}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={t.common.features} title={pick(brand.tagline, locale)} center />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {brand.features.map((f, i) => (
              <Reveal key={i} delay={i * 80} className="card">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-50 text-teal-600">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{pick(f.t, locale)}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-900/65">{pick(f.d, locale)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      {items.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <SectionHeader eyebrow={t.nav.products} title={`${brand.name} ${t.nav.products}`} />
              <Link href={`${base}/products?brand=${brand.id}`} className="btn btn-outline btn-sm shrink-0">
                {t.cta.allProducts}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((p, i) => (
                <Reveal key={p.id} delay={(i % 4) * 60}>
                  <ProductCard product={p} locale={locale} t={t} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        locale={locale}
        t={t}
        primary={{ label: ctaLabel, href: `${base}/contact?type=quote` }}
      />
    </>
  );
}
