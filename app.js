const cardArt = [
  "assets/cards-webp/00-o-louco.webp",
  "assets/cards-webp/01-o-mago.webp",
  "assets/cards-webp/02-a-sacerdotisa.webp",
  "assets/cards-webp/03-a-imperatriz.webp",
  "assets/cards-webp/04-o-imperador.webp",
  "assets/cards-webp/05-o-hierofante.webp",
  "assets/cards-webp/06-os-enamorados.webp",
  "assets/cards-webp/07-o-carro.webp",
  "assets/cards-webp/08-a-justica.webp",
  "assets/cards-webp/09-o-eremita.webp",
  "assets/cards-webp/10-a-roda-da-fortuna.webp",
  "assets/cards-webp/11-a-forca.webp",
  "assets/cards-webp/12-o-enforcado.webp",
  "assets/cards-webp/13-a-morte.webp",
  "assets/cards-webp/14-a-temperanca.webp",
  "assets/cards-webp/15-o-diabo.webp",
  "assets/cards-webp/16-a-torre.webp",
  "assets/cards-webp/17-a-estrela.webp",
  "assets/cards-webp/18-a-lua.webp",
  "assets/cards-webp/19-o-sol.webp",
  "assets/cards-webp/20-o-julgamento.webp",
  "assets/cards-webp/21-o-mundo.webp"
];

