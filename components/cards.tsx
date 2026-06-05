import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/lib/dictionary";
import type { Brand, Product, Sector, BadgeKey, IconKey } from "@/lib/data";
import { brandById } from "@/lib/data";
import { pick, cn } from "@/lib/utils";
import { Icon, ArrowRight, ArrowUpRight, Check } from "./icons";
import { Photo } from "./Photo";

/* ---------------- Brand card ---------------- */

const brandOverlay: Record<Brand["accent"], string> = {
  teal: "from-teal-950/95 via-teal-900/30",
  brand: "from-brand-950/95 via-brand-900/30",
  red: "from-wieberr-950/95 via-wieberr-900/30",
};

const brandLink: Record<Brand["accent"], string> = {
  teal: "text-teal-700",
  brand: "text-brand-700",
  red: "text-wieberr-700",
};

export function BrandCard({ brand, locale, t }: { brand: Brand; locale: Locale; t: Dict }) {
  return (
    <Link
      href={`/${locale}/brands/${brand.slug}`}
      className="group card card-hover flex flex-col overflow-hidden !p-0"
    >
      <div className="relative h-44 overflow-hidden">
        <Photo
          src={brand.image}
          alt={brand.name}
          fit="cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          className="h-full w-full"
          imgClassName="transition duration-500 group-hover:scale-105"
        />
        <div className={cn("absolute inset-0 bg-gradient-to-t to-transparent", brandOverlay[brand.accent])} />
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/20 text-lg font-extrabold text-white">
            {brand.name.charAt(0)}
          </span>
          <div className="min-w-0">
            <div className="font-display text-lg font-bold leading-tight text-white">{brand.name}</div>
            <div className="truncate text-sm text-white/85">{pick(brand.tagline, locale)}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-brand-900/65">{pick(brand.intro, locale)}</p>
        <p className="mt-4 text-xs font-medium uppercase tracking-wide text-brand-400">
          {pick(brand.audience, locale)}
        </p>
        <span className={cn("mt-4 inline-flex items-center gap-1.5 text-sm font-semibold", brandLink[brand.accent])}>
          {t.cta.discover}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

/* ---------------- Sector card ---------------- */

export function SectorCard({ sector, locale, t }: { sector: Sector; locale: Locale; t: Dict }) {
  const href = sector.featured
    ? `/${locale}/solutions/marine-defense`
    : `/${locale}/solutions#sector-${sector.id}`;
  return (
    <Link
      href={href}
      className={cn(
        "group card card-hover relative flex flex-col overflow-hidden !p-0",
        sector.featured && "ring-2 ring-teal-500/40",
      )}
    >
      <div className="relative h-36 overflow-hidden">
        <Photo
          src={sector.image}
          alt={pick(sector.name, locale)}
          fit="cover"
          sizes="(max-width: 768px) 50vw, 25vw"
          className="h-full w-full"
          imgClassName="transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
        {sector.featured && (
          <span className="absolute right-3 top-3 rounded-full bg-teal-500 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white shadow">
            ★ {locale === "tr" ? "Öne çıkan" : "Featured"}
          </span>
        )}
        <span className="absolute -bottom-5 left-4 grid h-11 w-11 place-items-center rounded-2xl bg-white text-teal-600 shadow-card ring-1 ring-brand-100">
          <Icon name={sector.icon} className="h-5 w-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 pt-7">
        <h3 className="font-display text-lg font-semibold text-ink">{pick(sector.name, locale)}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-brand-900/60">{pick(sector.short, locale)}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
          {t.cta.discover}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

/* ---------------- Product badges ---------------- */

const BADGES: Record<BadgeKey, { icon: IconKey; key: keyof Dict["common"] }> = {
  concentrated: { icon: "drop", key: "concentrated" },
  ecoFriendly: { icon: "leaf", key: "ecoFriendly" },
  certified: { icon: "shield", key: "certified" },
  antiallergic: { icon: "sparkles", key: "antiallergic" },
  economical: { icon: "recycle", key: "economical" },
};

export function ProductBadge({ badge, t }: { badge: BadgeKey; t: Dict }) {
  const b = BADGES[badge];
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-2 py-0.5 text-[0.7rem] font-medium text-teal-700">
      <Icon name={b.icon} className="h-3 w-3" />
      {t.common[b.key]}
    </span>
  );
}

/* ---------------- Product card ---------------- */

export function ProductCard({ product, locale, t }: { product: Product; locale: Locale; t: Dict }) {
  const brand = brandById(product.brandId);
  return (
    <Link
      href={`/${locale}/products/${product.id}`}
      className="group card card-hover flex flex-col !p-0"
    >
      <div className="relative h-44 overflow-hidden rounded-t-3xl">
        <Photo
          src={product.image}
          alt={pick(product.name, locale)}
          fit={product.imageFit ?? "cover"}
          sizes="(max-width: 768px) 50vw, 25vw"
          className={cn("h-full w-full", product.imageFit === "contain" ? "bg-white" : "bg-brand-50")}
          imgClassName={product.imageFit === "contain" ? "p-3" : "transition duration-500 group-hover:scale-105"}
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-brand-700 shadow-sm">
          {brand?.name}
        </span>
        <span className="absolute right-3 top-3 rounded-md bg-ink/85 px-1.5 py-0.5 font-mono text-[0.6rem] text-white">
          {product.code}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-semibold leading-snug text-ink">{pick(product.name, locale)}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-brand-900/60">{pick(product.benefit, locale)}</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {product.badges.slice(0, 3).map((b) => (
            <ProductBadge key={b} badge={b} t={t} />
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-brand-100 pt-3">
          {product.price ? (
            <span className="font-display text-base font-bold text-ink">
              {product.price.toLocaleString("tr-TR")} ₺
            </span>
          ) : (
            <span className="text-xs text-brand-500">{product.packaging.join(" · ")}</span>
          )}
          <ArrowUpRight className="h-4 w-4 text-teal-600 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}

/* ---------------- Feature item (why-us) ---------------- */

export function FeatureItem({
  icon,
  title,
  text,
}: {
  icon: IconKey;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-3xl border border-brand-100 bg-white p-6 transition hover:border-teal-200 hover:shadow-soft">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-50 text-teal-600 transition group-hover:bg-teal-500 group-hover:text-white">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-brand-900/60">{text}</p>
    </div>
  );
}

/* ---------------- Check list ---------------- */

export function CheckList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-3 text-brand-900/80">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-100 text-teal-700">
            <Check className="h-3 w-3" />
          </span>
          <span className="text-[0.95rem]">{it}</span>
        </li>
      ))}
    </ul>
  );
}
