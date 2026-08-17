import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import vm from "node:vm";
import { webcrypto } from "node:crypto";

class FauxClassList {
  constructor() { this.values = new Set(); }
  add(...values) { values.forEach(value => this.values.add(value)); }
  remove(...values) { values.forEach(value => this.values.delete(value)); }
  toggle(value, force) {
    if (force === true) this.values.add(value);
    else if (force === false) this.values.delete(value);
    else if (this.values.has(value)) this.values.delete(value);
    else this.values.add(value);
    return this.values.has(value);
  }
}

class FauxElement {
  constructor(dataset = {}) {
    this.dataset = dataset;
    this.classList = new FauxClassList();
    this.style = {};
    this.textContent = "";
    this.value = "";
    this.hidden = false;
    this.disabled = false;
    this.innerHTML = "";
    this.attributes = new Map();
  }
  addEventListener() {}
  setAttribute(name, value) { this.attributes.set(name, String(value)); }
  focus() {}
  scrollIntoView() {}
  matches() { return false; }
  closest() { return null; }
  querySelector() { return new FauxElement(); }
}

const source = await readFile(new URL("./app.js", import.meta.url), "utf8");
const html = await readFile(new URL("./index.html", import.meta.url), "utf8");
const manifest = JSON.parse(await readFile(new URL("./manifest.webmanifest", import.meta.url), "utf8"));
const bundled = await readFile(new URL("./dist/Oraculo-Tarot.html", import.meta.url), "utf8");
const cardFiles = (await readdir(new URL("./assets/cards-webp/", import.meta.url))).filter(file => file.endsWith(".webp"));

assert.match(html, /id="question"/);
assert.match(html, /id="draw-area"/);
assert.match(html, /id="interpretation"/);
assert.equal(manifest.lang, "pt-BR");
assert.equal(manifest.display, "standalone");
assert.equal(cardFiles.length, 22);
assert.match(bundled, /<style>[\s\S]+<\/style>/);
assert.match(bundled, /<script>[\s\S]+const deck = \[/);
assert.doesNotMatch(bundled, /href="styles\.css"|src="app\.js"/);
assert.match(bundled, /data:image\/webp;base64,/);
assert.doesNotMatch(bundled, /assets\/cards-webp\//);

const screens = ["home", "shuffle", "reading"].map(screen => new FauxElement({ screen }));
const spreads = ["one", "three"].map(spread => new FauxElement({ spread }));
const elements = new Map();
[
  "#question", "#question-count", "#draw-area", "#interpretation", "#toast",
  "#shuffle-question", "#reading-question", "#reading-title", "#reading-instruction",
  "#reveal-counter", "#interpretation-content", "#reflection-question",
  "#interpretation-title", "#history-drawer", "#history-list",
  ".sound-button", "[data-sound-icon]", "[data-drawer-backdrop]",
  "[data-action='clear-history']"
].forEach(selector => elements.set(selector, new FauxElement()));

const drawArea = elements.get("#draw-area");
drawArea.querySelector = selector => {
  if (selector === "button") return new FauxElement();
  const cardMatch = selector.match(/data-card-index="(\d+)"/);
  if (cardMatch) return new FauxElement({ cardIndex: cardMatch[1] });
  const slotMatch = selector.match(/data-card-slot="(\d+)"/);
  if (slotMatch) return new FauxElement({ cardSlot: slotMatch[1] });
  return new FauxElement();
};

const document = {
  body: new FauxElement(),
  querySelector(selector) {
    const screenMatch = selector.match(/^\[data-screen="(.+)"\]$/);
    if (screenMatch) return screens.find(screen => screen.dataset.screen === screenMatch[1]);
    return elements.get(selector) || new FauxElement();
  },
  querySelectorAll(selector) {
    if (selector === "[data-screen]") return screens;
    if (selector === "[data-spread]") return spreads;
    return [];
  },
  addEventListener() {}
};

const storage = new Map();
const localStorage = {
  getItem(key) { return storage.has(key) ? storage.get(key) : null; },
  setItem(key, value) { storage.set(key, String(value)); },
  removeItem(key) { storage.delete(key); }
};

const windowObject = {
  crypto: webcrypto,
  scrollTo() {},
  setTimeout(callback) { callback(); return 1; },
  clearTimeout() {},
  confirm() { return true; },
  addEventListener() {}
};

const context = vm.createContext({
  console,
  document,
  localStorage,
  navigator: {},
  location: { protocol: "file:" },
  window: windowObject,
  requestAnimationFrame(callback) { callback(); },
  Intl,
  Date,
  JSON,
  Math,
  Uint32Array
});

vm.runInContext(source, context, { filename: "app.js" });

assert.equal(vm.runInContext("deck.length", context), 22);
assert.equal(vm.runInContext("new Set(deck.map(card => card.id)).size", context), 22);
assert.equal(vm.runInContext("deck.every(card => card.name && card.art && card.upright && card.reversed && card.advice && card.reflection)", context), true);

elements.get("#question").value = "O que preciso compreender agora?";
vm.runInContext("beginReading()", context);
assert.equal(vm.runInContext("state.cards.length", context), 1);
assert.match(drawArea.innerHTML, /tarot-card/);
assert.match(drawArea.innerHTML, /arcana-art/);
vm.runInContext("revealCard(0)", context);
assert.equal(vm.runInContext("state.revealed", context), 1);
assert.equal(elements.get("#interpretation").hidden, false);
assert.equal(JSON.parse(storage.get("oraculo-history")).length, 1);

vm.runInContext('updateSpread("three")', context);
elements.get("#question").value = "Qual direção pede a minha atenção?";
vm.runInContext("beginReading()", context);
assert.equal(vm.runInContext("state.cards.length", context), 3);
assert.equal(vm.runInContext("new Set(state.cards.map(card => card.id)).size", context), 3);
vm.runInContext("revealCard(0); revealCard(1); revealCard(2);", context);
assert.equal(vm.runInContext("state.revealed", context), 3);
assert.equal(JSON.parse(storage.get("oraculo-history")).length, 2);

const response = await fetch("http://127.0.0.1:4173/");
assert.equal(response.status, 200);
assert.match(await response.text(), /Oráculo Tarot/);

const scriptResponse = await fetch("http://127.0.0.1:4173/app.js");
assert.equal(scriptResponse.status, 200);
assert.match(scriptResponse.headers.get("content-type") || "", /javascript/);

const bundledResponse = await fetch("http://127.0.0.1:4173/dist/Oraculo-Tarot.html");
assert.equal(bundledResponse.status, 200);
assert.match(await bundledResponse.text(), /As cartas não escolhem seu caminho/);

console.log("✓ 22 Arcanos Maiores validados");
console.log("✓ 22 ilustrações otimizadas e incorporadas");
console.log("✓ Tiragens de 1 e 3 cartas concluídas");
console.log("✓ Histórico local e interpretação validados");
console.log("✓ Aplicativo servido corretamente");
console.log("✓ Versão portátil em um único arquivo validada");
