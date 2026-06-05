import type { MetadataRoute } from "next";

const SITE = "https://www.wunsc.com"; // TODO: gerçek alan adıyla değiştirin

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
