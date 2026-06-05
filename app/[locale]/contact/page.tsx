import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDict } from "@/lib/dictionary";
import { pick, telHref } from "@/lib/utils";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/ui";
import { FaqList } from "@/components/blocks";
import { LeadFormTabs, type LeadKind } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";
import { Phone, Mail, MapPin, Clock, WhatsApp, Icon } from "@/components/icons";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale);
  return { title: t.contact.hero.title, description: t.contact.hero.subtitle };
}

const VALID: LeadKind[] = ["sample", "quote", "contact", "distributor"];

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{ type?: string; product?: string }>;
}) {
  const { locale } = await params;
  const sp = await searchParams;
  const t = getDict(locale);
  const c = t.contact;

  const initial: LeadKind = VALID.includes(sp.type as LeadKind) ? (sp.type as LeadKind) : "sample";
  const waNumber = t.topbar.phone.replace(/[^\d]/g, "");

  const depts = [
    { label: c.salesDept, icon: "facility" as const },
    { label: c.exportDept, icon: "globe" as const },
  ];

  return (
    <>
      <PageHero badge={c.hero.badge} title={c.hero.title} subtitle={c.hero.subtitle} />

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          {/* Info */}
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">{c.infoTitle}</h2>
            <div className="mt-5 space-y-3">
              <InfoRow icon={<Phone className="h-5 w-5" />} href={telHref(t.topbar.phone)}>{t.topbar.phone}</InfoRow>
              <InfoRow icon={<Mail className="h-5 w-5" />} href={`mailto:${t.topbar.email}`}>{t.topbar.email}</InfoRow>
              <InfoRow icon={<WhatsApp className="h-5 w-5" />} href={`https://wa.me/${waNumber}`}>WhatsApp</InfoRow>
              <InfoRow icon={<MapPin className="h-5 w-5" />}>{t.footer.address}</InfoRow>
              <InfoRow icon={<Clock className="h-5 w-5" />}>{c.hours}</InfoRow>
            </div>

            {/* Departments */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {depts.map((d) => (
                <div key={d.label} className="rounded-2xl border border-brand-100 bg-brand-50/50 p-4">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-teal-600 shadow-sm">
                    <Icon name={d.icon} className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-ink">{d.label}</p>
                  <a href={`mailto:${t.topbar.email}`} className="text-xs text-brand-500 hover:text-teal-700">{t.topbar.email}</a>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-7 overflow-hidden rounded-3xl border border-brand-100">
              <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-brand-100 via-brand-50 to-teal-50">
                <div className="bg-grid-faint absolute inset-0 opacity-60 [background-size:22px_22px]" />
                <div className="relative text-center">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-white text-teal-600 shadow-card">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <p className="mt-2 text-sm font-semibold text-brand-800">Sakarya, Türkiye</p>
                </div>
              </div>
              <p className="bg-white px-4 py-3 text-xs text-brand-500">{c.mapNote}</p>
            </div>
          </div>

          {/* Forms */}
          <Reveal delay={100}>
            <div className="rounded-[12px] border border-brand-100 bg-white p-6 shadow-soft sm:p-8">
              <LeadFormTabs
                locale={locale}
                t={t}
                tabs={["sample", "quote", "contact"]}
                initial={initial}
                presetProduct={sp.product}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-brand-50/50">
        <div className="container">
          <SectionHeader eyebrow={t.faq.title} title={t.faq.title} text={t.faq.subtitle} center />
          <div className="mt-12">
            <FaqList locale={locale} />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon,
  href,
  children,
}: {
  icon: React.ReactNode;
  href?: string;
  children: React.ReactNode;
}) {
  const inner = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-600">{icon}</span>
      <span className="text-sm font-medium text-brand-800">{children}</span>
    </>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-3 transition hover:opacity-80">
      {inner}
    </a>
  ) : (
    <div className="flex items-center gap-3">{inner}</div>
  );
}
