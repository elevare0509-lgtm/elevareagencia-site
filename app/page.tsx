"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { MessageCircle, Settings, Bot } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Typewriter } from "@/components/ui/typewriter";

const WA = "https://wa.me/5511950274038";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const solucoes = [
  {
    emoji: "⚡",
    title: "Responde na hora",
    desc: "Seu cliente manda mensagem às 23h de sábado? Respondido em segundos.",
  },
  {
    emoji: "📅",
    title: "Agenda sozinho",
    desc: "O cliente escolhe o horário e confirma no WhatsApp. A agenda enche enquanto você trabalha.",
  },
  {
    emoji: "🔔",
    title: "Lembra o cliente",
    desc: "24h antes, lembrete automático. Menos faltas, menos buracos na agenda.",
  },
  {
    emoji: "🤝",
    title: "Te chama quando precisa",
    desc: "Caso especial, o agente te avisa. O resto ele resolve sozinho.",
  },
];

const passos = [
  {
    Icon: MessageCircle,
    title: "Entendemos seu negócio",
    desc: "Mapeamos seus serviços, preços, horários e as perguntas mais frequentes.",
  },
  {
    Icon: Settings,
    title: "Configuramos o agente",
    desc: "Criamos seu atendente virtual personalizado, com a cara do seu negócio.",
  },
  {
    Icon: Bot,
    title: "Ligamos no seu WhatsApp",
    desc: "Seu agente começa a responder e nós ajustamos até ficar perfeito.",
  },
];

const nichos = [
  "Clínicas de estética",
  "Consultórios odontológicos",
  "Dermatologistas",
  "Salões de beleza",
  "Barbearias",
  "Fisioterapeutas",
];

const depoimentos = [
  {
    // TROCAR por depoimento real
    text: "Antes eu dependia só de indicação. Agora chega cliente que me achou no Google.",
    name: "Nome",
    business: "Negócio — Cotia",
  },
  {
    // TROCAR por depoimento real
    text: "Ficou com cara de empresa séria. O cliente confia antes mesmo de falar comigo.",
    name: "Nome",
    business: "Negócio — Granja Viana",
  },
  {
    // TROCAR por depoimento real
    text: "Em menos de uma semana estava no ar. Resultado limpo e profissional do jeito que eu queria.",
    name: "Nome",
    business: "Negócio — Vargem Grande Paulista",
  },
];

