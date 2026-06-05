"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDict } from "@/lib/dictionary";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";

export default function NotFound() {
  const pathname = usePathname();
  const seg = pathname.split("/")[1];
  const locale: Locale = isLocale(seg) ? seg : defaultLocale;
  const t = getDict(locale);

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-gradient-to-b from-brand-50/70 to-white">
      <div className="bg-grid-faint absolute inset-0 opacity-40 [background-size:30px_30px]" />
      <div className="container relative text-center">
        <p className="font-display text-7xl font-extrabold text-brand-200 sm:text-8xl">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">{t.notFound.title}</h1>
        <p className="mx-auto mt-3 max-w-md text-brand-900/65">{t.notFound.text}</p>
        <Link href={`/${locale}`} className="btn btn-primary btn-lg mt-8">
          {t.cta.backHome}
        </Link>
      </div>
    </section>
  );
}