const deck = [
  {
    id: 0,
    numeral: "0",
    name: "O Louco",
    symbol: "✧",
    keyword: "Começo",
    upright: "Há vida querendo começar onde o medo pede garantias. O Louco convida você a dar espaço ao novo sem exigir que todo o caminho esteja visível.",
    reversed: "O impulso pode estar correndo à frente da consciência — ou o receio pode estar impedindo um começo necessário. Respire antes de saltar, mas não transforme prudência em paralisia.",
    advice: "Escolha um primeiro passo pequeno, verdadeiro e possível.",
    reflection: "O que você faria se não precisasse saber agora como tudo vai terminar?"
  },
  {
    id: 1,
    numeral: "I",
    name: "O Mago",
    symbol: "✦",
    keyword: "Ação",
    upright: "Você já possui mais recursos do que imagina. Ideia, palavra e atitude podem se alinhar agora para transformar intenção em movimento.",
    reversed: "Talento sem direção se dispersa. Observe onde você promete mais do que consegue sustentar ou duvida de capacidades que já demonstrou possuir.",
    advice: "Use o que está ao alcance antes de buscar a ferramenta perfeita.",
    reflection: "Qual capacidade sua está esperando para ser usada com intenção?"
  },
  {
    id: 2,
    numeral: "II",
    name: "A Sacerdotisa",
    symbol: "☾",
    keyword: "Intuição",
    upright: "Nem toda resposta precisa ser perseguida. Há algo que se revela quando você reduz o ruído, observa os sinais e confia no que sente com serenidade.",
    reversed: "A voz interna pode estar abafada por ansiedade, expectativas externas ou excesso de análise. Antes de decidir, diferencie intuição de medo.",
    advice: "Faça silêncio suficiente para ouvir o que você já sabe.",
    reflection: "Que verdade aparece quando você deixa de tentar convencer alguém — inclusive a si mesmo?"
  },
  {
    id: 3,
    numeral: "III",
    name: "A Imperatriz",
    symbol: "❀",
    keyword: "Criação",
    upright: "Este é um chamado para nutrir: uma relação, um projeto, seu corpo ou uma parte de você que precisa florescer sem pressa.",
    reversed: "Você pode estar oferecendo energia a todos e deixando a si mesmo por último. Também pode haver uma criação sendo sufocada por cobrança excessiva.",
    advice: "Cuide daquilo que deseja ver crescer, começando por você.",
    reflection: "O que em sua vida precisa de presença e cuidado, não de pressão?"
  },
  {
    id: 4,
    numeral: "IV",
    name: "O Imperador",
    symbol: "♜",
    keyword: "Estrutura",
    upright: "Clareza, limites e constância podem devolver estabilidade à situação. Liderar agora significa sustentar escolhas, não controlar tudo.",
    reversed: "Rigidez pode estar tomando o lugar da segurança. Observe se a necessidade de controlar está impedindo diálogo, adaptação ou descanso.",
    advice: "Crie uma estrutura que proteja o essencial sem aprisioná-lo.",
    reflection: "Qual limite deixaria sua vida mais segura e mais leve ao mesmo tempo?"
  },
  {
    id: 5,
    numeral: "V",
    name: "O Hierofante",
    symbol: "⌘",
    keyword: "Sabedoria",
    upright: "Conhecimentos já testados, pessoas experientes ou valores profundos podem oferecer chão. Escute a tradição sem abandonar o próprio discernimento.",
    reversed: "Uma regra antiga talvez já não sirva à pessoa que você se tornou. Questione padrões herdados antes de obedecê-los automaticamente.",
    advice: "Procure orientação, mas mantenha sua consciência na decisão.",
    reflection: "Que regra você segue apenas porque sempre foi assim?"
  },
  {
    id: 6,
    numeral: "VI",
    name: "Os Enamorados",
    symbol: "♡",
    keyword: "Escolha",
    upright: "Mais do que romance, esta carta fala de escolha coerente. O caminho mais verdadeiro aproxima desejo, valores e responsabilidade.",
    reversed: "Pode haver desencontro entre o que você sente, diz e faz. Evitar uma escolha também é escolher — geralmente em favor da permanência.",
    advice: "Escolha aquilo com que você poderá conviver em paz consigo mesmo.",
    reflection: "Qual decisão aproxima você da pessoa que deseja ser?"
  },
  {
    id: 7,
    numeral: "VII",
    name: "O Carro",
    symbol: "➶",
    keyword: "Direção",
    upright: "Há força para avançar, desde que emoções e objetivos apontem para a mesma direção. Movimento com propósito supera pressa.",
    reversed: "Muita energia pode estar sendo gasta sem uma direção clara. Reassuma o volante antes de acelerar ou tentar vencer tudo de uma vez.",
    advice: "Defina o destino mais importante e retire força do que o afasta dele.",
    reflection: "Você está avançando em direção ao que deseja ou apenas fugindo do desconforto?"
  },
  {
    id: 8,
    numeral: "VIII",
    name: "A Justiça",
    symbol: "⚖",
    keyword: "Verdade",
    upright: "A situação pede honestidade, consequência e equilíbrio. Olhar os fatos sem distorção permite uma decisão mais limpa.",
    reversed: "Talvez exista uma verdade sendo evitada, uma responsabilidade deslocada ou uma cobrança desigual. Justiça começa pela lucidez.",
    advice: "Separe fatos, sentimentos e suposições antes de concluir.",
    reflection: "Que parte da verdade você precisa reconhecer para seguir com integridade?"
  },
  {
    id: 9,
    numeral: "IX",
    name: "O Eremita",
    symbol: "⌁",
    keyword: "Busca",
    upright: "O recolhimento pode iluminar o que o barulho esconde. Você não precisa desaparecer do mundo, apenas criar espaço para se escutar.",
    reversed: "Isolamento e reflexão não são a mesma coisa. Observe se você está se protegendo para compreender ou se afastando para não sentir.",
    advice: "Diminua o ritmo e procure uma resposta que seja realmente sua.",
    reflection: "Que resposta só pode surgir quando ninguém mais está opinando?"
  },
  {
    id: 10,
    numeral: "X",
    name: "A Roda da Fortuna",
    symbol: "◉",
    keyword: "Mudança",
    upright: "Um ciclo está se movimentando. Nem tudo está sob seu controle, mas sua maneira de responder ao movimento continua sendo uma escolha.",
    reversed: "Resistir ao fim de um ciclo prolonga o desconforto. Padrões podem estar se repetindo para que você finalmente os reconheça.",
    advice: "Adapte-se ao que mudou sem abandonar aquilo que importa.",
    reflection: "Que padrão volta à sua vida pedindo uma resposta diferente?"
  },
  {
    id: 11,
    numeral: "XI",
    name: "A Força",
    symbol: "∞",
    keyword: "Coragem",
    upright: "Sua maior força agora não está na imposição, mas na firmeza gentil. Coragem é permanecer presente mesmo diante do que assusta.",
    reversed: "Autocrítica e cansaço podem estar diminuindo sua confiança. Forçar-se além do limite não prova força; reconhecer o limite também é coragem.",
    advice: "Trate a parte assustada de você com firmeza e compaixão.",
    reflection: "Como seria agir com coragem sem precisar agir com dureza?"
  },
  {
    id: 12,
    numeral: "XII",
    name: "O Enforcado",
    symbol: "▽",
    keyword: "Pausa",
    upright: "A pausa não é ausência de progresso. Soltar uma perspectiva antiga pode revelar uma saída que a insistência não permite enxergar.",
    reversed: "Você pode estar esperando sem realmente se abrir à mudança, ou se sacrificando por algo que não devolve sentido. Reavalie o preço da espera.",
    advice: "Pare de empurrar por um instante e observe a situação de cabeça para baixo.",
    reflection: "O que muda quando você deixa de perguntar “como faço dar certo?” e pergunta “o que isto quer me mostrar?”"
  },
  {
    id: 13,
    numeral: "XIII",
    name: "A Morte",
    symbol: "✤",
    keyword: "Renovação",
    upright: "Algo cumpriu seu ciclo e precisa ser liberado para que o novo tenha espaço. Esta carta fala de transformação, não de morte literal.",
    reversed: "Apego ao conhecido pode estar prolongando uma fase já encerrada. O medo da mudança não torna o passado novamente vivo.",
    advice: "Honre o que terminou e retire dele apenas o aprendizado.",
    reflection: "O que você sabe que acabou, mas ainda tenta manter igual?"
  },
  {
    id: 14,
    numeral: "XIV",
    name: "A Temperança",
    symbol: "⚗",
    keyword: "Equilíbrio",
    upright: "A cura acontece na medida, na combinação e no tempo certo. Integre extremos em vez de viver oscilando entre eles.",
    reversed: "Excesso, pressa ou descompasso podem estar drenando sua energia. Retomar o centro exige ajustes simples e consistentes.",
    advice: "Faça menos, melhor e com regularidade.",
    reflection: "Que pequeno ajuste devolveria equilíbrio ao seu dia?"
  },
  {
    id: 15,
    numeral: "XV",
    name: "O Diabo",
    symbol: "♢",
    keyword: "Apego",
    upright: "Desejos, hábitos ou vínculos podem estar exercendo mais poder do que deveriam. Reconhecer a corrente é o primeiro movimento para soltá-la.",
    reversed: "A consciência de um padrão já começou a enfraquecê-lo. A libertação pode ser desconfortável, mas está mais próxima do que parece.",
    advice: "Nomeie sem vergonha aquilo que controla você no silêncio.",
    reflection: "O que oferece alívio imediato, mas cobra caro depois?"
  },
  {
    id: 16,
    numeral: "XVI",
    name: "A Torre",
    symbol: "ϟ",
    keyword: "Ruptura",
    upright: "Uma estrutura frágil pode estar sendo revelada. O impacto não é punição: é a verdade abrindo espaço onde a aparência já não se sustentava.",
    reversed: "Você talvez perceba uma mudança inevitável e tente adiá-la. Pequenas verdades aceitas agora evitam rupturas maiores adiante.",
    advice: "Proteja o essencial e deixe cair aquilo que só parecia seguro.",
    reflection: "Que verdade, embora desconfortável, está tentando libertar você?"
  },
  {
    id: 17,
    numeral: "XVII",
    name: "A Estrela",
    symbol: "✦",
    keyword: "Esperança",
    upright: "Depois do desgaste, sua luz começa a encontrar espaço novamente. Esperança aqui não é negar a dor, mas lembrar que existe caminho além dela.",
    reversed: "A conexão com o futuro pode estar enfraquecida pelo cansaço. Não exija fé grandiosa: procure um ponto pequeno de luz e cuide dele.",
    advice: "Alimente aquilo que faz você acreditar novamente na vida.",
    reflection: "Qual pequena possibilidade ainda acende algo dentro de você?"
  },
  {
    id: 18,
    numeral: "XVIII",
    name: "A Lua",
    symbol: "☽",
    keyword: "Mistério",
    upright: "Nem tudo está claro, e a imaginação pode ampliar sombras. Caminhe devagar, observe sonhos e sensações, mas confirme o que puder.",
    reversed: "Uma confusão começa a se desfazer. Medos antigos podem perder força quando são trazidos para a luz e confrontados com a realidade.",
    advice: "Não tome uma sensação intensa como prova; investigue com delicadeza.",
    reflection: "O que é fato, o que é medo e o que ainda permanece desconhecido?"
  },
  {
    id: 19,
    numeral: "XIX",
    name: "O Sol",
    symbol: "☀",
    keyword: "Vitalidade",
    upright: "Clareza, calor e expressão autêntica favorecem este momento. Permita-se reconhecer o que está dando certo e ocupar seu lugar com alegria.",
    reversed: "A luz continua presente, mas pode estar encoberta por expectativas irreais ou dificuldade de celebrar. Alegria não precisa ser perfeita para ser verdadeira.",
    advice: "Aproxime-se de pessoas e atividades que devolvem vida ao seu corpo.",
    reflection: "O que já merece ser celebrado, mesmo que ainda não esteja completo?"
  },
  {
    id: 20,
    numeral: "XX",
    name: "O Julgamento",
    symbol: "♬",
    keyword: "Despertar",
    upright: "Uma compreensão mais madura chama você a responder de outro modo. O passado pode ser integrado sem continuar comandando o presente.",
    reversed: "Culpa ou medo de julgamento podem impedir um recomeço. Aprender com o passado é diferente de condenar-se a repeti-lo.",
    advice: "Responda ao que a vida pede agora, não ao que você era antes.",
    reflection: "Que versão sua está pronta para ser deixada para trás?"
  },
  {
    id: 21,
    numeral: "XXI",
    name: "O Mundo",
    symbol: "◎",
    keyword: "Integração",
    upright: "Um ciclo encontra completude. Reconheça o caminho percorrido, recolha os aprendizados e permita que a conclusão seja também uma passagem.",
    reversed: "Há algo quase concluído, mas uma pendência emocional ou prática impede o fechamento. Evite abandonar o processo a poucos passos do fim.",
    advice: "Conclua com presença antes de correr para o próximo começo.",
    reflection: "O que precisa ser reconhecido ou finalizado para você seguir inteiro?"
  }
].map((card, index) => ({ ...card, art: cardArt[index] }));

