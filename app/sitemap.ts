import type { MetadataRoute } from "next";
import { nichos } from "@/lib/nichos";

const SITE_URL = "https://www.elevareagencia.com";

// Data da última mudança real de conteúdo de cada página. Atualizar só quando
// o texto da página mudar: lastmod igual em tudo (data do build) é ignorado pelo Google.
const ROUTES: { path: string; priority: number; lastModified: string }[] = [
  { path: "", priority: 1, lastModified: "2026-10-03" },
  { path: "/cotia", priority: 0.8, lastModified: "2026-10-03" },
  ...nichos.map((n) => ({
    path: `/${n.slug}`,
    priority: 0.8,
    lastModified: "2026-10-03",
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority, lastModified }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency: "monthly",
    priority,
  }));
}
