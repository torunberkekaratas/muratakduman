import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/lib/dictionary";
import { brands, sectors, certs } from "@/lib/data";
import { pick, telHref } from "@/lib/utils";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { NewsletterForm } from "./NewsletterForm";
import { Phone, Mail, MapPin, Clock } from "./icons";

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">{title}</h3>
      <ul className="space-y-2.5 text-sm text-white/70">{children}</ul>
    </div>
  );
}

function FLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="transition hover:text-white">
        {children}
      </Link>
    </li>
  );
}

const social = [
  { label: "LinkedIn", href: "#", path: "M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.25 8.25h4.5V24h-4.5zM8 8.25h4.31v2.15h.06c.6-1.1 2.06-2.26 4.24-2.26 4.54 0 5.38 2.95 5.38 6.78V24h-4.5v-6.98c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.67 1.81-2.67 3.68V24H8z" },
  { label: "Instagram", href: "#", path: "M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 3.5A6.3 6.3 0 1 0 18.3 12 6.3 6.3 0 0 0 12 5.7zm0 10.4A4.1 4.1 0 1 1 16.1 12 4.1 4.1 0 0 1 12 16.1zm6.55-10.6a1.47 1.47 0 1 1-1.47-1.47 1.47 1.47 0 0 1 1.47 1.47z" },
  { label: "YouTube", href: "#", path: "M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 3.9 12 3.9 12 3.9s-7.5 0-9.4.5A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.5zM9.6 15.6V8.4l6.2 3.6z" },
];

export function Footer({ locale, t }: { locale: Locale; t: Dict }) {
  const base = `/${locale}`;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      {/* Top CTA strip */}
      <div className="border-b border-white/10">
        <div className="container flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-xl font-semibold">{t.home.exportCta.title}</p>
            <p className="mt-1 text-sm text-white/60">{t.footer.newsletterText}</p>
          </div>
          <div className="flex gap-3">
            <Link href={`${base}/contact?type=quote`} className="btn btn-primary">
              {t.cta.getQuote}
            </Link>
            <Link href={`${base}/export`} className="btn btn-light">
              {t.cta.becomeDistributor}
            </Link>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container grid grid-cols-2 gap-x-8 gap-y-10 py-14 md:grid-cols-3 lg:grid-cols-12">
        <div className="col-span-2 md:col-span-3 lg:col-span-4">
          <Logo locale={locale} tone="light" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">{t.footer.blurb}</p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {certs.map((c) => (
              <span key={c.code} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[0.65rem] font-semibold text-white/60">
                {c.code}
              </span>
            ))}
          </div>
          <div className="mt-5 flex gap-2">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-white/70 transition hover:bg-teal-500 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <FooterCol title={t.footer.company}>
            <FLink href={`${base}/about`}>{t.nav.about}</FLink>
            <FLink href={`${base}/quality`}>{t.quality.hero.badge}</FLink>
            <FLink href={`${base}/references`}>{t.nav.references}</FLink>
            <FLink href={`${base}/export`}>{t.exportPage.hero.badge}</FLink>
            <FLink href={`${base}/contact`}>{t.nav.contact}</FLink>
          </FooterCol>
        </div>

        <div className="lg:col-span-2">
          <FooterCol title={t.footer.productsCol}>
            {brands.map((b) => (
              <FLink key={b.id} href={`${base}/brands/${b.slug}`}>
                {b.name}
              </FLink>
            ))}
            <FLink href={`${base}/products`}>{t.cta.allProducts}</FLink>
          </FooterCol>
        </div>

        <div className="lg:col-span-2">
          <FooterCol title={t.common.sectors}>
            {sectors.slice(0, 6).map((s) => (
              <FLink
                key={s.id}
                href={s.featured ? `${base}/solutions/marine-defense` : `${base}/solutions?sector=${s.id}`}
              >
                {pick(s.name, locale)}
              </FLink>
            ))}
          </FooterCol>
        </div>

        <div className="col-span-2 md:col-span-3 lg:col-span-2">
          <FooterCol title={t.footer.contactCol}>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
              <a href={telHref(t.topbar.phone)} className="hover:text-white">{t.topbar.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
              <a href={`mailto:${t.topbar.email}`} className="hover:text-white">{t.topbar.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
              <span>{t.footer.address}</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
              <span>{t.contact.hours}</span>
            </li>
          </FooterCol>
          <div className="mt-5">
            <p className="mb-2 text-sm font-semibold text-white/80">{t.footer.newsletterTitle}</p>
            <NewsletterForm t={t} />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-sm text-white/50 sm:flex-row">
          <p>
            © {year} {t.meta.company}. {t.footer.rights}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href={`${base}/legal/privacy`} className="hover:text-white">{t.footer.privacy}</Link>
            <Link href={`${base}/legal/cookies`} className="hover:text-white">{t.footer.cookies}</Link>
            <Link href={`${base}/legal/terms`} className="hover:text-white">{t.footer.terms}</Link>
            <LanguageSwitcher locale={locale} tone="light" />
          </div>
        </div>
      </div>
    </footer>
  );
}