const positions = {
  one: ["Mensagem para o agora"],
  three: ["A raiz", "O momento", "A direção"]
};

const state = {
  spread: "one",
  question: "",
  cards: [],
  revealed: 0,
  sound: localStorage.getItem("oraculo-sound") !== "off",
  currentHistoryId: null
};

const screens = [...document.querySelectorAll("[data-screen]")];
const questionInput = document.querySelector("#question");
const questionCount = document.querySelector("#question-count");
const drawArea = document.querySelector("#draw-area");
const interpretation = document.querySelector("#interpretation");
const toast = document.querySelector("#toast");
let toastTimer;

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#039;",
    '"': "&quot;"
  })[character]);
}

function showScreen(name) {
  screens.forEach(screen => screen.classList.toggle("is-active", screen.dataset.screen === name));
  window.scrollTo({ top: 0, behavior: "smooth" });
  requestAnimationFrame(() => document.querySelector(`[data-screen="${name}"]`)?.focus?.());
}

function updateSpread(spread) {
  state.spread = spread;
  document.querySelectorAll("[data-spread]").forEach(option => {
    const selected = option.dataset.spread === spread;
    option.classList.toggle("is-selected", selected);
    option.setAttribute("aria-checked", String(selected));
  });
  playTone(330, 0.045, "sine", 0.025);
}

