import { MessageCircle, Settings, Bot } from "lucide-react";

const passos = [
  {
    Icon: MessageCircle,
    title: "Entendemos seu negócio",
    desc: "Mapeamos seus pacotes, valores, capacidade, datas disponíveis e as perguntas mais frequentes.",
  },
  {
    Icon: Settings,
    title: "Configuramos o agente",
    desc: "Criamos seu qualificador de leads personalizado, com a cara do seu negócio.",
  },
  {
    Icon: Bot,
    title: "Ligamos no seu WhatsApp",
    desc: "Seu agente começa a responder e nós ajustamos até ficar perfeito.",
  },
];

/**
 * Seção "Como funciona", compartilhada pela home e pelas páginas de subnicho.
 * A home passa id="como-funciona" porque a navbar aponta pra essa âncora.
 */
export default function ComoFunciona({ id }: { id?: string }) {
  return (
    <section id={id} className="bg-navy/80 backdrop-blur-sm py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-xs font-bold tracking-widest uppercase">
            Processo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-offwhite mt-2">
            Como funciona
          </h2>
          <p className="text-offwhite/50 mt-3 text-base">
            Sem reunião demorada, sem burocracia.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-0 relative">
          <div className="hidden md:block absolute top-8 left-[16.666%] right-[16.666%] h-px bg-gold/30" />

          {passos.map((p, i) => (
            <div
              key={i}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
