import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL(".", import.meta.url));
const [html, css, script] = await Promise.all([
  readFile(join(root, "index.html"), "utf8"),
  readFile(join(root, "styles.css"), "utf8"),
  readFile(join(root, "app.js"), "utf8")
]);

let bundled = html
  .replace(/\s*<link rel="manifest"[^>]+>/, "")
  .replace(/\s*<link rel="icon"[^>]+>/, "")
  .replace('<link rel="stylesheet" href="styles.css" />', `<style>\n${css}\n</style>`)
  .replace('<script src="app.js" defer></script>', `<script>\n${script}\n</script>`);

const cardDirectory = join(root, "assets", "cards-webp");
const cardFiles = (await readdir(cardDirectory)).filter(file => file.endsWith(".webp")).sort();

for (const file of cardFiles) {
  const bytes = await readFile(join(cardDirectory, file));
  const dataUrl = `data:image/webp;base64,${bytes.toString("base64")}`;
  bundled = bundled.replaceAll(`assets/cards-webp/${file}`, dataUrl);
}

const destination = join(root, "dist");
await mkdir(destination, { recursive: true });
await writeFile(join(destination, "Oraculo-Tarot.html"), bundled, "utf8");

console.log("Aplicativo único criado em dist/Oraculo-Tarot.html");
await writeFile(join(destination, "index.html"), bundled, "utf8");