function secureRandom(max) {
  if (window.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] % max;
  }
  return Math.floor(Math.random() * max);
}

function chooseCards(count) {
  const available = [...deck];
  return Array.from({ length: count }, (_, index) => {
    const selectedIndex = secureRandom(available.length);
    const card = available.splice(selectedIndex, 1)[0];
    return {
      ...card,
      position: positions[state.spread][index],
      isReversed: secureRandom(100) < 30,
      revealed: false
    };
  });
}

function beginReading() {
  state.question = questionInput.value.trim() || "O que preciso compreender sobre o meu momento atual?";
  state.revealed = 0;
  state.currentHistoryId = null;
  state.cards = chooseCards(state.spread === "one" ? 1 : 3);
  document.querySelector("#shuffle-question").textContent = `“${state.question}”`;
  showScreen("shuffle");
  playShuffle();
  window.setTimeout(renderReading, 2650);
}

function renderReading() {
  document.querySelector("#reading-question").textContent = `“${state.question}”`;
  document.querySelector("#reading-title").textContent = state.cards.length === 1 ? "Escolha sua carta" : "As cartas estão diante de você";
  document.querySelector("#reading-instruction").textContent = state.cards.length === 1
    ? "Toque na carta quando sentir que é o momento."
    : "Revele uma carta de cada vez, seguindo a ordem que sentir.";
  interpretation.hidden = true;
  drawArea.innerHTML = state.cards.map((card, index) => cardTemplate(card, index)).join("");
  updateRevealCounter();
  showScreen("reading");
  drawArea.querySelector("button")?.focus({ preventScroll: true });
}

