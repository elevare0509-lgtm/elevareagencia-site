import {
  Building2,
  UtensilsCrossed,
  PartyPopper,
  Martini,
  ClipboardList,
  Cake,
  type LucideIcon,
} from "lucide-react";

export type Beneficio = {
  titulo: string;
  desc: string;
};

export type Nicho = {
  slug: string;
  Icon: LucideIcon;
  /** Card da seção "Pra quem é" na home */
  cardName: string;
  cardDor: string;
  /** Página dedicada */
  tag: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitulo: string;
  realidade: string;
  dores: string[];
  fechamento: string;
  beneficios: Beneficio[];
  serviceName: string;
};

export const nichos: Nicho[] = [
  {
    slug: "espacos-de-eventos",
    Icon: Building2,
    cardName: "Espaços de eventos",
    cardDor: "Visita que não é agendada vira data vazia no calendário.",
    tag: "ELEVARE PARA ESPAÇOS DE EVENTOS",
    metaTitle: "Automação de WhatsApp com IA para Espaços de Eventos | Elevare",
    metaDescription:
      "Qualificador de leads com IA que responde orçamentos, agenda visitas e faz follow-up no WhatsApp do seu espaço de eventos 24h por dia.",
    h1: "Seu espaço de eventos respondendo 24h no WhatsApp",
    subtitulo:
      "Qualificador de leads com IA que responde orçamentos, agenda visitas e faz follow-up. Você cuida do evento, o agente cuida do WhatsApp.",
    realidade: "A realidade de quem aluga espaço para evento",
    dores: [
      "Cliente pede orçamento no sábado à noite e fica sem resposta até segunda",
      "Você tá montando um evento e não consegue parar pra responder o WhatsApp",
      "Sem controle: risco de perder lead porque demorou ou porque a informação se perdeu na conversa",
    ],
    fechamento: "Cada orçamento sem resposta é uma data que fecha com o concorrente.",
    beneficios: [
      {
        titulo: "Responde na hora",
        desc: "Seu cliente pede orçamento às 23h de sábado? Respondido em segundos com pacotes, valores e disponibilidade.",
      },
      {
        titulo: "Agenda a visita",
        desc: "O cliente escolhe o horário e confirma direto no WhatsApp. Sua agenda de visitas enche enquanto você toca os eventos.",
      },
      {
        titulo: "Faz o follow-up",
        desc: "Cliente pediu orçamento e sumiu? O agente volta a falar com ele sozinho, no tempo certo.",
      },
      {
        titulo: "Coleta tudo antes de te chamar",
        desc: "Data, tipo de evento, número de convidados e orçamento. Você só fala com quem tá pronto pra fechar.",
      },
      {
        titulo: "Lembrete de visita",
        desc: "24h antes, lembrete automático. Menos faltas, menos horário perdido.",
      },
    ],
    serviceName: "Automação de WhatsApp com IA para Espaços de Eventos",
  },
  {
    slug: "buffets",
    Icon: UtensilsCrossed,
    cardName: "Buffets",
    cardDor: "Cardápio e valores são pedidos a toda hora, e a resposta não pode demorar.",
    tag: "ELEVARE PARA BUFFETS",
    metaTitle: "Automação de WhatsApp com IA para Buffets | Elevare",
    metaDescription:
      "IA que responde orçamentos, envia cardápio, coleta dados do evento e faz follow-up no WhatsApp do seu buffet 24h por dia.",
    h1: "Seu buffet respondendo 24h no WhatsApp",
    subtitulo:
      "Qualificador de leads com IA que envia cardápio, coleta dados do evento e faz follow-up. Você foca na cozinha, o agente cuida do comercial.",
    realidade: "A realidade de quem toca um buffet",
    dores: [
      "Cada orçamento tem dezenas de variáveis (convidados, cardápio, local, extras) e demora pra responder",
      "Cliente cota 3 buffets ao mesmo tempo e fecha com quem responde primeiro",
      "Manda orçamento e espera o lead voltar. Sem follow-up, o lead esfria e fecha com o concorrente",
    ],
    fechamento: "O buffet que responde primeiro é o que entra na degustação.",
    beneficios: [
      {
        titulo: "Responde 24h",
        desc: "Cardápio, pacotes e valores por pessoa enviados na hora, sem você precisar parar o que tá fazendo.",
      },
      {
        titulo: "Coleta todas as variáveis",
        desc: "Data, número de convidados, tipo de cardápio, local, restrições alimentares. Tudo antes de te chamar.",
      },
      {
        titulo: "Agenda degustação",
        desc: "O cliente escolhe o horário direto no WhatsApp.",
      },
      {
        titulo: "Follow-up automático",
        desc: "D+3 e D+7 com quem pediu orçamento e não respondeu.",
      },
      {
        titulo: "Filtra curiosos",
        desc: "Só te chama quando o lead tem data e budget definidos.",
      },
    ],
    serviceName: "Automação de WhatsApp com IA para Buffets",
  },
  {
    slug: "casas-de-festa",
    Icon: PartyPopper,
    cardName: "Casas de festa",
    cardDor: "O cliente cota várias casas ao mesmo tempo. Fecha com quem responde primeiro.",
    tag: "ELEVARE PARA CASAS DE FESTA",
    metaTitle: "Automação de WhatsApp com IA para Casas de Festa | Elevare",
    metaDescription:
      "IA que responde orçamentos, envia fotos do espaço e agenda visitas no WhatsApp da sua casa de festa 24h por dia.",
    h1: "Sua casa de festa respondendo 24h no WhatsApp",
    subtitulo:
      "Qualificador de leads com IA que responde na hora, envia fotos e valores, e agenda visitas. Quem responde primeiro, fecha primeiro.",
    realidade: "A realidade de quem tem casa de festa",
    dores: [
      "O cliente cota várias casas ao mesmo tempo. Fecha com quem responde primeiro.",
      "Fim de semana é quando mais chega orçamento e quando menos tem gente pra responder",
      "Perguntas repetitivas sobre capacidade, o que inclui, estacionamento e horário tomam seu tempo todo dia",
    ],
    fechamento: "Quem responde primeiro é quem fecha a data.",
    beneficios: [
      {
        titulo: "Responde na hora",
        desc: "Fotos, capacidade e valores enviados em segundos, a qualquer hora.",
      },
      {
        titulo: "Tira dúvidas automáticas",
        desc: "O que inclui (mobiliário, cozinha, estacionamento), horário de funcionamento, regras do espaço.",
      },
      {
        titulo: "Agenda visita",
        desc: "O cliente escolhe o horário e recebe confirmação direto no WhatsApp.",
      },
      {
        titulo: "Lembrete de visita",
        desc: "24h antes, aviso automático. Menos faltas.",
      },
      {
        titulo: "Follow-up pós-visita",
        desc: "Visitou e não fechou? O agente retoma a conversa no tempo certo.",
      },
    ],
    serviceName: "Automação de WhatsApp com IA para Casas de Festa",
  },
  {
    slug: "bares-de-evento",
    Icon: Martini,
    cardName: "Bares de evento",
    cardDor:
      "Pedido de open bar chega fora do horário comercial, quando ninguém está no WhatsApp.",
    tag: "ELEVARE PARA BARES DE EVENTO",
    metaTitle: "Automação de WhatsApp com IA para Bares de Evento | Elevare",
    metaDescription:
      "IA que responde pedidos de open bar, coleta dados do evento e envia pacotes no WhatsApp do seu bar de evento 24h por dia.",
    h1: "Seu bar de evento respondendo 24h no WhatsApp",
    subtitulo:
      "Qualificador de leads com IA que responde pedidos de open bar, envia pacotes e filtra quem tá pronto pra fechar.",
    realidade: "A realidade de quem monta bar em evento",
    dores: [
      "Pedido de open bar chega fora do horário comercial, quando ninguém tá no WhatsApp",
      "Cliente não sabe quantos convidados tem e pede orçamento genérico sem informação suficiente",
      "Muita negociação por mensagem que não leva a nada, tomando tempo que poderia ir pra produção",
    ],
    fechamento: "Pedido que chega de madrugada e fica sem resposta some no dia seguinte.",
    beneficios: [
      {
        titulo: "Responde 24h",
        desc: "Pacotes de open bar e valores enviados na hora, mesmo de madrugada.",
      },
      {
        titulo: "Coleta tudo antes de te chamar",
        desc: "Número de convidados, tipo de evento, duração e data.",
      },
      {
        titulo: "Apresenta opções",
        desc: "Pacote premium, intermediário e básico, sem você precisar montar cada orçamento do zero.",
      },
      {
        titulo: "Filtra quem vale seu tempo",
        desc: "Separa quem tem data marcada de quem tá só pesquisando preço.",
      },
    ],
    serviceName: "Automação de WhatsApp com IA para Bares de Evento",
  },
  {
    slug: "cerimonialistas",
    Icon: ClipboardList,
    cardName: "Cerimonialistas",
    cardDor: "Muita conversa ao mesmo tempo e pouco tempo pra responder todo mundo.",
    tag: "ELEVARE PARA CERIMONIALISTAS",
    metaTitle:
      "Automação de WhatsApp com IA para Cerimonialistas e Assessorias | Elevare",
    metaDescription:
      "IA que responde casais, coleta informações do evento e agenda reunião inicial no WhatsApp da sua assessoria 24h por dia.",
    h1: "Sua assessoria respondendo 24h no WhatsApp",
    subtitulo:
      "Qualificador de leads com IA que responde casais na hora, coleta informações do evento e agenda sua primeira reunião.",
    realidade: "A realidade de quem assessora casamento",
    dores: [
      "Muita conversa ao mesmo tempo e pouco tempo pra responder todo mundo com a atenção que cada casal merece",
      "Cada casal precisa de atenção personalizada, mas o volume de mensagens não deixa",
      "Captação depende de indicação e Instagram, mas quando o lead chega, demora pra responder e ele esfria",
    ],
    fechamento: "Casal que não recebe resposta rápida fecha com outra assessoria.",
    beneficios: [
      {
        titulo: "Responde na hora",
        desc: "Portfólio, tipos de assessoria (completa, do dia) e valores enviados em segundos.",
      },
      {
        titulo: "Coleta informações do casal",
        desc: "Data, local, estilo, orçamento disponível. Tudo antes da primeira reunião.",
      },
      {
        titulo: "Filtra quem tá pronto",
        desc: 'Separa quem tem data e budget de quem tá "só pesquisando".',
      },
      {
        titulo: "Agenda reunião inicial",
        desc: "O casal escolhe o horário direto no WhatsApp.",
      },
      {
        titulo: "Follow-up gentil",
        desc: "Quem não respondeu recebe uma mensagem no tempo certo, sem parecer insistente.",
      },
    ],
    serviceName: "Automação de WhatsApp com IA para Cerimonialistas e Assessorias",
  },
  {
    slug: "confeiteiras",
    Icon: Cake,
    cardName: "Confeiteiras",
    cardDor: "Encomendas de última hora chegam no WhatsApp e precisam de resposta rápida.",
    tag: "ELEVARE PARA CONFEITEIRAS",
    metaTitle: "Automação de WhatsApp com IA para Confeiteiras | Elevare",
    metaDescription:
      "IA que responde encomendas, envia cardápio com preços e coleta detalhes do pedido no WhatsApp da sua confeitaria 24h por dia.",
    h1: "Sua confeitaria respondendo 24h no WhatsApp",
    subtitulo:
      "Qualificador de leads com IA que responde encomendas, envia cardápio e coleta detalhes do pedido. Você foca na produção, o agente cuida do WhatsApp.",
    realidade: "A realidade de quem vive de encomenda",
    dores: [
      'Cliente manda "bom dia, tem bolo de leite ninho pra sábado?" e espera resposta imediata',
      "Mesmas perguntas dezenas de vezes por dia: sabores, tamanhos, preços, prazo de encomenda",
      "Confeiteira acorda cedo, produz o dia todo e responde WhatsApp até de madrugada, mas o lucro não aparece",
    ],
    fechamento: "Encomenda sem resposta rápida é pedido que vai pra outra confeiteira.",
    beneficios: [
      {
        titulo: "Responde 24h",
        desc: "Cardápio, sabores e preços enviados na hora, sem parar a produção.",
      },
      {
        titulo: "Coleta tudo antes de te chamar",
        desc: "Data, sabor, tamanho, tema e quantidade. Você recebe o pedido pronto.",
      },
      {
        titulo: "Aviso de prazo",
        desc: "Quando o prazo mínimo não é possível, o agente já informa o cliente automaticamente.",
      },
      {
        titulo: "Pergunta entrega ou retirada",
        desc: "Coleta endereço se for entrega.",
      },
      {
        titulo: "Entende fotos e áudios",
        desc: "O cliente manda foto de referência do bolo que quer e a IA interpreta. Isso não é chatbot comum, é inteligência artificial de verdade.",
      },
    ],
    serviceName: "Automação de WhatsApp com IA para Confeiteiras",
  },
];

export function getNicho(slug: string): Nicho {
  const nicho = nichos.find((n) => n.slug === slug);
  if (!nicho) throw new Error(`Nicho não encontrado: ${slug}`);
  return nicho;
}
