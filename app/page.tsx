import { MessageCircle, Settings, Bot, Sparkles, Smile, Stethoscope, Scissors, User, Activity, Check, Zap, CalendarCheck, Bell } from "lucide-react";

const WA = "https://wa.me/5511950274038";

const solucoes = [
  {
    Icon: Zap,
    title: "Responde na hora",
    desc: "Seu cliente manda mensagem às 23h de sábado? Respondido em segundos.",
  },
  {
    Icon: CalendarCheck,
    title: "Agenda sozinho",
    desc: "O cliente escolhe o horário e confirma no WhatsApp. A agenda enche enquanto você trabalha.",
  },
  {
    Icon: Bell,
    title: "Lembra o cliente",
    desc: "24h antes, lembrete automático. Menos faltas, menos buracos na agenda.",
  },
  {
    Icon: MessageCircle,
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
  { Icon: Sparkles,     name: "Clínicas de estética",         dor: "Procedimento caro não pode ficar sem resposta." },
  { Icon: Smile,        name: "Consultórios odontológicos",    dor: "Cada avaliação perdida é um tratamento a menos." },
  { Icon: Stethoscope,  name: "Dermatologistas",               dor: "Agenda cheia sem você parar pra responder mensagem." },
  { Icon: Scissors,     name: "Salões de beleza",              dor: "Horário de pico é quando mais chega mensagem — e some." },
  { Icon: User,         name: "Barbearias",                    dor: "Encaixe de sábado não pode esperar você ver o WhatsApp." },
  { Icon: Activity,     name: "Fisioterapeutas",               dor: "Sessão remarcada sozinha, sem buraco na agenda." },
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
  return (
    <>
      {/* ── SEÇÃO 1 — HERO ── */}
      <section className="px-6 pt-12 pb-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 bg-[#0B1628]/60 backdrop-blur-md rounded-3xl border border-white/5 px-8 md:px-14 py-12">
          <span className="text-gold/70 text-xs font-semibold tracking-[0.2em] uppercase">
            Automação inteligente para negócios locais
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-offwhite text-center leading-snug max-w-2xl">
            Nunca mais perca cliente por{" "}
            <span className="text-[#C4A35A] font-bold">demorar pra responder.</span>
          </h1>
          <p className="text-offwhite/75 font-medium text-base md:text-lg text-center max-w-[640px] leading-relaxed">
            Atendente virtual com IA que responde, agenda e lembra seus clientes no WhatsApp —
            24 horas por dia, todos os dias.
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
                A realidade de todo negócio local
              </span>
              <p className="text-offwhite text-2xl md:text-3xl font-bold leading-snug max-w-lg">
                Enquanto você trabalha,{" "}
                <span className="text-gold">quantas mensagens ficam sem resposta?</span>
              </p>
            </div>

            {/* Dores */}
            <div className="flex flex-col gap-3 max-w-lg mx-auto w-full">
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
            </div>

            {/* Fechamento + CTA */}
            <div className="flex flex-col items-center gap-4 text-center">
              <p className="text-gold font-semibold text-sm md:text-base">
                Cada mensagem sem resposta é dinheiro saindo do seu caixa.
              </p>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-navy font-bold px-7 py-3.5 rounded-full hover:brightness-110 text-base text-center"
              >
                Quero ver funcionando
              </a>
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
              A Elevare cria atendentes virtuais com inteligência artificial que respondem seus clientes no WhatsApp na hora, agendam horários automaticamente e só te chamam quando realmente precisam de você.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

          <div className="text-center mt-10">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-navy font-bold px-7 py-3.5 rounded-full hover:brightness-110 text-sm"
            >
              Quero meu atendente virtual
            </a>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 3 — COMO FUNCIONA ── */}
      <section id="como-funciona" className="bg-navy/80 backdrop-blur-sm py-24 px-6">
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

      {/* ── SEÇÃO 4 — PRA QUEM É ── */}
      <section id="sobre" className="bg-offwhite py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-bold tracking-widest uppercase">
              Pra quem é
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 leading-tight">
              Feito pra quem depende de agendamento
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {nichos.map(({ Icon, name, dor }) => (
              <div
                key={name}
                className="border border-navy/10 rounded-2xl px-6 py-5 bg-white shadow-sm flex flex-col gap-3"
              >
                <Icon className="w-6 h-6 text-gold" />
                <h3 className="text-navy font-bold text-base leading-snug">{name}</h3>
                <p className="text-navy/55 text-sm leading-relaxed">{dor}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-navy/60 text-base leading-relaxed max-w-xl mx-auto text-center">
            Se seu negócio depende de agendamento e atendimento por WhatsApp, a Elevare é pra você.
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {depoimentos.map((d, i) => (
              <div
                key={i}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 6 — INVESTIMENTO ── */}
      <section id="investimento" className="bg-offwhite py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-gold text-xs font-bold tracking-widest uppercase">
              Investimento
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">
              Menos que um salário mínimo pra atender 24h
            </h2>
          </div>

          <div className="mx-auto max-w-[480px]">
            <div className="bg-navy border border-gold/25 rounded-3xl px-8 py-10 flex flex-col gap-8">
              {/* Valores */}
              <div className="flex flex-col gap-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-offwhite/70 text-sm">Setup único</span>
                  <span className="text-gold text-2xl font-bold">R$ 897</span>
                </div>
                <div className="border-t border-white/8" />
                <div className="flex items-baseline justify-between">
                  <span className="text-offwhite/70 text-sm">Mensalidade</span>
                  <span className="text-gold text-2xl font-bold">R$ 497<span className="text-base font-medium">/mês</span></span>
                </div>
              </div>

              {/* Incluso */}
              <ul className="flex flex-col gap-3">
                {[
                  "Atendente virtual configurado pro seu negócio",
                  "Respostas, agendamento e lembretes automáticos",
                  "Funcionamento 24h no seu WhatsApp",
                  "Ajustes e suporte contínuos",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span className="text-offwhite/80 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-gold text-navy font-bold px-7 py-3.5 rounded-full hover:brightness-110 text-sm"
              >
                Quero começar
              </a>

              <p className="text-center text-offwhite/70 text-sm">
                Sem fidelidade. Cancele quando quiser.
              </p>
            </div>
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
