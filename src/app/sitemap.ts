import type { MetadataRoute } from "next";
import { products, projects, services, site } from "@/lib/site";
import { areas } from "@/lib/areas";

/**
 * Bump when page content changes materially so crawlers see a real lastmod
 * instead of the build timestamp.
 */
const CONTENT_UPDATED = new Date("2026-09-17");

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
  ) => ({
    url: `${site.url}${path}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency,
    priority,
  });

  return [
    entry("", 1, "weekly"),
    entry("/services", 0.9),
    entry("/areas", 0.9),
    entry("/projects", 0.8),
    entry("/about", 0.7),
    entry("/contact", 0.7),
    entry("/health-safety", 0.5),
    entry("/products", 0.5),
    ...services.map((s) => entry(`/services/${s.slug}`, 0.8)),
    ...areas.map((a) => entry(`/areas/${a.slug}`, a.kind === "region" ? 0.8 : 0.7)),
    ...projects.map((p) => entry(`/projects/${p.slug}`, 0.6)),
    ...products.map((p) => entry(`/products/${p.slug}`, 0.4)),
  ];
}
