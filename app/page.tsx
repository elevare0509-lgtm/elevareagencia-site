import Link from "next/link";
import { MessageCircle, MessageSquareReply, Check, Zap, CalendarCheck, Bell } from "lucide-react";
import ComoFunciona from "@/components/ComoFunciona";
import { nichos } from "@/lib/nichos";

const WA = "https://wa.me/5511991572814";

const solucoes = [
  {
    Icon: Zap,
    title: "Responde na hora",
    desc: "Seu cliente pede orçamento às 23h de sábado? Respondido em segundos.",
  },
  {
    Icon: CalendarCheck,
    title: "Agenda a visita",
    desc: "O cliente escolhe o horário e confirma no WhatsApp. Sua agenda de visitas enche enquanto você toca os eventos.",
  },
  {
    Icon: Bell,
    title: "Lembra o cliente",
    desc: "24h antes da visita, lembrete automático. Menos faltas, menos horário perdido.",
  },
  {
    Icon: MessageSquareReply,
    title: "Faz o follow-up",
    desc: "Cliente pediu orçamento e sumiu? O agente volta a falar com ele sozinho, no tempo certo.",
  },
  {
    Icon: MessageCircle,
    title: "Te chama quando precisa",
    desc: "Evento grande ou pedido fora do padrão, o agente te avisa. O resto ele resolve sozinho.",
  },
];

const IA_WHATSAPP =
  "IA no WhatsApp 24h respondendo dúvidas sobre pacotes, preços e disponibilidade";

