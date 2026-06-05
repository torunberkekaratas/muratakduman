import type { Locale } from "@/i18n/config";

/** Basit className birleştirici (clsx'siz). */
export function cn(...args: Array<string | false | null | undefined>): string {
  return args.filter(Boolean).join(" ");
}

/** Çok dilli alandan aktif dile göre değer seç. */
export function pick<T>(field: { tr: T; en: T }, locale: Locale): T {
  return field[locale];
}

/** WhatsApp / tel için numarayı sadeleştir. */
export function telHref(phone: string): string {
  return "tel:" + phone.replace(/[^+\d]/g, "");
}