function cardTemplate(card, index) {
  return `
    <div class="card-slot ${card.revealed ? "is-revealed" : ""}" data-card-slot="${index}">
      <span class="position-label">${escapeHtml(card.position)}</span>
      <button class="tarot-card ${card.revealed ? "is-revealed" : ""}" type="button" data-card-index="${index}" aria-label="${card.revealed ? escapeHtml(card.name) : `Revelar carta ${index + 1}`}" ${card.revealed ? "disabled" : ""}>
        <span class="tarot-card-inner">
          <span class="tarot-card-face tarot-card-back">
            <span class="back-design" aria-hidden="true">☾</span>
          </span>
          <span class="tarot-card-face tarot-card-front ${card.isReversed ? "is-reversed" : ""}">
            <img class="arcana-art" src="${escapeHtml(card.art)}" alt="" decoding="async" draggable="false">
            <span class="arcana-vignette" aria-hidden="true"></span>
            <span class="arcana-number">${card.numeral}</span>
            ${card.isReversed ? '<span class="reversed-badge">invertida</span>' : ""}
            <span class="arcana-caption">
              <strong class="arcana-name">${card.name}</strong>
              <span class="arcana-keyword">${card.keyword}</span>
            </span>
          </span>
        </span>
      </button>
      <span class="tap-hint">toque para revelar</span>
    </div>`;
}

function revealCard(index) {
  const card = state.cards[index];
  if (!card || card.revealed) return;
  card.revealed = true;
  state.revealed += 1;

  const button = drawArea.querySelector(`[data-card-index="${index}"]`);
  const slot = drawArea.querySelector(`[data-card-slot="${index}"]`);
  button.classList.add("is-revealed");
  button.disabled = true;
  button.setAttribute("aria-label", `${card.name}${card.isReversed ? ", invertida" : ""}`);
  slot.classList.add("is-revealed");
  playReveal(index);
  updateRevealCounter();

  if (state.revealed === state.cards.length) {
    window.setTimeout(showInterpretation, 950);
  }
}

function updateRevealCounter() {
  const counter = document.querySelector("#reveal-counter");
  const plural = state.revealed === 1 ? "revelada" : "reveladas";
  counter.textContent = `${state.revealed} de ${state.cards.length} ${plural}`;
}

