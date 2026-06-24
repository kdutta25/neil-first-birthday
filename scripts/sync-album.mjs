import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const albumSrc = join(root, "album");
const albumDest = join(root, "public", "album");
const imageExt = /\.(jpe?g|png|webp|gif|avif)$/i;

function walk(dir) {
  const files = [];
  if (!existsSync(dir)) return files;

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.name.startsWith(".")) continue;
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }
    if (imageExt.test(entry.name)) {
      files.push(relative(albumSrc, fullPath));
    }
  }

  return files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

rmSync(albumDest, { recursive: true, force: true });
mkdirSync(albumDest, { recursive: true });

let photos = [];

if (existsSync(albumSrc)) {
  cpSync(albumSrc, albumDest, {
    recursive: true,
    filter: (src) => !src.includes("/.git"),
  });
  photos = walk(albumSrc);
}

writeFileSync(
  join(albumDest, "manifest.json"),
  JSON.stringify({ photos }, null, 2),
  "utf8",
);

console.log(
  photos.length
    ? `Synced ${photos.length} photo(s) from album/ → public/album/`
    : "No photos in album/ yet — add the submodule or drop images into album/.",
);
