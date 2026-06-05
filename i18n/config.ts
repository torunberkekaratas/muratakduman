export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "tr";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const localeNames: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
};

// İleride eklenecek diller (plan: FR + RU, gerekirse AR) — Faz 2
export const upcomingLocales = ["fr", "ru"] as const;