function showInterpretation() {
  const content = document.querySelector("#interpretation-content");
  const reflection = document.querySelector("#reflection-question");
  const title = document.querySelector("#interpretation-title");

  if (state.cards.length === 1) {
    const card = state.cards[0];
    title.textContent = "O convite desta carta";
    content.innerHTML = `
      <div class="reading-text">
        <p><strong>${card.name}${card.isReversed ? " invertida" : ""}</strong> surge como um espelho para sua pergunta. ${card.isReversed ? card.reversed : card.upright}</p>
        <p>${card.advice}</p>
      </div>`;
    reflection.textContent = card.reflection;
  } else {
    title.textContent = "O fio que une sua tiragem";
    content.innerHTML = `
      <div class="card-meaning-list">
        ${state.cards.map((card, index) => `
          <article class="card-meaning-item">
            <span class="meaning-index">0${index + 1}</span>
            <div>
              <h3>${escapeHtml(card.name)} <span>— ${escapeHtml(card.position)}${card.isReversed ? ", invertida" : ""}</span></h3>
              <p>${escapeHtml(card.isReversed ? card.reversed : card.upright)}</p>
            </div>
          </article>`).join("")}
      </div>
      <div class="reading-text">
        <p>${buildSynthesis()}</p>
      </div>`;
    reflection.textContent = state.cards[2].reflection;
  }

  interpretation.hidden = false;
  saveReading();
  window.setTimeout(() => interpretation.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
}

function buildSynthesis() {
  const [root, present, direction] = state.cards;
  const openings = [
    "As cartas descrevem uma passagem: o que começou como",
    "O desenho desta tiragem mostra que a energia de",
    "Há um movimento entre passado e futuro. A experiência de"
  ];
  const opening = openings[secureRandom(openings.length)];
  return `${opening} <strong>${root.keyword.toLowerCase()}</strong> ainda influencia sua percepção. No presente, <strong>${present.name}</strong> pede ${present.advice.toLowerCase()} A direção sugerida por <strong>${direction.name}</strong> não é uma sentença, mas um convite: ${direction.advice.toLowerCase()} Observe qual dessas três mensagens produz reconhecimento verdadeiro — é ali que a leitura encontra você.`;
}

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem("oraculo-history")) || [];
  } catch {
    return [];
  }
}

function saveReading() {
  if (state.currentHistoryId) return;
  const history = getHistory();
  const reading = {
    id: `${Date.now()}-${secureRandom(10000)}`,
    date: new Date().toISOString(),
    spread: state.spread,
    question: state.question,
    cards: state.cards.map(card => ({ id: card.id, isReversed: card.isReversed, position: card.position }))
  };
  state.currentHistoryId = reading.id;
  localStorage.setItem("oraculo-history", JSON.stringify([reading, ...history].slice(0, 20)));
}

function openHistory() {
  renderHistory();
  const drawer = document.querySelector("#history-drawer");
  const backdrop = document.querySelector("[data-drawer-backdrop]");
  backdrop.hidden = false;
  requestAnimationFrame(() => {
    backdrop.classList.add("is-visible");
    drawer.classList.add("is-open");
  });
  drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  window.setTimeout(() => drawer.querySelector("[data-action='close-history']")?.focus(), 180);
}

function closeHistory() {
  const drawer = document.querySelector("#history-drawer");
  const backdrop = document.querySelector("[data-drawer-backdrop]");
  backdrop.classList.remove("is-visible");
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  window.setTimeout(() => { backdrop.hidden = true; }, 260);
}

function renderHistory() {
  const history = getHistory();
  const list = document.querySelector("#history-list");
  const clear = document.querySelector("[data-action='clear-history']");
  clear.disabled = history.length === 0;
  if (!history.length) {
    list.innerHTML = '<div class="history-empty">Suas tiragens concluídas<br>aparecerão aqui.</div>';
    return;
  }
  list.innerHTML = history.map(reading => {
    const names = reading.cards.map(saved => deck.find(card => card.id === saved.id)?.name).filter(Boolean).join(" · ");
    const date = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(reading.date));
    return `
      <button class="history-item" type="button" data-history-id="${reading.id}">
        <span class="history-item-meta"><span>${reading.spread === "one" ? "Uma carta" : "Três cartas"}</span><time>${date}</time></span>
        <h3>${escapeHtml(names)}</h3>
        <p>“${escapeHtml(reading.question)}”</p>
      </button>`;
  }).join("");
}

