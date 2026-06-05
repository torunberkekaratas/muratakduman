import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { brands, products } from "@/lib/data";

const SITE = "https://www.wunsc.com"; // TODO: gerçek alan adıyla değiştirin

const staticPaths = [
  "",
  "/about",
  "/brands",
  "/products",
  "/solutions",
  "/solutions/marine-defense",
  "/export",
  "/quality",
  "/references",
  "/contact",
  "/legal/privacy",
  "/legal/cookies",
  "/legal/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const p of staticPaths) {
      entries.push({
        url: `${SITE}/${locale}${p}`,
        lastModified: now,
        changeFrequency: p === "" ? "weekly" : "monthly",
        priority: p === "" ? 1 : 0.7,
      });
    }
    for (const b of brands) {
      entries.push({ url: `${SITE}/${locale}/brands/${b.slug}`, lastModified: now, priority: 0.7 });
    }
    for (const pr of products) {
      entries.push({ url: `${SITE}/${locale}/products/${pr.id}`, lastModified: now, priority: 0.6 });
    }
  }

  return entries;
}
