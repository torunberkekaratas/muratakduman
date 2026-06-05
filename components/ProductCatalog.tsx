"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/lib/dictionary";
import { products, brands, categories, sectors } from "@/lib/data";
import { pick, cn } from "@/lib/utils";
import { ProductCard } from "./cards";
import { Search, Filter } from "./icons";

const ALL = "all";

export function ProductCatalog({
  locale,
  t,
  initial,
}: {
  locale: Locale;
  t: Dict;
  initial: { brand?: string; category?: string; sector?: string };
}) {
  const [brand, setBrand] = useState(initial.brand ?? ALL);
  const [category, setCategory] = useState(initial.category ?? ALL);
  const [sector, setSector] = useState(initial.sector ?? ALL);
  const [packaging, setPackaging] = useState(ALL);
  const [query, setQuery] = useState("");

  const packagingOptions = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.packaging.forEach((x) => set.add(x)));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase(locale);
    return products.filter((p) => {
      if (brand !== ALL && p.brandId !== brand) return false;
      if (category !== ALL && p.categoryId !== category) return false;
      if (sector !== ALL && !p.sectors.includes(sector)) return false;
      if (packaging !== ALL && !p.packaging.includes(packaging)) return false;
      if (q) {
        const hay = `${pick(p.name, locale)} ${pick(p.benefit, locale)} ${p.code}`.toLocaleLowerCase(locale);
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [brand, category, sector, packaging, query, locale]);

  const active = [brand, category, sector, packaging].some((v) => v !== ALL) || query.trim() !== "";

  function reset() {
    setBrand(ALL);
    setCategory(ALL);
    setSector(ALL);
    setPackaging(ALL);
    setQuery("");
  }

  return (
    <div>
      {/* Filter bar */}
      <div className="rounded-3xl border border-brand-100 bg-white p-4 shadow-soft sm:p-5">
        <div className="relative mb-4">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.products.searchPlaceholder}
            className="input !pl-11"
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Select label={t.common.brand} value={brand} onChange={setBrand} allLabel={t.common.allBrands}
            options={brands.map((b) => ({ value: b.id, label: b.name }))} />
          <Select label={t.common.category} value={category} onChange={setCategory} allLabel={t.common.allCategories}
            options={categories.map((c) => ({ value: c.id, label: pick(c.name, locale) }))} />
          <Select label={t.common.sector} value={sector} onChange={setSector} allLabel={t.common.allSectors}
            options={sectors.map((s) => ({ value: s.id, label: pick(s.name, locale) }))} />
          <Select label={t.common.packaging} value={packaging} onChange={setPackaging} allLabel="—"
            options={packagingOptions.map((p) => ({ value: p, label: p }))} />
        </div>
      </div>

      {/* Result meta */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-brand-500">
          <span className="font-semibold text-ink">{filtered.length}</span> {t.common.results}
        </p>
        {active && (
          <button onClick={reset} className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 hover:text-teal-800">
            <Filter className="h-4 w-4" />
            {t.common.clearFilters}
          </button>
        )}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} locale={locale} t={t} />
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-3xl border border-dashed border-brand-200 bg-brand-50/40 py-20 text-center">
          <p className="text-brand-500">{t.common.noResults}</p>
          <button onClick={reset} className="btn btn-outline btn-sm mt-4">{t.common.clearFilters}</button>
        </div>
      )}
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
  allLabel,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  allLabel: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-brand-500">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn("select !py-2.5 text-sm", value !== ALL && "border-teal-300 text-teal-800")}
      >
        <option value={ALL}>{allLabel === "—" ? label : allLabel}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </label>
  );
}
