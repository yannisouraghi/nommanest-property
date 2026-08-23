import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const LAST_MODIFIED = new Date("2026-08-23");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/conciergerie", priority: 0.9, changeFrequency: "monthly" },
    { path: "/investissement", priority: 0.9, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
    { path: "/a-propos", priority: 0.6, changeFrequency: "yearly" },
  ];
  return pages.map((p) => ({
    url: p.path === "/" ? SITE_URL : `${SITE_URL}${p.path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
