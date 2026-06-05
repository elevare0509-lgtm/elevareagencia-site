"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "Bella Pizza",
    category: "MENU DIGITAL",
    image: "/portfolio/bella-pizza.png", // TODO: adicionar print
    result: "Projeto feito com foco em conversão", // TODO: resultado real
  },
  {
    name: "Corvo Cuts & Craft",
    category: "LANDING PAGE",
    image: "/portfolio/corvo-cuts.png", // TODO: adicionar print
    result: "Projeto feito com foco em conversão", // TODO: resultado real
  },
  {
    name: "Floralu",
    category: "SITE",
    image: "/portfolio/floralu.png", // TODO: adicionar print
    result: "Projeto feito com foco em conversão", // TODO: resultado real
  },
];

export default function PortfolioSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent((next + projects.length) % projects.length);
  };

  const project = projects[current];

  return (
    <section style={{ background: "#080e1a" }} className="py-24 px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-gold text-xs font-bold tracking-widest uppercase">
          Portfólio
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-offwhite mt-3">
          Alguns dos nossos{" "}
          <span className="text-gold">trabalhos</span>
        </h2>
        <p className="text-offwhite/50 text-base mt-4 max-w-lg mx-auto leading-relaxed">
          Cada projeto feito com estratégia, não só pra ficar bonito, mas pra
          trazer cliente.
        </p>
      </div>

      {/* Carousel */}
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={() => go(current - 1)}
            className="shrink-0 w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
            aria-label="Projeto anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                {/* Flat image card */}
                <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0B1628]" style={{ aspectRatio: "16/10" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top"
                    style={{ opacity: 0, transition: "opacity 0.4s" }}
                    onLoad={(e) => {
                      (e.target as HTMLImageElement).style.opacity = "1";
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => go(current + 1)}
            className="shrink-0 w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
            aria-label="Próximo projeto"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Project info */}
        <div className="text-center mt-8">
          <span className="text-gold text-xs font-bold tracking-widest uppercase">
            {project.category}
          </span>
          <p className="text-offwhite font-bold text-xl mt-1">{project.name}</p>
          <p className="text-offwhite/40 text-sm mt-1">{project.result}</p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Ir para projeto ${i + 1}`}
              className="transition-all duration-300"
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                borderRadius: "9999px",
                background: i === current ? "#C4A35A" : "rgba(242,237,228,0.2)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <p className="text-center text-offwhite/40 text-sm mt-16 max-w-md mx-auto leading-relaxed">
        Quer ver como ficaria no seu negócio?{" "}
        <a
          href="https://wa.me/5511950274038"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:brightness-110 transition-all underline underline-offset-2"
        >
          Fala comigo no WhatsApp
        </a>{" "}
        e te mostro um exemplo do seu segmento.
      </p>
    </section>
  );
}
