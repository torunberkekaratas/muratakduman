"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/lib/dictionary";
import { brands, sectors, categories } from "@/lib/data";
import { pick, cn, telHref } from "@/lib/utils";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  Close,
  Phone,
  Mail,
  Icon,
} from "./icons";

type Group = "brands" | "products" | "solutions";

const accentText: Record<string, string> = {
  teal: "text-teal-600 bg-teal-50",
  brand: "text-brand-600 bg-brand-50",
  red: "text-wieberr-600 bg-wieberr-50",
};

export function Header({ locale, t }: { locale: Locale; t: Dict }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<Group | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const base = `/${locale}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => href !== base && pathname.startsWith(href);

  const simpleLinks = [
    { label: t.nav.about, href: `${base}/about` },
    { label: t.nav.export, href: `${base}/export` },
    { label: t.nav.quality, href: `${base}/quality` },
    { label: t.nav.references, href: `${base}/references`, hideLg: true },
    { label: t.nav.contact, href: `${base}/contact` },
  ];

  return (
    <header className="sticky top-0 z-40">
      {/* Top bar */}
      <div className="hidden bg-ink text-white/80 md:block">
        <div className="container flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <a href={telHref(t.topbar.phone)} className="inline-flex items-center gap-1.5 hover:text-white">
              <Phone className="h-3.5 w-3.5" /> {t.topbar.phone}
            </a>
            <a href={`mailto:${t.topbar.email}`} className="inline-flex items-center gap-1.5 hover:text-white">
              <Mail className="h-3.5 w-3.5" /> {t.topbar.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-1.5 text-teal-300 lg:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              {t.topbar.badge}
            </span>
            <LanguageSwitcher locale={locale} tone="light" />
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-line bg-paper/95 shadow-soft"
            : "border-line/60 bg-paper",
        )}
      >
        <div className="container flex h-[68px] items-center justify-between gap-4">
          <Logo locale={locale} />

          {/* Desktop nav */}
          <nav className="hidden lg:block" aria-label="Ana menü">
            <ul className="flex items-center gap-0.5">
              {/* About */}
              <NavLink href={`${base}/about`} active={isActive(`${base}/about`)}>
                {t.nav.about}
              </NavLink>

              {/* Brands dropdown */}
              <NavDropdown
                label={t.nav.brands}
                href={`${base}/brands`}
                active={isActive(`${base}/brands`)}
                open={openGroup === "brands"}
                onEnter={() => setOpenGroup("brands")}
                onLeave={() => setOpenGroup(null)}
                width="w-[460px]"
              >
                <div className="grid gap-1">
                  {brands.map((b) => (
                    <Link
                      key={b.id}
                      href={`${base}/brands/${b.slug}`}
                      className="group flex items-start gap-3 rounded-2xl p-3 transition hover:bg-brand-50"
                    >
                      <span className={cn("grid h-10 w-10 shrink-0 place-items-center rounded-xl text-sm font-bold", accentText[b.accent])}>
                        {b.name.charAt(0)}
                      </span>
                      <span className="min-w-0">
                        <span className="flex items-center gap-1 font-display font-semibold text-ink">
                          {b.name}
                          <ArrowRight className="h-3.5 w-3.5 -translate-x-1 text-teal-500 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                        </span>
                        <span className="block text-sm text-brand-900/60">{pick(b.tagline, locale)}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </NavDropdown>

              {/* Products mega */}
              <NavDropdown
                label={t.nav.products}
                href={`${base}/products`}
                active={isActive(`${base}/products`)}
                open={openGroup === "products"}
                onEnter={() => setOpenGroup("products")}
                onLeave={() => setOpenGroup(null)}
                width="w-[620px]"
                align="center"
              >
                <div className="grid grid-cols-[1fr_1.2fr] gap-5">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-400">
                      {t.common.brands}
                    </p>
                    <div className="grid gap-1">
                      {brands.map((b) => (
                        <Link key={b.id} href={`${base}/brands/${b.slug}`} className="flex items-center gap-2.5 rounded-xl p-2 text-sm font-medium text-brand-800 transition hover:bg-brand-50">
                          <span className={cn("grid h-7 w-7 place-items-center rounded-lg text-xs font-bold", accentText[b.accent])}>
                            {b.name.charAt(0)}
                          </span>
                          {b.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-400">
                      {t.common.categories}
                    </p>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                      {categories.slice(0, 8).map((c) => (
                        <Link key={c.id} href={`${base}/products?cat=${c.id}`} className="rounded-lg px-2 py-1.5 text-sm text-brand-700 transition hover:bg-brand-50 hover:text-teal-700">
                          {pick(c.name, locale)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <Link href={`${base}/products`} className="mt-4 flex items-center justify-between rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-800">
                  {t.cta.allProducts}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </NavDropdown>

              {/* Solutions dropdown */}
              <NavDropdown
                label={t.nav.solutions}
                href={`${base}/solutions`}
                active={isActive(`${base}/solutions`)}
                open={openGroup === "solutions"}
                onEnter={() => setOpenGroup("solutions")}
                onLeave={() => setOpenGroup(null)}
                width="w-[520px]"
                align="center"
              >
                <div className="grid grid-cols-2 gap-1">
                  {sectors.map((s) => {
                    const href = s.featured ? `${base}/solutions/marine-defense` : `${base}/solutions?sector=${s.id}`;
                    return (
                      <Link key={s.id} href={href} className="group flex items-center gap-3 rounded-2xl p-2.5 transition hover:bg-brand-50">
                        <span className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-xl", s.featured ? "bg-gradient-to-br from-teal-500 to-brand-600 text-white" : "bg-brand-50 text-brand-600")}>
                          <Icon name={s.icon} className="h-5 w-5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink">{pick(s.name, locale)}</span>
                          {s.featured && <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-teal-600">★ Öne çıkan</span>}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </NavDropdown>

              {simpleLinks.slice(1).map((l) => (
                <NavLink key={l.href} href={l.href} active={isActive(l.href)} hideLg={l.hideLg}>
                  {l.label}
                </NavLink>
              ))}
            </ul>
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-2">
            <Link href={`${base}/contact?type=sample`} className="btn btn-outline btn-sm hidden xl:inline-flex">
              {t.cta.requestSample}
            </Link>
            <Link href={`${base}/contact?type=quote`} className="btn btn-accent btn-sm hidden sm:inline-flex">
              {t.cta.getQuote}
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-xl text-ink transition hover:bg-brand-50 lg:hidden"
              aria-label="Menü"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-ink/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-card">
            <div className="flex items-center justify-between border-b border-brand-100 px-5 py-4">
              <Logo locale={locale} />
              <button type="button" onClick={() => setMobileOpen(false)} className="grid h-10 w-10 place-items-center rounded-xl text-ink hover:bg-brand-50" aria-label="Kapat">
                <Close className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-3 py-4">
              <MobileLink href={`${base}/about`}>{t.nav.about}</MobileLink>

              <MobileGroup label={t.nav.brands} seeAllHref={`${base}/brands`} seeAll={t.cta.viewAll}>
                {brands.map((b) => (
                  <Link key={b.id} href={`${base}/brands/${b.slug}`} className="block rounded-xl px-3 py-2 text-sm text-brand-700 hover:bg-brand-50">
                    {b.name}
                  </Link>
                ))}
              </MobileGroup>

              <MobileGroup label={t.nav.products} seeAllHref={`${base}/products`} seeAll={t.cta.allProducts}>
                {categories.slice(0, 8).map((c) => (
                  <Link key={c.id} href={`${base}/products?cat=${c.id}`} className="block rounded-xl px-3 py-2 text-sm text-brand-700 hover:bg-brand-50">
                    {pick(c.name, locale)}
                  </Link>
                ))}
              </MobileGroup>

              <MobileGroup label={t.nav.solutions} seeAllHref={`${base}/solutions`} seeAll={t.cta.viewAll}>
                {sectors.map((s) => (
                  <Link
                    key={s.id}
                    href={s.featured ? `${base}/solutions/marine-defense` : `${base}/solutions?sector=${s.id}`}
                    className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-brand-700 hover:bg-brand-50"
                  >
                    <Icon name={s.icon} className="h-4 w-4 text-teal-600" />
                    {pick(s.name, locale)}
                  </Link>
                ))}
              </MobileGroup>

              <MobileLink href={`${base}/export`}>{t.nav.export}</MobileLink>
              <MobileLink href={`${base}/quality`}>{t.nav.quality}</MobileLink>
              <MobileLink href={`${base}/references`}>{t.nav.references}</MobileLink>
              <MobileLink href={`${base}/contact`}>{t.nav.contact}</MobileLink>
            </div>

            <div className="space-y-2 border-t border-brand-100 p-4">
              <Link href={`${base}/contact?type=quote`} className="btn btn-primary w-full">
                {t.cta.getQuote}
              </Link>
              <Link href={`${base}/contact?type=sample`} className="btn btn-outline w-full">
                {t.cta.requestSample}
              </Link>
              <div className="flex items-center justify-between pt-1">
                <a href={telHref(t.topbar.phone)} className="inline-flex items-center gap-1.5 text-sm text-brand-700">
                  <Phone className="h-4 w-4" /> {t.topbar.phone}
                </a>
                <LanguageSwitcher locale={locale} />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- helpers ---------- */

function NavLink({
  href,
  active,
  hideLg,
  children,
}: {
  href: string;
  active?: boolean;
  hideLg?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li className={hideLg ? "hidden xl:block" : undefined}>
      <Link
        href={href}
        className={cn(
          "rounded-full px-3 py-2 text-sm font-medium transition",
          active ? "text-teal-700" : "text-brand-800 hover:bg-brand-50 hover:text-teal-700",
        )}
      >
        {children}
      </Link>
    </li>
  );
}

function NavDropdown({
  label,
  href,
  active,
  open,
  onEnter,
  onLeave,
  width,
  align = "left",
  children,
}: {
  label: string;
  href: string;
  active?: boolean;
  open: boolean;
  onEnter: () => void;
  onLeave: () => void;
  width: string;
  align?: "left" | "center";
  children: React.ReactNode;
}) {
  return (
    <li className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <Link
        href={href}
        className={cn(
          "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition",
          active || open ? "text-teal-700" : "text-brand-800 hover:bg-brand-50 hover:text-teal-700",
        )}
      >
        {label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition", open && "rotate-180")} />
      </Link>
      {open && (
        <div
          className={cn(
            "absolute top-full pt-3",
            align === "center" ? "left-1/2 -translate-x-1/2" : "left-0",
          )}
        >
          <div className={cn("animate-fade-up rounded-3xl border border-brand-100 bg-white p-4 shadow-card", width)}>
            {children}
          </div>
        </div>
      )}
    </li>
  );
}

function MobileLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-brand-50">
      {children}
    </Link>
  );
}

function MobileGroup({
  label,
  seeAllHref,
  seeAll,
  children,
}: {
  label: string;
  seeAllHref: string;
  seeAll: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-xl">
      <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-brand-50">
        {label}
        <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
      </summary>
      <div className="space-y-0.5 pb-2 pl-2">
        {children}
        <Link href={seeAllHref} className="block rounded-xl px-3 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-50">
          {seeAll} →
        </Link>
      </div>
    </details>
  );
}
