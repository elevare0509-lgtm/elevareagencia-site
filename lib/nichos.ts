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

export type Mensagem = {
  de: "cliente" | "agente";
  texto: string;
};

export type Pergunta = {
  q: string;
  a: string;
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
  /** Parágrafo que explica por que a velocidade de resposta pesa neste nicho */
  contexto: string;
  beneficios: Beneficio[];
  /** O que o agente pergunta antes de chamar o dono */
  coleta: string[];
  /** Conversa ilustrativa, não é um caso real de cliente */
  exemplo: Mensagem[];
  perguntas: Pergunta[];
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
      "IA no WhatsApp do seu espaço de eventos: responde orçamento na hora, agenda visita e faz follow-up. Você só fala com quem está pronto pra fechar.",
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
    contexto:
      "Quem procura espaço para festa costuma visitar poucos lugares antes de decidir, e a visita é o que separa o curioso do cliente. O problema é que o contato chega justamente quando você está ocupado: no meio de uma montagem, durante um evento ou no fim de semana. Quando a resposta vem horas depois, o cliente já marcou visita em outro espaço. O agente fecha essa lacuna: responde na hora, apresenta o espaço e leva a conversa até a visita marcada.",
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
    coleta: [
      "Data desejada e se ela está livre na sua agenda",
      "Tipo de evento (casamento, aniversário, corporativo, formatura)",
      "Número de convidados, para ver se cabe no espaço",
      "Faixa de orçamento do cliente",
      "Melhor dia e horário para visitar o espaço",
    ],
    exemplo: [
      { de: "cliente", texto: "Boa noite! Vocês têm data livre em novembro pra um casamento de 120 pessoas?" },
      {
        de: "agente",
        texto:
          "Boa noite! Temos sim. Pra eu ver as datas livres e te passar os pacotes certos: qual dia você tem em mente e o que já está definido, como buffet e decoração?",
      },
      { de: "cliente", texto: "Sábado, dia 14. Ainda não definimos nada." },
      {
        de: "agente",
        texto:
          "Ótimo, o dia 14 está disponível. Posso te mandar os pacotes e já separar um horário pra você conhecer o espaço. Prefere durante a semana ou no sábado?",
      },
    ],
    perguntas: [
      {
        q: "O agente substitui o meu atendimento?",
        a: "Ele cuida da primeira resposta, da coleta de dados e do agendamento. Em evento grande ou pedido fora do padrão, ele te avisa e você assume a conversa.",
      },
      {
        q: "Ele consegue marcar visita direto na minha agenda?",
        a: "Sim. Nos planos Profissional e Premium o agendamento é feito no Google Calendar, então o horário confirmado já aparece pra você.",
      },
      {
        q: "O que acontece com quem pede orçamento e some?",
        a: "O follow-up automático retoma a conversa no tempo certo, sem você precisar lembrar de cobrar cada lead.",
      },
      {
        q: "Quanto custa?",
        a: "São três planos, de R$ 397 a R$ 697 por mês. Você vê o que cada um inclui na seção de investimento da página inicial.",
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
      "IA no WhatsApp do seu buffet: envia cardápio e valores na hora, coleta data e convidados, agenda degustação e faz follow-up. Atende 24h por dia.",
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
    contexto:
      "Orçamento de buffet não é uma resposta curta. Depende de número de convidados, tipo de serviço, cardápio, local do evento e extras, e quem monta tudo isso no meio da produção demora. Enquanto isso, o cliente já pediu preço pra outros dois ou três buffets. O agente faz as perguntas certas desde a primeira mensagem, envia o cardápio e deixa o pedido organizado, pra você orçar já com as informações completas e levar o lead até a degustação.",
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
    coleta: [
      "Data e tipo do evento",
      "Número de convidados",
      "Estilo de serviço e cardápio de interesse",
      "Local do evento, para calcular logística",
      "Restrições alimentares e extras (bebidas, doces, equipe)",
    ],
    exemplo: [
      { de: "cliente", texto: "Oi, queria um orçamento de buffet pra um aniversário de 15 anos." },
      {
        de: "agente",
        texto:
          "Oi! Vou te ajudar com isso. Pra montar o orçamento certo: qual a data, quantos convidados e onde vai ser a festa?",
      },
      { de: "cliente", texto: "Dia 22 de março, uns 80 convidados, num salão em Cotia." },
      {
        de: "agente",
        texto:
          "Perfeito. Te mando agora nosso cardápio e os pacotes por pessoa. Algum convidado com restrição alimentar? E se quiser, já marco uma degustação.",
      },
    ],
    perguntas: [
      {
        q: "O agente manda o cardápio e os valores sozinho?",
        a: "Sim. Mapeamos seus pacotes, valores e perguntas frequentes antes de ligar o agente, então ele responde com as informações do seu buffet.",
      },
      {
        q: "Como funciona o follow-up de quem não respondeu?",
        a: "O agente retoma a conversa de forma automática, em intervalos como D+3 e D+7, pra o lead não esfriar enquanto você está na cozinha.",
      },
      {
        q: "E se o pedido for um evento grande ou fora do padrão?",
        a: "Nesses casos o agente te avisa pra você assumir a negociação. O resto ele resolve sozinho.",
      },
      {
        q: "Quanto custa?",
        a: "São três planos, de R$ 397 a R$ 697 por mês. Os detalhes de cada um estão na seção de investimento da página inicial.",
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
      "IA no WhatsApp da sua casa de festa: responde na hora, envia fotos e valores, agenda visita e retoma quem sumiu. Quem responde primeiro fecha a data.",
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
    contexto:
      "Casa de festa vive de data, e a procura se concentra justamente quando a equipe está ocupada: fim de semana, com festa rolando. As perguntas também se repetem: quantas pessoas cabem, o que está incluso, tem estacionamento, até que horas pode. Responder isso toda vez consome o dia e atrasa o que importa, que é levar o cliente pra conhecer a casa. O agente responde as dúvidas comuns na hora, envia fotos e valores e empurra a conversa pra visita.",
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
    coleta: [
      "Data e tipo da festa (infantil, aniversário, formatura)",
      "Número de convidados, para confirmar a capacidade",
      "Período desejado (tarde ou noite)",
      "Serviços extras de interesse",
      "Melhor dia e horário para visitar a casa",
    ],
    exemplo: [
      { de: "cliente", texto: "Oi, quanto custa pra alugar a casa pra um aniversário infantil?" },
      {
        de: "agente",
        texto:
          "Oi! Pra te passar o valor certo: qual a data da festa e quantas pessoas você espera? Já te mando também as fotos da casa.",
      },
      { de: "cliente", texto: "Sábado, 6 de dezembro, umas 50 pessoas." },
      {
        de: "agente",
        texto:
          "A casa comporta bem esse número. Te enviei as fotos e o que está incluso. Quer conhecer pessoalmente? Posso marcar uma visita nesta semana.",
      },
    ],
    perguntas: [
      {
        q: "O agente responde as perguntas que se repetem todo dia?",
        a: "Sim. Capacidade, o que está incluso, estacionamento, horários e regras do espaço entram na configuração, então ele responde na hora e sem você digitar de novo.",
      },
      {
        q: "Ele envia as fotos da casa?",
        a: "Sim. Fotos e valores são enviados logo no começo da conversa, que é quando o cliente está comparando casas.",
      },
      {
        q: "Como ele reduz as faltas nas visitas?",
        a: "Com lembrete automático 24h antes. Quem confirmou é lembrado, e quem visitou e não fechou recebe um follow-up depois.",
      },
      {
        q: "Quanto custa?",
        a: "São três planos, de R$ 397 a R$ 697 por mês. A página inicial mostra o que cada plano inclui.",
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
      "IA no WhatsApp do seu bar de evento: responde pedidos de open bar de madrugada, apresenta opções de pacote e filtra quem tem data marcada.",
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
    contexto:
      "Quem planeja uma festa costuma pensar na bebida à noite, depois que o expediente acabou, e é aí que o pedido de open bar chega. O orçamento também depende de informação que o cliente muitas vezes não tem na ponta da língua: quantos convidados, quantas horas de evento, que tipo de bebida. Sem essas respostas, o orçamento sai genérico e a conversa se arrasta. O agente atende fora do horário, faz essas perguntas e apresenta opções de pacote pra você só entrar quando o cliente já está decidido.",
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
    coleta: [
      "Data e tipo do evento",
      "Número de convidados",
      "Duração do evento, em horas",
      "Perfil do público e tipo de bebida desejada",
      "Local do evento, para planejar a montagem do bar",
    ],
    exemplo: [
      { de: "cliente", texto: "Oi, vocês fazem open bar? Preciso de um orçamento pra um casamento." },
      {
        de: "agente",
        texto:
          "Fazemos sim! Pra te passar as opções certas: qual a data, quantos convidados e quantas horas de festa?",
      },
      { de: "cliente", texto: "Dia 8 de novembro, 150 pessoas, umas 5 horas." },
      {
        de: "agente",
        texto:
          "Anotado. Tenho três pacotes pra esse perfil: básico, intermediário e premium. Te envio agora com o que cada um inclui. Qual estilo de bebida seus convidados mais gostam?",
      },
    ],
    perguntas: [
      {
        q: "O agente atende fora do horário comercial?",
        a: "Sim, 24 horas por dia, todos os dias. Pedido de madrugada é respondido na hora e não fica esperando até a manhã seguinte.",
      },
      {
        q: "Ele monta o orçamento sozinho?",
        a: "Ele apresenta as opções de pacote que você cadastrou (básico, intermediário e premium) e coleta os dados do evento, pra você fechar sem montar tudo do zero.",
      },
      {
        q: "Como ele separa quem está pesquisando de quem vai fechar?",
        a: "Pela qualificação: data, número de convidados e duração. Quem tem esses dados definidos chega até você pronto pra negociar.",
      },
      {
        q: "Quanto custa?",
        a: "São três planos, de R$ 397 a R$ 697 por mês. Os detalhes estão na seção de investimento da página inicial.",
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
      "IA no WhatsApp da sua assessoria: responde casais na hora, coleta data, local e estilo e agenda a primeira reunião. Atenção ao casal, sem fila.",
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
    contexto:
      "Contratar assessoria é uma decisão de confiança, e o primeiro sinal de como será o serviço é a velocidade e o cuidado da primeira resposta. Quem chega por indicação ou pelo Instagram geralmente já está falando com outras profissionais. Ao mesmo tempo, você está atendendo casais em andamento e acompanhando eventos. O agente garante que todo casal receba uma resposta cuidadosa na hora, conta o que sua assessoria oferece e leva a conversa até a primeira reunião, onde você faz o que só você faz.",
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
    coleta: [
      "Data do casamento ou evento",
      "Local, já definido ou em busca",
      "Tipo de assessoria de interesse (completa ou do dia)",
      "Estilo e número aproximado de convidados",
      "Orçamento disponível para a assessoria",
    ],
    exemplo: [
      { de: "cliente", texto: "Oi! Vi o perfil de vocês no Instagram. Estamos noivos e queremos saber da assessoria." },
      {
        de: "agente",
        texto:
          "Oi, parabéns pelo noivado! Vou te contar como funciona. Pra começar: já têm data e local, ou ainda estão pesquisando?",
      },
      { de: "cliente", texto: "Temos a data, 20 de junho, mas o local ainda não." },
      {
        de: "agente",
        texto:
          "Boa, dá tempo de planejar com calma. Temos assessoria completa e assessoria do dia. Posso marcar uma conversa com a equipe pra entender o estilo de vocês. Qual horário fica melhor?",
      },
    ],
    perguntas: [
      {
        q: "O atendimento vai parecer robótico para os casais?",
        a: "Nos planos Profissional e Premium o agente tem tom de voz personalizado, ajustado para o jeito acolhedor da sua assessoria.",
      },
      {
        q: "Ele marca a primeira reunião?",
        a: "Sim. O casal escolhe o horário direto no WhatsApp e a reunião entra na sua agenda, com as informações do casal já coletadas.",
      },
      {
        q: "E o casal que respondeu e sumiu?",
        a: "O follow-up automático retoma a conversa no tempo certo, com uma mensagem gentil que não soa como insistência.",
      },
      {
        q: "Quanto custa?",
        a: "São três planos, de R$ 397 a R$ 697 por mês. A página inicial detalha o que cada plano inclui.",
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
      "IA no WhatsApp da sua confeitaria: envia cardápio com preços, coleta sabor, tamanho e data da encomenda e avisa o prazo. Entende foto de referência.",
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
    contexto:
      "Confeitaria trabalha com prazo curto e com as mãos ocupadas. Quando o cliente pergunta se dá pra entregar no sábado, a resposta precisa vir logo, mas é justo o momento em que você está batendo massa ou decorando. As perguntas também são sempre as mesmas: sabores, tamanhos, preço, prazo mínimo, entrega ou retirada. O agente responde tudo isso na hora, avisa quando o prazo não é possível e entrega o pedido já anotado, pra você gastar o tempo na produção e não no WhatsApp.",
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
    coleta: [
      "Data desejada, para checar o prazo mínimo",
      "Sabor, recheio e tamanho",
      "Tema ou foto de referência",
      "Quantidade de fatias ou doces",
      "Entrega ou retirada, e o endereço se for entrega",
    ],
    exemplo: [
      { de: "cliente", texto: "Bom dia! Tem bolo de leite ninho pra sábado?" },
      {
        de: "agente",
        texto:
          "Bom dia! Temos sim. Pra sábado ainda dá tempo. Qual o tamanho, pra quantas pessoas, e tem algum tema ou foto de referência?",
      },
      { de: "cliente", texto: "Pra 20 pessoas, tema unicórnio. Mandei uma foto." },
      {
        de: "agente",
        texto:
          "Recebi a foto, linda! Vai ser retirada ou entrega? Se for entrega, me passa o endereço que eu já confirmo o valor.",
      },
    ],
    perguntas: [
      {
        q: "O agente entende a foto do bolo que o cliente manda?",
        a: "Sim. Ele interpreta fotos de referência e também áudios, então o cliente não precisa descrever tudo por escrito.",
      },
      {
        q: "O que acontece quando o prazo é curto demais?",
        a: "O agente avisa o cliente automaticamente que o prazo mínimo não é possível, em vez de você descobrir isso depois.",
      },
      {
        q: "Ele recebe o pedido completo?",
        a: "Ele coleta data, sabor, tamanho, tema, quantidade e se é entrega ou retirada, e você recebe o pedido organizado.",
      },
      {
        q: "Quanto custa?",
        a: "São três planos, de R$ 397 a R$ 697 por mês. A página inicial mostra o que cada plano inclui.",
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
