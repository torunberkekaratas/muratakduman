import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { getDict } from "@/lib/dictionary";
import { products, productById, brandById, categoryById, sectorById } from "@/lib/data";
import { pick, cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui";
import { ProductCard, ProductBadge } from "@/components/cards";
import { CtaBand } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { Icon, ArrowRight, Download } from "@/components/icons";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  const p = productById(id);
  if (!p) return {};
  return { title: pick(p.name, locale), description: pick(p.benefit, locale) };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; id: string }>;
}) {
  const { locale, id } = await params;
  const p = productById(id);
  if (!p) notFound();

  const t = getDict(locale);
  const base = `/${locale}`;
  const brand = brandById(p.brandId);
  const category = categoryById(p.categoryId);
  const productName = pick(p.name, locale);

  const related = products
    .filter((x) => x.id !== p.id && (x.brandId === p.brandId || x.categoryId === p.categoryId))
    .slice(0, 4);

  const specs = [
    { label: t.common.brand, value: brand?.name ?? "" },
    { label: t.common.category, value: category ? pick(category.name, locale) : "" },
    { label: t.common.productCode, value: p.code },
    { label: t.common.packaging, value: p.packaging.join(" · ") },
  ];

  return (
    <>
      <section className="border-b border-brand-100 bg-brand-50/40">
        <div className="container py-4 text-sm text-brand-500">
          <Link href={base} className="hover:text-teal-700">{t.nav.home}</Link>
          <span className="px-2">/</span>
          <Link href={`${base}/products`} className="hover:text-teal-700">{t.nav.products}</Link>
          <span className="px-2">/</span>
          <span className="text-brand-800">{productName}</span>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Visual */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[12px] border border-brand-100">
                <Photo
                  src={p.image}
                  alt={productName}
                  fit={p.imageFit ?? "cover"}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={cn("h-full w-full", p.imageFit === "contain" ? "bg-white" : "bg-brand-50")}
                  imgClassName={p.imageFit === "contain" ? "p-8" : ""}
                />
                <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-700 shadow-sm">
                  {brand?.name}
                </span>
                <span className="absolute right-5 top-5 rounded-lg bg-ink/85 px-2 py-1 font-mono text-xs text-white">
                  {p.code}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.badges.map((b) => (
                  <ProductBadge key={b} badge={b} t={t} />
                ))}
              </div>
            </div>
          </Reveal>

          {/* Info */}
          <div>
            <Link href={`${base}/brands/${brand?.slug}`} className="chip-teal">{brand?.name}</Link>
            <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              {productName}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-brand-900/70">{pick(p.benefit, locale)}</p>

            {p.price && (
              <p className="mt-5 font-display text-3xl font-bold text-teal-700">
                {p.price.toLocaleString("tr-TR")} ₺
                <span className="ml-2 align-middle text-sm font-medium text-brand-400">{p.packaging[0]}</span>
              </p>
            )}

            {/* Dosage */}
            <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50/50 p-5">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-ink">
                <Icon name="drop" className="h-4 w-4 text-teal-600" />
                {t.common.dosage}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/75">{pick(p.usage, locale)}</p>
            </div>

            {/* Specs */}
            <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-brand-100 bg-brand-100">
              {specs.map((s) => (
                <div key={s.label} className="bg-white p-4">
                  <dt className="text-xs font-medium uppercase tracking-wide text-brand-400">{s.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>

            {/* Sectors */}
            {p.sectors.length > 0 && (
              <div className="mt-6">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-brand-400">{t.common.usageAreas}</p>
                <div className="flex flex-wrap gap-2">
                  {p.sectors.map((sid) => {
                    const s = sectorById(sid);
                    if (!s) return null;
                    const href = s.featured ? `${base}/solutions/marine-defense` : `${base}/solutions?sector=${s.id}`;
                    return (
                      <Link key={sid} href={href} className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-white px-3 py-1.5 text-sm text-brand-700 transition hover:border-teal-300 hover:text-teal-700">
                        <Icon name={s.icon} className="h-4 w-4" />
                        {pick(s.name, locale)}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            <p className="mt-7 text-sm text-brand-500">{t.productDetail.requestNote}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link href={`${base}/contact?type=quote&product=${encodeURIComponent(productName)}`} className="btn btn-primary btn-lg">
                {t.cta.getQuote}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={`${base}/contact?type=sample&product=${encodeURIComponent(productName)}`} className="btn btn-outline btn-lg">
                {t.cta.requestSample}
              </Link>
              <Link href={`${base}/contact?type=quote&product=${encodeURIComponent(productName + " (SDS/TDS)")}`} className="btn btn-ghost btn-lg">
                <Download className="h-4 w-4" />
                {t.common.downloadSds}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section bg-brand-50/50 pt-0">
          <div className="container pt-16">
            <SectionHeader eyebrow={t.nav.products} title={t.common.relatedProducts} />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((rp, i) => (
                <Reveal key={rp.id} delay={(i % 4) * 60}>
                  <ProductCard product={rp} locale={locale} t={t} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand locale={locale} t={t} />
    </>
  );
}