const planos = [
  {
    nome: "Essencial",
    destaque: false,
    mensal: "R$ 397",
    inclui: [IA_WHATSAPP],
  },
  {
    nome: "Profissional",
    destaque: true,
    mensal: "R$ 497",
    inclui: [
      IA_WHATSAPP,
      "Qualificação de lead",
      "Follow-up automático",
      "Agendamento no Google Calendar",
      "Dashboard em tempo real",
      "Tom de voz personalizado",
    ],
  },
  {
    nome: "Premium",
    destaque: false,
    mensal: "R$ 697",
    inclui: [
      "Qualificação de lead",
      "Follow-up automático",
      "Agendamento no Google Calendar",
      "Dashboard em tempo real",
      "Tom de voz personalizado",
      "Reunião mensal de performance",
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* ── SEÇÃO 1 — HERO ── */}
      <section className="px-6 pt-12 pb-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 bg-[#0B1628]/60 backdrop-blur-md rounded-3xl border border-white/5 px-8 md:px-14 py-12">
          <span className="text-gold/70 text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-center text-balance -mr-[0.15em] sm:-mr-[0.2em]">
            Automação inteligente para o mercado de eventos
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-offwhite text-center leading-snug max-w-2xl">
            Nunca mais perca cliente por{" "}
            <span className="text-[#C4A35A] font-bold">demorar pra responder.</span>
          </h1>
          <p className="text-offwhite/75 font-medium text-base md:text-lg text-center max-w-[640px] leading-relaxed">
            Qualificador de leads com IA que responde, envia orçamento e agenda visitas dos seus
            clientes no WhatsApp, 24 horas por dia, todos os dias.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy font-bold px-7 py-3.5 rounded-full hover:brightness-110 text-sm text-center"
            >
              Quero ver funcionando
            </a>
            <a
              href="#como-funciona"
              className="border border-gold text-offwhite font-semibold px-7 py-3.5 rounded-full hover:bg-gold/10 text-sm text-center"
            >
              Como funciona
            </a>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 1B — A DOR ── */}
      <section className="px-6 pb-20">
          <div
            className="max-w-3xl mx-auto rounded-3xl border border-white/5 px-8 md:px-14 py-12 flex flex-col gap-10"
            style={{ background: "linear-gradient(160deg, #0d1f3c 0%, #0B1628 50%, #091422 100%)" }}
          >
            {/* Gancho */}
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="text-gold/50 text-[10px] tracking-[0.25em] uppercase font-semibold">
                A realidade de todo negócio de eventos
              </span>
              <p className="text-offwhite text-2xl md:text-3xl font-bold leading-snug max-w-lg">
                Enquanto você toca um evento,{" "}
                <span className="text-gold">quantos orçamentos ficam sem resposta?</span>
              </p>
            </div>

            {/* Dores */}
            <div className="flex flex-col gap-3 max-w-lg mx-auto w-full">
              {[
                "Clientes pedindo orçamento e você não consegue responder porque está tocando um evento",
                "Quando responde, já passou horas e o cliente fechou a data com seu concorrente",
                "Noite e fim de semana sem atendimento = justo quando o cliente está pesquisando",
              ].map((dor, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-red-400 text-base shrink-0 mt-0.5">✕</span>
                  <p className="text-offwhite/60 text-sm leading-relaxed">{dor}</p>
                </div>
              ))}
            </div>

            {/* Fechamento */}
            <div className="flex flex-col items-center gap-4 text-center">
              <p className="text-gold font-semibold text-sm md:text-base">
                Cada orçamento sem resposta é uma data que fecha com o concorrente.
              </p>
            </div>
          </div>
      </section>

      {/* ── SEÇÃO 2 — SOLUÇÕES ── */}
      <section id="solucoes" className="bg-offwhite py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-bold tracking-widest uppercase">
              Soluções
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">
              O que o seu agente faz por você
            </h2>
            <p className="text-navy/60 mt-3 text-base max-w-xl mx-auto">
              A Elevare cria qualificadores de leads com inteligência artificial que respondem seus clientes no WhatsApp na hora, enviam pacotes e valores, agendam visitas ao seu espaço e só te chamam quando realmente precisam de você.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solucoes.map((s, i) => (
              <div
                key={i}
                className="border border-navy/10 rounded-2xl p-6 flex flex-col gap-3 bg-white shadow-sm"
              >
                <s.Icon className="w-8 h-8 text-[#C4A35A]" />
                <h3 className="text-navy font-bold text-lg">{s.title}</h3>
                <p className="text-navy/60 text-sm flex-1 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 3 — COMO FUNCIONA ── */}
      <ComoFunciona id="como-funciona" />

      {/* ── SEÇÃO 4 — PRA QUEM É ── */}
      <section id="sobre" className="bg-offwhite py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-bold tracking-widest uppercase">
              Pra quem é
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 leading-tight">
              Feito pra quem vive de fechar data
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {nichos.map(({ Icon, slug, cardName, cardDor }) => (
              <Link
                key={slug}
                href={`/${slug}`}
                className="border border-navy/10 rounded-2xl px-6 py-5 bg-white shadow-sm flex flex-col gap-3 transition-all duration-300 hover:shadow-md hover:border-gold/50"
              >
                <Icon className="w-6 h-6 text-gold" />
                <h3 className="text-navy font-bold text-base leading-snug">{cardName}</h3>
                <p className="text-navy/55 text-sm leading-relaxed">{cardDor}</p>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-navy/60 text-base leading-relaxed max-w-xl mx-auto text-center">
            Se o seu negócio vive de fechar data e depende do WhatsApp pra isso, a Elevare é pra você.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 5 — DEPOIMENTOS ── */}
      <section id="resultados" className="bg-navy py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-bold tracking-widest uppercase">
              Resultados
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-offwhite mt-2">
              O que dizem sobre a Elevare
            </h2>
          </div>

          <p className="text-center text-offwhite/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Em breve, resultados reais de clientes do mercado de eventos.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 6 — INVESTIMENTO ── */}
      <section id="investimento" className="bg-offwhite py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-bold tracking-widest uppercase">
              Investimento
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 max-w-3xl mx-auto leading-tight">
              Atendimento 24h no WhatsApp por uma fração do custo de um funcionário
            </h2>
            <p className="text-navy/60 mt-4 text-base max-w-xl mx-auto leading-relaxed">
              Três planos. Escolha o que acompanha o tamanho da sua operação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {planos.map((p) => (
              <div
                key={p.nome}
                className={`relative bg-navy rounded-3xl flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  p.destaque
                    ? "px-7 py-9 gap-7 md:-mt-4 border-2 border-gold shadow-xl shadow-navy/25 hover:shadow-2xl hover:shadow-navy/40"
                    : "px-6 py-8 gap-6 md:my-3 border border-gold/25 hover:border-gold/60 hover:shadow-xl hover:shadow-navy/25"
                }`}
              >
                {p.destaque && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
                    Mais popular
                  </span>
                )}

                {/* Nome e mensalidade */}
                <div className="flex flex-col gap-4">
                  <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">
                    {p.nome}
                  </span>

                  <p className={`text-gold font-bold ${p.destaque ? "text-4xl" : "text-3xl"}`}>
                    {p.mensal}
                    <span className="text-base font-medium">/mês</span>
                  </p>
                </div>

                {/* Incluso */}
                <div className="flex flex-col gap-3 flex-1">
                  <div className="border-t border-white/8" />
                  <p className="text-gold/90 text-[13px] font-semibold">Inclui:</p>
                  <ul className="flex flex-col gap-3">
                    {p.inclui.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span className="text-offwhite/80 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href={`${WA}?text=${encodeURIComponent(
                    `Olá! Tenho interesse no plano ${p.nome} da Elevare.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    p.destaque
                      ? "block text-center bg-gold text-navy font-bold px-7 py-3.5 rounded-full hover:brightness-110 text-sm"
                      : "block text-center border border-gold text-offwhite font-semibold px-7 py-3.5 rounded-full hover:bg-gold/10 text-sm"
                  }
                >
                  Quero começar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 7 — CTA FINAL ── */}
      <section className="bg-gold/85 backdrop-blur-sm py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 leading-tight">
            Quer ver seu WhatsApp respondendo sozinho?
          </h2>
          <p className="text-navy/70 text-base mb-8">
            Te mostramos como ficaria no seu WhatsApp.
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
