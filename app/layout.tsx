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
  "Agência de automação com inteligência artificial para o mercado de eventos. Atendentes virtuais para WhatsApp que respondem, qualificam leads e agendam visitas 24h.";

export const metadata: Metadata = {
  // Necessário para o og:image gerado por app/opengraph-image.png virar URL absoluta.
  metadataBase: new URL(SITE_URL),
  title: "Elevare | Automação com IA para Eventos",
  description:
    "Atendente virtual com IA no WhatsApp para espaços de eventos, buffets e casas de festa. Responde clientes, envia valores e agenda visitas 24h por dia.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Elevare | Automação com IA para Eventos",
    description:
      "Atendente virtual com IA no WhatsApp para espaços de eventos, buffets e casas de festa. Responde clientes, envia valores e agenda visitas 24h por dia.",
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
  areaServed: "BR",
  sameAs: ["https://instagram.com/elevare_on"],
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
