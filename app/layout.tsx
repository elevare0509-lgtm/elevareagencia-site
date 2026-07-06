import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShaderBg from "@/components/ShaderBg";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Atendente Virtual com IA no WhatsApp para Clínicas e Negócios Locais | Elevare",
  description:
    "Seu WhatsApp respondendo clientes 24h com inteligência artificial. Agendamento automático, lembretes e atendimento na hora para clínicas, consultórios e negócios locais. Fale com a Elevare.",
  openGraph: {
    title: "Atendente Virtual com IA no WhatsApp para Clínicas e Negócios Locais | Elevare",
    description:
      "Seu WhatsApp respondendo clientes 24h com inteligência artificial. Agendamento automático, lembretes e atendimento na hora para clínicas, consultórios e negócios locais. Fale com a Elevare.",
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
