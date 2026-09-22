import Link from "next/link";
import { Check, X } from "lucide-react";
import ComoFunciona from "@/components/ComoFunciona";
import type { Nicho } from "@/lib/nichos";

const SITE_URL = "https://www.elevareagencia.com";
const WA = "https://wa.me/5511991572814";

/**
 * Template único das 6 páginas de subnicho. Todo o conteúdo vem de lib/nichos.ts,
 * então as páginas nunca saem de sincronia com os cards da home.
 */
export default function NichoPage({ nicho }: { nicho: Nicho }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: nicho.serviceName,
    description: nicho.metaDescription,
    provider: {
      "@type": "ProfessionalService",
      name: "Elevare",
      url: SITE_URL,
    },
    areaServed: "São Paulo, Brasil",
    url: `${SITE_URL}/${nicho.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Seção 1: Hero */}
      <section className="px-6 pt-12 pb-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 bg-[#0B1628]/60 backdrop-blur-md rounded-3xl border border-white/5 px-8 md:px-14 py-12">
          <span className="text-gold/70 text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-center text-balance -mr-[0.15em] sm:-mr-[0.2em]">
            {nicho.tag}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-offwhite text-center leading-snug max-w-2xl">
            {nicho.h1}
          </h1>
          <p className="text-offwhite/75 font-medium text-base md:text-lg text-center max-w-[640px] leading-relaxed">
            {nicho.subtitulo}
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
            <Link
              href="/#investimento"
              className="border border-gold text-offwhite font-semibold px-7 py-3.5 rounded-full hover:bg-gold/10 text-sm text-center"
            >
              Ver planos
            </Link>
          </div>
        </div>
      </section>

      {/* Seção 2: A realidade do nicho */}
      <section className="px-6 pb-20">
        <div
          className="max-w-4xl mx-auto rounded-3xl border border-white/5 px-8 md:px-14 py-12 flex flex-col gap-10"
          style={{
            background:
              "linear-gradient(160deg, #0d1f3c 0%, #0B1628 50%, #091422 100%)",
          }}
        >
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-gold/50 text-[10px] tracking-[0.25em] uppercase font-semibold">
              O dia a dia hoje
            </span>
            <h2 className="text-offwhite text-2xl md:text-3xl font-bold leading-snug max-w-xl">
              {nicho.realidade}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {nicho.dores.map((dor) => (
              <div
                key={dor}
                className="border border-white/5 rounded-2xl px-6 py-6 bg-white/[0.03] flex flex-col gap-3"
              >
                <span className="w-8 h-8 rounded-full bg-red-400/10 flex items-center justify-center shrink-0">
                  <X className="w-4 h-4 text-red-400" />
                </span>
                <p className="text-offwhite/60 text-sm leading-relaxed">{dor}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-gold font-semibold text-sm md:text-base">
              {nicho.fechamento}
            </p>
          </div>
        </div>
      </section>

      {/* Seção 3: O que o agente faz */}
      <section className="bg-offwhite py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-bold tracking-widest uppercase">
              Soluções
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">
              O que o agente faz por você
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {nicho.beneficios.map(({ titulo, desc }) => (
              <div
                key={titulo}
                className="border border-navy/10 rounded-2xl px-6 py-5 bg-white shadow-sm flex items-start gap-4"
              >
                <span className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-gold" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-navy font-bold text-base leading-snug">{titulo}</h3>
                  <p className="text-navy/55 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 4: Como funciona */}
      <ComoFunciona />

      {/* Seção 5: CTA final */}
      <section className="bg-gold/85 backdrop-blur-sm py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 leading-tight">
            Quer ver seu WhatsApp respondendo sozinho?
          </h2>
          <p className="text-navy/70 text-base mb-8">
            Te mostramos como ficaria no seu negócio.
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
