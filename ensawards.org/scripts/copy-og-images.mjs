import { cp, mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const sourceRoot = path.join(projectRoot, "data");
const targetRoot = path.join(projectRoot, "public", "data");
const imageExt = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const absolutePath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await walk(absolutePath);
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (!imageExt.has(ext)) {
      continue;
    }
    if (!entry.name.toLowerCase().includes("og")) {
      continue;
    }

    const relativePath = path.relative(sourceRoot, absolutePath);
    const destinationPath = path.join(targetRoot, relativePath);

    await mkdir(path.dirname(destinationPath), { recursive: true });
    await cp(absolutePath, destinationPath, { force: true });
  }
}

await walk(sourceRoot);
console.log("Copied OG images from data/ to public/data/.");
