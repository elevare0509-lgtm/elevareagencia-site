import type { MetadataRoute } from "next";
import { nichos } from "@/lib/nichos";

const SITE_URL = "https://www.elevareagencia.com";

const ROUTES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/cotia", priority: 0.8 },
  ...nichos.map((n) => ({ path: `/${n.slug}`, priority: 0.8 })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
