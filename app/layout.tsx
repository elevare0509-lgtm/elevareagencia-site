import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShaderBg from "@/components/ShaderBg";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  // Necessário para o og:image gerado por app/opengraph-image.png virar URL absoluta.
  metadataBase: new URL("https://www.elevareagencia.com"),
  title: "Atendente Virtual com IA no WhatsApp para Espaços de Eventos e Buffets | Elevare",
  description:
    "Seu WhatsApp respondendo clientes 24h com inteligência artificial. Orçamento na hora, agendamento de visitas e lembretes automáticos para espaços de eventos, buffets, casas de festa e cerimonialistas.",
  openGraph: {
    title: "Atendente Virtual com IA no WhatsApp para Eventos | Elevare",
    description:
      "Seu WhatsApp respondendo clientes 24h com inteligência artificial. Orçamento na hora, agendamento de visitas e lembretes automáticos para espaços de eventos, buffets, casas de festa e cerimonialistas.",
    type: "website",
    locale: "pt_BR",
    siteName: "Elevare",
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
        <ShaderBg />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
