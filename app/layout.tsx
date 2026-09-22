import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShaderBg from "@/components/ShaderBg";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const SITE_URL = "https://www.elevareagencia.com";

const DESCRIPTION =
  "Qualificador de leads com IA no WhatsApp para o mercado de eventos. Responde clientes, envia valores e agenda visitas 24h por dia para espaços de eventos, buffets, casas de festa e confeitarias.";

export const metadata: Metadata = {
  // Necessário para o og:image gerado por app/opengraph-image.png virar URL absoluta.
  metadataBase: new URL(SITE_URL),
  title: "Elevare | Automação com IA para Eventos",
  description:
    "Qualificador de leads com IA no WhatsApp para espaços de eventos, buffets e casas de festa. Responde clientes, envia valores e agenda visitas 24h por dia.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Elevare | Automação com IA para Eventos",
    description:
      "Qualificador de leads com IA no WhatsApp para espaços de eventos, buffets e casas de festa. Responde clientes, envia valores e agenda visitas 24h por dia.",
    type: "website",
    locale: "pt_BR",
    siteName: "Elevare",
    url: SITE_URL,
  },
  verification: {
    google: "mmo8CAE6MrUAheA3gzM68ID8AOCYgGV3Hk_gkyl_X0I",
  },
};

// ProfessionalService é subtipo de LocalBusiness; declarar os dois no mesmo nó
// descreve a agência sem duplicar a entidade em blocos concorrentes.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  "@id": `${SITE_URL}/#elevare`,
  name: "Elevare",
  description: DESCRIPTION,
  url: SITE_URL,
  telephone: "+5511991572814",
  email: "elevare0509@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cotia",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.6044,
    longitude: -46.9186,
  },
  areaServed: [
    { "@type": "City", name: "Cotia" },
    { "@type": "City", name: "São Paulo" },
    { "@type": "City", name: "Carapicuíba" },
    { "@type": "City", name: "Itapevi" },
    { "@type": "City", name: "Vargem Grande Paulista" },
  ],
  serviceType: [
    "Automação de WhatsApp com IA",
    "Qualificação de leads para eventos",
    "Agendamento automático de visitas",
    "Follow-up automático de clientes",
  ],
  sameAs: ["https://www.instagram.com/elevare_on"],
  image: `${SITE_URL}/logo-elevare.png`,
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ShaderBg />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
