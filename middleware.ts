import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./i18n/config";

function getLocale(request: NextRequest): string {
  // 1) Daha önce seçilmiş dili (cookie) önceliklendir
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale as never)) {
    return cookieLocale;
  }
  // 2) Tarayıcı dilini dene
  const accept = request.headers.get("accept-language");
  if (accept) {
    const preferred = accept
      .split(",")
      .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase());
    for (const lang of preferred) {
      if (locales.includes(lang as never)) return lang;
    }
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Statik dosyalar ve API'leri atla
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // _next, statik dosyalar, api ve uzantılı dosyalar hariç her yol
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
