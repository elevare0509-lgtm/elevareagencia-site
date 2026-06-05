"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { MessageCircle, Palette, Rocket } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ShinyButton } from "@/components/ui/shiny-button";
import PortfolioSection from "@/components/PortfolioSection";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const servicos = [
  {
    title: "Menu Digital",
    desc: "Seu cardápio no celular do cliente. Sem app, sem confusão, sem perder pedido.",
    href: "https://wa.me/5511950274038",
  },
  {
    title: "Landing Page",
    desc: "Uma página que trabalha 24h trazendo cliente enquanto você trabalha.",
    href: "https://wa.me/5511950274038",
  },
  {
    title: "Design Instagram",
    desc: "Perfil que faz o cliente confiar antes de mandar mensagem.",
    href: "https://wa.me/5511950274038",
  },
  {
    title: "Site Institucional",
    desc: "Seu negócio encontrado no Google, com cara de quem é sério.",
    href: "https://wa.me/5511950274038",
  },
];

const passos = [
  {
    Icon: MessageCircle,
    title: "Você me conta sobre o negócio",
    desc: "Uma conversa rápida pelo WhatsApp. Entendo seu público e o que tá travando hoje.",
  },
  {
    Icon: Palette,
    title: "Monto a estratégia e desenvolvo",
    desc: "Crio tudo alinhado à sua marca, com foco em atrair e converter o cliente certo.",
  },
  {
    Icon: Rocket,
    title: "Você recebe em até 5 dias úteis",
    desc: "Pronto pra usar, revisado e ajustado.",
  },
];

