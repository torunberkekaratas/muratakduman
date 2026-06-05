import type { Metadata } from "next";
import { Hanken_Grotesk, Schibsted_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getDict } from "@/lib/dictionary";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyContact } from "@/components/StickyContact";

const sans = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const display = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LayoutParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: LayoutParams): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(isLocale(locale) ? locale : "tr");
  return {
    metadataBase: new URL("https://www.wunsc.com"),
    title: {
      default: `${t.meta.brand} — ${t.meta.tagline}`,
      template: `%s · ${t.meta.brand}`,
    },
    description: t.meta.description,
    keywords: [
      "WUNSC",
      "WUNSCHOME",
      "WUNSC Industrial",
      "WIEBERR",
      "temizlik ürünleri üreticisi",
      "cleaning products manufacturer Türkiye",
      "endüstriyel temizlik",
      "private label",
      "distributor",
    ],
    alternates: {
      languages: { tr: "/tr", en: "/en" },
    },
    openGraph: {
      type: "website",
      siteName: t.meta.brand,
      title: `${t.meta.brand} — ${t.meta.tagline}`,
      description: t.meta.description,
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDict(locale as Locale);

  return (
    <html lang={locale} className={`${sans.variable} ${display.variable}`}>
      <body>
        <Header locale={locale as Locale} t={t} />
        <main>{children}</main>
        <Footer locale={locale as Locale} t={t} />
        <StickyContact t={t} />
      </body>
    </html>
  );
}
