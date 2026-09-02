import type { MetadataRoute } from "next";

const SITE_URL = "https://www.elevareagencia.com";

const ROUTES = ["", "/sites", "/landing-pages", "/menu-digital", "/design-instagram"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
