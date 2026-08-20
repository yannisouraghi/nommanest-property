import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nommanest.com";
  return [
    { url: base, priority: 1 },
    { url: `${base}/conciergerie`, priority: 0.9 },
    { url: `${base}/investissement`, priority: 0.9 },
    { url: `${base}/a-propos`, priority: 0.6 },
    { url: `${base}/contact`, priority: 0.7 },
  ];
}
