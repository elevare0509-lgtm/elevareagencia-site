"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "Bella Pizza",
    category: "Menu Digital",
    desktopImage: "/portfolio/bella-pizza-desktop.png",
    mobileImage: "/portfolio/bella-pizza-mobile.png",
  },
  {
    name: "Corvo Cuts",
    category: "Landing Page",
    desktopImage: "/portfolio/corvo-cuts-desktop.png",
    mobileImage: "/portfolio/corvo-cuts-mobile.png",
  },
  {
    name: "Floralu",
    category: "Site Institucional",
    desktopImage: "/portfolio/floralu-desktop.png",
    mobileImage: "/portfolio/floralu-mobile.png",
  },
];

function NotebookMockup({
  desktopImage,
  mobileImage,
  name,
}: {
  desktopImage: string;
  mobileImage: string;
  name: string;
}) {
  return (
    <div className="relative select-none">
      {/* Notebook outer shell */}
      <div className="relative">
        {/* Screen lid */}
        <div
          className="relative rounded-t-xl overflow-hidden border border-white/10"
          style={{ background: "#18182a", aspectRatio: "16/10" }}
        >
          {/* Camera dot */}
          <div className="absolute top-0 left-0 right-0 flex justify-center py-1.5 bg-[#111120] z-10">
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          </div>

          {/* Screen content */}
          <div
            className="absolute inset-0 mt-5"
            style={{ background: "#0B1628" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={desktopImage}
              alt={`${name} — versão desktop`}
              className="w-full h-full object-cover object-top"
              style={{ opacity: 0, transition: "opacity 0.4s" }}
              onLoad={(e) => {
                (e.target as HTMLImageElement).style.opacity = "1";
              }}
            />
            {/* Placeholder gradient shown while image loads */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none">
              <div className="w-8 h-8 rounded-full border border-gold/20" />
              <span className="text-offwhite/15 text-xs tracking-widest uppercase">
                {name}
              </span>
            </div>
          </div>
        </div>

        {/* Laptop base */}
        <div
          className="h-2.5 rounded-b-sm border-x border-b border-white/10 mx-1"
          style={{ background: "#22223a" }}
        />
        <div
          className="h-1.5 rounded-b-xl mx-0 border-x border-b border-white/5"
          style={{ background: "#1a1a2e" }}
        />
      </div>

      {/* Phone mockup — overlaid bottom-right */}
      <div
        className="absolute z-20"
        style={{ bottom: "14px", right: "-12px", width: "22%", minWidth: "80px" }}
      >
        <div
          className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl"
          style={{ background: "#18182a" }}
        >
          {/* Phone top bar with notch */}
          <div
            className="flex items-center justify-center py-1"
            style={{ background: "#111120" }}
          >
            <div
              className="rounded-full"
              style={{ width: "30%", height: "3px", background: "#18182a" }}
            />
          </div>

          {/* Phone screen */}
          <div className="relative" style={{ aspectRatio: "9/19" }}>
            <div
              className="absolute inset-0"
              style={{ background: "#0B1628" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={mobileImage}
                alt={`${name} — versão mobile`}
                className="w-full h-full object-cover object-top"
                style={{ opacity: 0, transition: "opacity 0.4s" }}
                onLoad={(e) => {
                  (e.target as HTMLImageElement).style.opacity = "1";
                }}
              />
            </div>
          </div>

          {/* Home indicator */}
          <div
            className="flex items-center justify-center py-1"
            style={{ background: "#111120" }}
          >
            <div
              className="rounded-full"
              style={{ width: "28%", height: "2px", background: "rgba(255,255,255,0.15)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

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
        {/* Arrows + mockup row */}
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
                <NotebookMockup
                  desktopImage={project.desktopImage}
                  mobileImage={project.mobileImage}
                  name={project.name}
                />
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
        <div className="text-center mt-10">
          <span className="text-gold text-xs font-bold tracking-widest uppercase">
            {project.category}
          </span>
          <p className="text-offwhite font-bold text-xl mt-1">{project.name}</p>
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
                background:
                  i === current
                    ? "#C4A35A"
                    : "rgba(242,237,228,0.2)",
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
