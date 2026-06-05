"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { MessageCircle, Palette, Rocket } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

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
    desc: "Seu cardápio no celular do cliente. Sem app, sem complicação.",
    cta: "Falar no WhatsApp",
    ctaStyle: "gold",
    href: "https://wa.me/5511950274038",
  },
  {
    title: "Landing Page",
    desc: "Uma página focada em converter visitante em cliente.",
    cta: "Agendar conversa",
    ctaStyle: "outline",
    href: "https://wa.me/5511950274038",
  },
  {
    title: "Design Instagram",
    desc: "Perfil que passa credibilidade antes de abrir a conversa.",
    cta: "Falar no WhatsApp",
    ctaStyle: "gold",
    href: "https://wa.me/5511950274038",
  },
  {
    title: "Site Institucional",
    desc: "Sua empresa no digital do jeito que merece.",
    cta: "Agendar conversa",
    ctaStyle: "outline",
    href: "https://wa.me/5511950274038",
  },
];

const passos = [
  {
    Icon: MessageCircle,
    title: "Você me conta sobre seu negócio",
    desc: "Uma conversa rápida pelo WhatsApp — entendo seu público, objetivo e o que tá travando hoje.",
  },
  {
    Icon: Palette,
    title: "Crio as peças personalizadas",
    desc: "Desenvolvo o design alinhado à sua marca, com foco em atrair e converter o cliente certo.",
  },
  {
    Icon: Rocket,
    title: "Entrego em até 5 dias úteis",
    desc: "Você recebe tudo pronto, revisado e ajustado. Sem demora, sem enrolação.",
  },
];

const depoimentos = [
  { nome: "Ana Lima", segmento: "Restaurante", texto: "Depoimento em breve." },
  { nome: "Carlos Mendes", segmento: "Barbearia", texto: "Depoimento em breve." },
  { nome: "Mariana Souza", segmento: "Clínica de Estética", texto: "Depoimento em breve." },
];

export default function Home() {
  const [sliderValue, setSliderValue] = useState(5);

  const titleComponent = (
    <div className="flex flex-col items-center gap-6 pb-8">
      <h1 className="text-4xl md:text-6xl font-bold text-offwhite text-center leading-tight max-w-3xl">
        Sua presença digital precisa{" "}
        <span className="text-gold">trabalhar</span> por você.
      </h1>
      <p className="text-offwhite/70 text-lg md:text-xl text-center max-w-xl">
        A Elevare transforma negócios locais em referências online.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://wa.me/5511950274038"
          className="bg-gold text-navy font-semibold px-7 py-3 rounded-full hover:brightness-110 transition-all"
        >
          Falar no WhatsApp
        </a>
        <a
          href="#servicos"
          className="border border-offwhite/50 text-offwhite font-semibold px-7 py-3 rounded-full hover:bg-offwhite/10 transition-all"
        >
          Ver serviços
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* SEÇÃO 1 — HERO */}
      <div className="relative">
        <ContainerScroll titleComponent={titleComponent}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&q=75"
            alt="Dashboard profissional Elevare"
            className="w-full h-full object-cover object-top rounded-2xl"
          />
        </ContainerScroll>
      </div>

      {/* SEÇÃO 2 — POSICIONAMENTO */}
      <section className="bg-offwhite/80 backdrop-blur-sm py-24 px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy leading-tight">
            A Elevare não vende design.
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-gold leading-tight mt-1">
            Vende crescimento.
          </h2>
          <p className="mt-6 text-navy/60 text-lg max-w-xl mx-auto leading-relaxed">
            Design sem estratégia não gera cliente. Cada entrega da Elevare é
            pensada para converter visitante em cliente pagante.
          </p>
        </motion.div>
      </section>

      {/* SEÇÃO 3 — SERVIÇOS */}
      <section id="servicos" className="bg-navy/80 backdrop-blur-sm py-24 px-6">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-offwhite text-center mb-12"
          >
            O que a Elevare faz
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicos.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  boxShadow: "0 12px 40px rgba(196,163,90,0.18)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="border border-gold rounded-2xl p-6 flex flex-col gap-4 bg-[#0f1e35]/70 backdrop-blur-sm"
              >
                <h3 className="text-offwhite font-bold text-lg">{s.title}</h3>
                <p className="text-offwhite/60 text-sm flex-1 leading-relaxed">
                  {s.desc}
                </p>
                <a
                  href={s.href}
                  className={
                    s.ctaStyle === "gold"
                      ? "bg-gold text-navy text-sm font-semibold py-2 px-4 rounded-full text-center hover:brightness-110 transition-all"
                      : "border border-gold text-gold text-sm font-semibold py-2 px-4 rounded-full text-center hover:bg-gold/10 transition-all"
                  }
                >
                  {s.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 4 — COMO FUNCIONA */}
      <section className="bg-offwhite/80 backdrop-blur-sm py-24 px-6">
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
              Sem reunião demorada, sem burocracia. A gente resolve.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-start gap-0 relative">
            {/* linha conectora — desktop */}
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

                {/* separador vertical mobile */}
                {i < passos.length - 1 && (
                  <div className="md:hidden w-px h-10 bg-gold/30 my-6" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 5 — PROVA SOCIAL */}
      <section className="bg-navy/80 backdrop-blur-sm py-24 px-6">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-offwhite text-center mb-12"
          >
            O que dizem sobre a Elevare
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {depoimentos.map((d, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="border border-gold rounded-2xl p-6 bg-[#0f1e35] flex flex-col gap-3"
              >
                <span className="text-gold text-6xl font-serif leading-none select-none">
                  &ldquo;
                </span>
                <p className="text-offwhite/50 text-sm italic leading-relaxed flex-1">
                  {d.texto}
                </p>
                <div className="pt-2 border-t border-gold/20">
                  <p className="text-offwhite font-semibold text-sm">{d.nome}</p>
                  <p className="text-gold text-xs mt-0.5">{d.segmento}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 6 — LEAD MAGNET */}
      <section className="bg-offwhite/80 backdrop-blur-sm py-24 px-6">
        <motion.div
          className="max-w-xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8 leading-snug">
            Qual a prioridade do visual do seu negócio hoje?
          </h2>

          <div className="mb-1 flex justify-between text-xs text-navy/50 font-medium px-1">
            <span>Baixa prioridade</span>
            <span className="text-gold font-bold text-base">{sliderValue}</span>
            <span>Alta prioridade</span>
          </div>
          <input
            type="range"
            min={0}
            max={10}
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="w-full accent-gold mb-8 cursor-pointer"
          />

          <input
            type="email"
            placeholder="Digite seu email para receber uma condição especial"
            className="w-full border border-navy/20 rounded-full px-5 py-3 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold mb-4 bg-white/70 backdrop-blur-sm transition-colors"
          />
          <button className="w-full bg-navy text-offwhite font-semibold py-3 rounded-full hover:brightness-125 transition-all">
            Quero minha condição especial
          </button>
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
            Pronto pra ter uma presença digital que realmente funciona?
          </h2>
          <a
            href="https://wa.me/5511950274038"
            className="inline-block bg-navy text-offwhite font-bold text-lg px-10 py-4 rounded-full hover:brightness-125 transition-all"
          >
            Falar no WhatsApp
          </a>
        </motion.div>
      </section>
    </>
  );
}