function loadHistoryReading(id) {
  const reading = getHistory().find(item => item.id === id);
  if (!reading) return;
  state.spread = reading.spread;
  state.question = reading.question;
  state.currentHistoryId = reading.id;
  state.cards = reading.cards.map(saved => ({
    ...deck.find(card => card.id === saved.id),
    isReversed: saved.isReversed ?? saved.reversed ?? false,
    position: saved.position,
    revealed: true
  }));
  state.revealed = state.cards.length;
  closeHistory();
  document.querySelector("#reading-question").textContent = `“${state.question}”`;
  document.querySelector("#reading-title").textContent = "Uma tiragem já revelada";
  document.querySelector("#reading-instruction").textContent = "Releia a mensagem com os olhos de hoje.";
  drawArea.innerHTML = state.cards.map((card, index) => cardTemplate(card, index)).join("");
  updateRevealCounter();
  showScreen("reading");
  window.setTimeout(showInterpretation, 100);
}

function clearHistory() {
  if (!getHistory().length) return;
  if (window.confirm("Deseja apagar todas as tiragens salvas neste aparelho?")) {
    localStorage.removeItem("oraculo-history");
    renderHistory();
    showToast("Histórico limpo");
  }
}

function restart() {
  questionInput.value = "";
  questionCount.textContent = "0";
  state.currentHistoryId = null;
  updateSpread(state.spread);
  showScreen("home");
  window.setTimeout(() => questionInput.focus({ preventScroll: true }), 350);
}

async function shareReading() {
  const cardNames = state.cards.map(card => `${card.position}: ${card.name}${card.isReversed ? " (invertida)" : ""}`).join("\n");
  const text = `Minha tiragem no Oráculo\n\nPergunta: ${state.question}\n\n${cardNames}\n\nUse as cartas como um espelho para reflexão.`;
  try {
    if (navigator.share) {
      await navigator.share({ title: "Minha tiragem no Oráculo", text });
    } else {
      await navigator.clipboard.writeText(text);
      showToast("Leitura copiada");
    }
  } catch (error) {
    if (error?.name !== "AbortError") showToast("Não foi possível compartilhar");
  }
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function updateSoundButton() {
  const button = document.querySelector(".sound-button");
  const icon = document.querySelector("[data-sound-icon]");
  button.classList.toggle("is-active", state.sound);
  button.setAttribute("aria-label", state.sound ? "Desativar sons" : "Ativar sons");
  icon.textContent = state.sound ? "♪" : "×";
}

function toggleSound() {
  state.sound = !state.sound;
  localStorage.setItem("oraculo-sound", state.sound ? "on" : "off");
  updateSoundButton();
  if (state.sound) playTone(440, 0.08, "sine", 0.035);
  showToast(state.sound ? "Sons ativados" : "Sons desativados");
}

function playTone(frequency, duration = 0.1, type = "sine", volume = 0.035, delay = 0) {
  if (!state.sound) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const start = context.currentTime + delay;
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.03);
    oscillator.addEventListener("ended", () => context.close(), { once: true });
  } catch {
    // O app permanece totalmente funcional mesmo sem áudio disponível.
  }
}

function playReveal(index) {
  playTone(330 + index * 55, 0.42, "sine", 0.04);
  playTone(495 + index * 70, 0.55, "sine", 0.024, 0.08);
}

function playShuffle() {
  [220, 260, 300, 350].forEach((frequency, index) => playTone(frequency, 0.14, "triangle", 0.012, index * 0.12));
}

document.addEventListener("click", event => {
  const spread = event.target.closest("[data-spread]");
  if (spread) updateSpread(spread.dataset.spread);

  const cardButton = event.target.closest("[data-card-index]");
  if (cardButton) revealCard(Number(cardButton.dataset.cardIndex));

  const historyItem = event.target.closest("[data-history-id]");
  if (historyItem) loadHistoryReading(historyItem.dataset.historyId);

  const action = event.target.closest("[data-action]")?.dataset.action;
  const actions = {
    home: () => showScreen("home"),
    begin: beginReading,
    restart,
    history: openHistory,
    "close-history": closeHistory,
    "clear-history": clearHistory,
    sound: toggleSound,
    share: shareReading
  };
  actions[action]?.();

  if (event.target.matches("[data-drawer-backdrop]")) closeHistory();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeHistory();
});

questionInput.addEventListener("input", () => {
  questionCount.textContent = String(questionInput.value.length);
});

updateSoundButton();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
