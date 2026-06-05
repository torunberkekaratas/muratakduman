import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDict } from "@/lib/dictionary";
import { PageHero } from "@/components/PageHero";
import { ProductCatalog } from "@/components/ProductCatalog";
import { CtaBand } from "@/components/blocks";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale);
  return { title: t.products.hero.title, description: t.products.hero.subtitle };
}

export default async function ProductsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{ brand?: string; cat?: string; sector?: string }>;
}) {
  const { locale } = await params;
  const sp = await searchParams;
  const t = getDict(locale);

  return (
    <>
      <PageHero badge={t.products.hero.badge} title={t.products.hero.title} subtitle={t.products.hero.subtitle} />
      <section className="section">
        <div className="container">
          <ProductCatalog
            locale={locale}
            t={t}
            initial={{ brand: sp.brand, category: sp.cat, sector: sp.sector }}
          />
        </div>
      </section>
      <CtaBand locale={locale} t={t} />
    </>
  );
}