export default function Home() {
  const titleComponent = (
    <div className="flex flex-col items-center gap-4 mb-28 md:-translate-y-[30px] bg-[#0B1628]/60 backdrop-blur-md rounded-3xl border border-white/5 px-8 md:px-14 py-10">
      <span className="text-gold/70 text-xs font-semibold tracking-[0.2em] uppercase">
        Automação inteligente para negócios locais
      </span>
      <h1 className="text-3xl md:text-5xl font-bold text-offwhite text-center leading-snug max-w-2xl">
        Nunca mais perca cliente por{" "}
        <Typewriter
          text={["demorar pra responder.", "não ter atendimento 24h.", "esquecer de confirmar."]}
          speed={65}
          initialDelay={400}
          loop={true}
          waitTime={2200}
          deleteSpeed={35}
          showCursor={true}
          cursorChar="|"
          className="text-[#C4A35A] font-bold"
          cursorClassName="text-[#C4A35A] ml-0.5"
        />
      </h1>
    </div>
  );

  return (
    <>
      {/* ── SEÇÃO 1 — HERO ── */}
      <div className="relative">
        <ContainerScroll titleComponent={titleComponent}>
          <div
            className="w-full h-full rounded-2xl flex flex-col justify-between px-8 md:px-16 pt-10 pb-10"
            style={{ background: "linear-gradient(160deg, #0d1f3c 0%, #0B1628 50%, #091422 100%)" }}
          >
            {/* Gancho */}
            <motion.div
              className="flex flex-col items-center gap-3 text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-gold/50 text-[10px] tracking-[0.25em] uppercase font-semibold">
                A realidade de todo negócio local
              </span>
              <p className="text-offwhite text-2xl md:text-3xl font-bold leading-snug max-w-lg">
                Enquanto você trabalha,{" "}
                <span className="text-gold">quantas mensagens ficam sem resposta?</span>
              </p>
            </motion.div>

            {/* Dores */}
            <motion.div
              className="flex flex-col gap-3 max-w-lg mx-auto w-full"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {[
                "Clientes mandando mensagem e você não consegue responder porque está em atendimento",
                "Quando responde, já passou horas e o cliente agendou com o concorrente",
                "Noite e fim de semana sem atendimento = clientes perdidos",
              ].map((dor, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-red-400 text-base shrink-0 mt-0.5">✕</span>
                  <p className="text-offwhite/60 text-sm leading-relaxed">{dor}</p>
                </div>
              ))}
            </motion.div>

            {/* Fechamento + CTA */}
            <motion.div
              className="flex flex-col items-center gap-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="text-gold font-semibold text-sm md:text-base">
                Cada mensagem sem resposta é dinheiro saindo do seu caixa.
              </p>
              <ShinyButton
                onClick={() => window.open(WA, "_blank")}
                style={{
                  "--shiny-cta-bg": "#C4A35A",
                  "--shiny-cta-bg-subtle": "#a88748",
                  "--shiny-cta-highlight": "#ffffff",
                  "--shiny-cta-highlight-subtle": "#f5e6c0",
                  "--shiny-cta-fg": "#0B1628",
                } as React.CSSProperties}
              >
                Quero ver funcionando
              </ShinyButton>
            </motion.div>
          </div>
        </ContainerScroll>
      </div>

      {/* ── SEÇÃO 2 — SOLUÇÕES ── */}
      <section id="solucoes" className="bg-offwhite py-24 px-6">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="text-gold text-xs font-bold tracking-widest uppercase">
              Soluções
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">
              O que o seu agente faz por você
            </h2>
            <p className="text-navy/60 mt-3 text-base max-w-xl mx-auto">
              A Elevare cria atendentes virtuais com inteligência artificial que respondem seus clientes no WhatsApp na hora, agendam horários automaticamente e só te chamam quando realmente precisam de você.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solucoes.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(11,22,40,0.12)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="border border-navy/10 rounded-2xl p-6 flex flex-col gap-3 bg-white shadow-sm"
              >
                <span className="text-2xl">{s.emoji}</span>
                <h3 className="text-navy font-bold text-lg">{s.title}</h3>
                <p className="text-navy/60 text-sm flex-1 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-10">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-navy font-bold px-7 py-3.5 rounded-full hover:brightness-110 transition-all text-sm"
            >
              Quero meu atendente virtual
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── SEÇÃO 3 — COMO FUNCIONA ── */}
      <section id="como-funciona" className="bg-navy/80 backdrop-blur-sm py-24 px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-gold text-xs font-bold tracking-widest uppercase">
              Processo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-offwhite mt-2">
              Como funciona
            </h2>
            <p className="text-offwhite/50 mt-3 text-base">
              Sem reunião demorada, sem burocracia.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-start gap-0 relative">
            <div className="hidden md:block absolute top-8 left-[16.666%] right-[16.666%] h-px bg-gold/30" />

            {passos.map((p, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.2 } },
                }}
                className="flex-1 flex flex-col items-center text-center px-6 relative"
              >
                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mb-5 z-10 shrink-0">
                  <p.Icon className="text-navy w-7 h-7" />
                </div>
                <h3 className="text-offwhite font-bold text-base mb-2 leading-snug">{p.title}</h3>
                <p className="text-offwhite/50 text-sm leading-relaxed">{p.desc}</p>
                {i < passos.length - 1 && (
                  <div className="md:hidden w-px h-10 bg-gold/30 my-6" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── SEÇÃO 4 — PRA QUEM É ── */}
      <section id="sobre" className="bg-offwhite py-24 px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.span variants={fadeInUp} className="text-gold text-xs font-bold tracking-widest uppercase">
            Pra quem é
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-navy mt-3 leading-tight">
            Feito pra quem depende de agendamento
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto"
          >
            {nichos.map((n) => (
              <div
                key={n}
                className="border border-navy/10 rounded-xl px-4 py-3 bg-white text-navy text-sm font-medium shadow-sm"
              >
                {n}
              </div>
            ))}
          </motion.div>
          <motion.p variants={fadeInUp} className="mt-8 text-navy/60 text-base leading-relaxed max-w-xl mx-auto">
            Se seu negócio depende de agendamento e atendimento por WhatsApp, a Elevare é pra você.
          </motion.p>
        </motion.div>
      </section>

      {/* ── SEÇÃO 5 — DEPOIMENTOS ── */}
      <section id="resultados" className="bg-navy py-24 px-6">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="text-gold text-xs font-bold tracking-widest uppercase">
              Resultados
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-offwhite mt-2">
              O que dizem sobre a Elevare
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {depoimentos.map((d, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="border border-white/8 rounded-2xl p-6 bg-white/5 backdrop-blur-sm flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center shrink-0">
                  <span className="text-gold font-bold text-sm">{d.name[0]}</span>
                </div>
                <p className="text-offwhite/70 text-sm leading-relaxed flex-1">
                  &ldquo;{d.text}&rdquo;
                </p>
                <div>
                  <p className="text-offwhite font-semibold text-sm">{d.name}</p>
                  <p className="text-offwhite/40 text-xs">{d.business}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── SEÇÃO 6 — CTA FINAL ── */}
      <section className="bg-gold/85 backdrop-blur-sm py-24 px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 leading-tight">
            Quer ver seu WhatsApp respondendo sozinho?
          </h2>
          <p className="text-navy/70 text-base mb-8">
            Fale com a gente e veja uma demonstração ao vivo em 5 minutos.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-navy text-offwhite font-bold text-lg px-10 py-4 rounded-full hover:brightness-125 transition-all"
          >
            Falar no WhatsApp
          </a>
        </motion.div>
      </section>
    </>
  );
}