export default function Home() {
  const titleComponent = (
    <div className="flex flex-col items-center gap-4 mb-24 md:-translate-y-[80px] bg-[#0B1628]/60 backdrop-blur-md rounded-3xl border border-white/5 px-8 md:px-14 py-10">
      <span className="text-gold/70 text-xs font-semibold tracking-[0.2em] uppercase">
        Agência de presença digital
      </span>
      <h1 className="text-3xl md:text-5xl font-bold text-offwhite text-center leading-snug max-w-2xl">
        Presença digital que faz o seu negócio{" "}
        <span className="text-gold">ser levado a sério.</span>
      </h1>
    </div>
  );

  return (
    <>
      {/* SEÇÃO 1 — HERO */}
      <div className="relative">
        <ContainerScroll titleComponent={titleComponent}>
          <div
            className="w-full h-full rounded-2xl flex flex-col justify-between px-8 md:px-16 pt-10 pb-10"
            style={{ background: "linear-gradient(160deg, #0d1f3c 0%, #0B1628 50%, #091422 100%)" }}
          >
            {/* Gancho — visível primeiro */}
            <motion.div
              className="flex flex-col items-center gap-3 text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-gold/50 text-[10px] tracking-[0.25em] uppercase font-semibold">
                Para negócios locais
              </span>
              <p className="text-offwhite text-xl md:text-2xl font-bold leading-snug max-w-md">
                9 em cada 10 clientes pesquisam online{" "}
                antes de comprar.{" "}
                <span className="text-gold">O seu negócio aparece?</span>
              </p>
            </motion.div>

            {/* Copy SEO — meio */}
            <motion.div
              className="flex flex-col items-center gap-2 text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="text-offwhite/60 text-sm md:text-base leading-relaxed max-w-lg">
                A Elevare cria <strong className="text-offwhite/80 font-medium">sites profissionais</strong>,{" "}
                <strong className="text-offwhite/80 font-medium">landing pages</strong> e{" "}
                <strong className="text-offwhite/80 font-medium">design de Instagram</strong> para negócios locais
                aparecerem no Google, ganharem autoridade e converterem visitante em cliente pagante.
              </p>
            </motion.div>

            {/* CTA — revelado por último */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <ShinyButton
                onClick={() => window.open("https://wa.me/5511950274038", "_blank")}
                style={{
                  "--shiny-cta-bg": "#C4A35A",
                  "--shiny-cta-bg-subtle": "#a88748",
                  "--shiny-cta-highlight": "#ffffff",
                  "--shiny-cta-highlight-subtle": "#f5e6c0",
                  "--shiny-cta-fg": "#0B1628",
                } as React.CSSProperties}
              >
                Falar com a Elevare
              </ShinyButton>
              <button
                onClick={() =>
                  document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
                }
                className="border border-[#F2EDE4]/40 text-[#F2EDE4]/70 bg-transparent font-medium px-6 py-3 rounded-full hover:bg-[#F2EDE4]/10 hover:border-[#F2EDE4]/70 hover:text-[#F2EDE4] transition-all text-sm"
              >
                Ver nosso trabalho
              </button>
            </motion.div>
          </div>
        </ContainerScroll>
      </div>

      {/* SEÇÃO 2 — PROBLEMA */}
      <section className="bg-offwhite py-24 px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
            O problema não é falta de cliente.
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gold leading-tight mt-1">
            É falta de presença.
          </h2>
          <p className="mt-6 text-navy/60 text-lg max-w-xl mx-auto leading-relaxed">
            A maioria dos negócios locais ou não aparece online, ou aparece mal.
            Sem uma presença profissional, você perde pro concorrente antes da
            conversa começar.
          </p>
        </motion.div>
      </section>

      {/* SEÇÃO 3 — MANIFESTO */}
      <section className="bg-navy/80 backdrop-blur-sm py-24 px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-offwhite leading-tight">
            A Elevare não vende design.
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-gold leading-tight mt-1">
            Vende crescimento.
          </h2>
          <p className="mt-6 text-offwhite/60 text-lg max-w-xl mx-auto leading-relaxed">
            Design sem estratégia não traz cliente. Cada entrega é feita pra
            converter, não só pra impressionar.
          </p>
        </motion.div>
      </section>

      {/* SEÇÃO 4 — SERVIÇOS */}
      <section id="servicos" className="bg-offwhite py-24 px-6">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="text-gold text-xs font-bold tracking-widest uppercase">
              Serviços
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">
              O que a Elevare faz
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicos.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(11,22,40,0.12)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="border border-navy/10 rounded-2xl p-6 flex flex-col gap-4 bg-white shadow-sm"
              >
                <h3 className="text-navy font-bold text-lg">{s.title}</h3>
                <p className="text-navy/60 text-sm flex-1 leading-relaxed">
                  {s.desc}
                </p>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold text-navy text-sm font-semibold py-2 px-4 rounded-full text-center hover:brightness-110 transition-all"
                >
                  Falar no WhatsApp
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 5 — PORTFÓLIO */}
      <div id="portfolio">
        <PortfolioSection />
      </div>

      {/* SEÇÃO 6 — COMO FUNCIONA */}
      <section className="bg-offwhite py-24 px-6">
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">
              Como funciona
            </h2>
            <p className="text-navy/60 mt-3 text-lg">
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
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: i * 0.2 },
                  },
                }}
                className="flex-1 flex flex-col items-center text-center px-6 relative"
              >
                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mb-5 z-10 shrink-0">
                  <p.Icon className="text-navy w-7 h-7" />
                </div>
                <h3 className="text-navy font-bold text-base mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed">{p.desc}</p>

                {i < passos.length - 1 && (
                  <div className="md:hidden w-px h-10 bg-gold/30 my-6" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 7 — CTA FINAL */}
      <section className="bg-gold/85 backdrop-blur-sm py-24 px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 leading-tight">
            Quer saber quanto você tá perdendo sem presença profissional?
          </h2>
          <a
            href="https://wa.me/5511950274038"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-navy text-offwhite font-bold text-lg px-10 py-4 rounded-full hover:brightness-125 transition-all"
          >
            Fala comigo agora
          </a>
        </motion.div>
      </section>
    </>
  );
}
