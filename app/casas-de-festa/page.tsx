import type { Metadata } from "next";
import NichoPage from "@/components/NichoPage";
import { getNicho } from "@/lib/nichos";

const SITE_URL = "https://www.elevareagencia.com";
const nicho = getNicho("casas-de-festa");

export const metadata: Metadata = {
  title: nicho.metaTitle,
  description: nicho.metaDescription,
  alternates: { canonical: `${SITE_URL}/${nicho.slug}` },
  openGraph: {
    title: nicho.metaTitle,
    description: nicho.metaDescription,
    type: "website",
    locale: "pt_BR",
    siteName: "Elevare",
    url: `${SITE_URL}/${nicho.slug}`,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <NichoPage nicho={nicho} />;
}
