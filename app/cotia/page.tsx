import type { Metadata } from "next";
import {
  MapPin,
  Zap,
  CalendarCheck,
  MessageSquareReply,
  Bell,
  Building2,
  UtensilsCrossed,
  PartyPopper,
  Cake,
} from "lucide-react";

const SITE_URL = "https://www.elevareagencia.com";
const WA = "https://wa.me/5511991572814";

export const metadata: Metadata = {
  title: "Automação de WhatsApp com IA em Cotia e Região | Elevare",
  description:
    "Atendimento automático no WhatsApp com inteligência artificial para espaços de eventos, buffets e fornecedores em Cotia, Granja Viana, Carapicuíba e região de São Paulo.",
  alternates: {
    canonical: `${SITE_URL}/cotia`,
  },
  openGraph: {
    title: "Automação de WhatsApp com IA em Cotia e Região | Elevare",
    description:
      "Atendimento automático no WhatsApp com inteligência artificial para espaços de eventos, buffets e fornecedores em Cotia, Granja Viana, Carapicuíba e região de São Paulo.",
    type: "website",
    locale: "pt_BR",
    siteName: "Elevare",
    url: `${SITE_URL}/cotia`,
    // A imagem de app/opengraph-image.png não é herdada por rotas filhas,
    // então apontamos para ela aqui para o link gerar preview no WhatsApp.
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/cotia#local`,
  name: "Elevare - Automação com IA para Eventos",
  description:
    "Qualificador de leads com IA no WhatsApp para fornecedores de eventos em Cotia e região.",
  url: `${SITE_URL}/cotia`,
  telephone: "+5511991572814",
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
  areaServed:
    "Cotia, Granja Viana, Carapicuíba, Itapevi, Vargem Grande Paulista, São Paulo",
  priceRange: "$$",
};

const cidades = [
  { nome: "Cotia", detalhe: "Centro, Jardim da Glória e todo o município" },
  { nome: "Granja Viana", detalhe: "Espaços, buffets e confeitarias da região" },
  { nome: "Carapicuíba", detalhe: "Casas de festa e fornecedores de evento" },
  { nome: "Itapevi", detalhe: "Chácaras e espaços para casamento" },
  { nome: "Vargem Grande Paulista", detalhe: "Sítios e espaços ao ar livre" },
  { nome: "São Paulo", detalhe: "Zona oeste e toda a região metropolitana" },
];

const recursos = [
  {
    Icon: Zap,
    title: "Responde na hora",
    desc: "Orçamento pedido às 23h de sábado é respondido em segundos, com pacote e valor.",
  },
  {
    Icon: CalendarCheck,
    title: "Agenda a visita",
    desc: "O cliente escolhe o horário e confirma pelo WhatsApp, sem você parar o que está fazendo.",
  },
  {
    Icon: MessageSquareReply,
    title: "Faz o follow-up",
    desc: "Quem pediu orçamento e sumiu recebe uma nova mensagem do agente, no tempo certo.",
  },
  {
    Icon: Bell,
    title: "Te chama quando precisa",
    desc: "Pedido fora do padrão ou evento grande cai direto no seu colo. O resto o agente resolve.",
  },
];

const negocios = [
  { Icon: Building2, name: "Espaços de eventos" },
  { Icon: UtensilsCrossed, name: "Buffets" },
  { Icon: PartyPopper, name: "Casas de festa" },
  { Icon: Cake, name: "Confeitarias" },
];

export default function Cotia() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="px-6 pt-12 pb-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 bg-[#0B1628]/60 backdrop-blur-md rounded-3xl border border-white/5 px-8 md:px-14 py-12">
          <span className="flex items-center gap-2 text-gold/70 text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-center text-balance">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            Cotia, Granja Viana e região oeste de SP
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-offwhite text-center leading-snug max-w-2xl">
            Automação de WhatsApp com IA em{" "}
            <span className="text-[#C4A35A] font-bold">Cotia e Região</span>
          </h1>
          <p className="text-offwhite/75 font-medium text-base md:text-lg text-center max-w-[660px] leading-relaxed">
            Se você tem um espaço de eventos, buffet, casa de festa ou confeitaria em Cotia,
            Granja Viana ou região, sabe como é: o WhatsApp não para, os orçamentos chegam a
            qualquer hora e quando você está tocando um evento, ninguém responde. A Elevare
            resolve isso com um qualificador de leads que funciona 24 horas, responde seus
            clientes na hora e agenda visitas sem você precisar parar o que está fazendo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy font-bold px-7 py-3.5 rounded-full hover:brightness-110 text-sm text-center"
            >
              Falar no WhatsApp
            </a>
            <a
              href="/#como-funciona"
              className="border border-gold text-offwhite font-semibold px-7 py-3.5 rounded-full hover:bg-gold/10 text-sm text-center"
            >
              Como funciona
            </a>
          </div>

          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-3 mt-6 pt-6 border-t border-white/10 w-full max-w-xl">
            {negocios.map(({ Icon, name }) => (
              <li key={name} className="flex items-center gap-2 text-offwhite/60 text-sm">
                <Icon className="w-4 h-4 text-gold shrink-0" />
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Regioes atendidas */}
      <section className="bg-offwhite py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-bold tracking-widest uppercase">
              Onde atendemos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">
              Fornecedores de eventos na região oeste de São Paulo
            </h2>
            <p className="text-navy/60 mt-4 text-base max-w-2xl mx-auto leading-relaxed">
              Atendemos fornecedores de eventos em Cotia, Granja Viana, Carapicuíba, Itapevi,
              Vargem Grande Paulista e toda a região oeste de São Paulo. Nosso agente com
              inteligência artificial entende as perguntas dos seus clientes, envia pacotes e
              valores, faz follow-up com quem pediu orçamento e sumiu, e te avisa só quando
              precisa da sua atenção.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cidades.map(({ nome, detalhe }) => (
              <div
                key={nome}
                className="border border-navy/10 rounded-2xl px-6 py-5 bg-white shadow-sm flex flex-col gap-2"
              >
                <MapPin className="w-5 h-5 text-gold" />
                <h3 className="text-navy font-bold text-base">{nome}</h3>
                <p className="text-navy/55 text-sm leading-relaxed">{detalhe}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que o agente faz */}
      <section className="bg-navy/80 backdrop-blur-sm py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-bold tracking-widest uppercase">
              O agente na prática
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-offwhite mt-2">
              Seu WhatsApp trabalhando enquanto você toca o evento
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {recursos.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="border border-gold/20 rounded-2xl p-6 flex flex-col gap-3 bg-navy"
              >
                <Icon className="w-8 h-8 text-[#C4A35A]" />
                <h3 className="text-offwhite font-bold text-lg">{title}</h3>
                <p className="text-offwhite/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mercado */}
      <section className="bg-offwhite py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-gold text-xs font-bold tracking-widest uppercase">
              O mercado de eventos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 leading-tight">
              Um setor grande, feito de negócios pequenos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            <div className="bg-navy rounded-2xl px-7 py-8 flex flex-col gap-2 text-center">
              <span className="text-gold text-3xl md:text-4xl font-bold">R$ 800 bi</span>
              <span className="text-offwhite/60 text-sm leading-relaxed">
                faturados pelo mercado de eventos no Brasil em 2024
              </span>
            </div>
            <div className="bg-navy rounded-2xl px-7 py-8 flex flex-col gap-2 text-center">
              <span className="text-gold text-3xl md:text-4xl font-bold">96%</span>
              <span className="text-offwhite/60 text-sm leading-relaxed">
                das empresas do setor são micro ou pequenas empresas
              </span>
            </div>
          </div>

          <p className="text-navy/60 text-base leading-relaxed text-center max-w-2xl mx-auto">
            O mercado de eventos no Brasil faturou mais de R$800 bilhões em 2024 e segue
            crescendo. 96% das empresas do setor são micro ou pequenas empresas, exatamente o
            perfil que mais sofre com WhatsApp desorganizado e perda de leads. A Elevare foi
            criada pra resolver esse problema com tecnologia acessível.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-gold/85 backdrop-blur-sm py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 leading-tight">
            Atende eventos em Cotia e região?
          </h2>
          <p className="text-navy/70 text-base mb-8">
            Te mostramos como o agente ficaria no seu WhatsApp, com os seus pacotes e valores.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-navy text-offwhite font-bold text-lg px-10 py-4 rounded-full hover:brightness-125"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
