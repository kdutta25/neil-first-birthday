import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, relative } from "node:path";
import sharp from "sharp";

const root = new URL("..", import.meta.url).pathname;
const albumSrc = join(root, "album");
const albumDest = join(root, "public", "album");
const fullDest = join(albumDest, "full");
const thumbsDest = join(albumDest, "thumbs");
const thumbCacheDir = join(root, ".cache", "album-thumbs");
const imageExt = /\.(jpe?g|png|webp|gif|avif)$/i;
const THUMB_WIDTH = 500;
const THUMB_QUALITY = 75;
const SKIP_DIRS = new Set(["full", "thumbs"]);

function resolveFullSourceDir() {
  const nestedFull = join(albumSrc, "full");
  if (existsSync(nestedFull)) {
    return nestedFull;
  }
  return albumSrc;
}

function walk(dir, sourceRoot) {
  const files = [];
  if (!existsSync(dir)) return files;

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.name.startsWith(".")) continue;

    if (entry.isDirectory()) {
      if (dir === sourceRoot && SKIP_DIRS.has(entry.name)) {
        continue;
      }
      files.push(...walk(fullPath, sourceRoot));
      continue;
    }

    if (imageExt.test(entry.name)) {
      files.push(relative(sourceRoot, fullPath));
    }
  }

  return files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

function thumbName(filename) {
  return filename.replace(/\.[^.]+$/i, ".webp");
}

function isSourceNewer(sourcePath, targetPath) {
  if (!existsSync(targetPath)) {
    return true;
  }
  return statSync(sourcePath).mtimeMs > statSync(targetPath).mtimeMs;
}

async function generateThumb(sourcePath, thumbPath) {
  mkdirSync(dirname(thumbPath), { recursive: true });
  await sharp(sourcePath)
    .rotate()
    .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
    .webp({ quality: THUMB_QUALITY })
    .toFile(thumbPath);
}

async function ensureThumb(sourcePath, photo) {
  const webp = thumbName(photo);
  const cachedThumb = join(thumbCacheDir, webp);
  const outputThumb = join(thumbsDest, webp);

  if (isSourceNewer(sourcePath, cachedThumb)) {
    await generateThumb(sourcePath, cachedThumb);
    mkdirSync(dirname(outputThumb), { recursive: true });
    cpSync(cachedThumb, outputThumb);
    return "generated";
  }

  mkdirSync(dirname(outputThumb), { recursive: true });
  cpSync(cachedThumb, outputThumb);
  return "cached";
}

async function main() {
  rmSync(albumDest, { recursive: true, force: true });
  mkdirSync(fullDest, { recursive: true });
  mkdirSync(thumbsDest, { recursive: true });
  mkdirSync(thumbCacheDir, { recursive: true });

  const fullSourceDir = resolveFullSourceDir();
  const photos = walk(fullSourceDir, fullSourceDir);

  if (photos.length === 0) {
    writeFileSync(
      join(albumDest, "manifest.json"),
      JSON.stringify({ photos }, null, 2),
      "utf8",
    );
    console.log(
      "No photos in album/ yet — add images to album/ or album/full/.",
    );
    return;
  }

  let generated = 0;
  let cached = 0;

  for (const photo of photos) {
    const sourcePath = join(fullSourceDir, photo);
    const destFullPath = join(fullDest, photo);
    mkdirSync(dirname(destFullPath), { recursive: true });
    cpSync(sourcePath, destFullPath);

    const status = await ensureThumb(sourcePath, photo);
    if (status === "generated") {
      generated += 1;
    } else {
      cached += 1;
    }
  }

  writeFileSync(
    join(albumDest, "manifest.json"),
    JSON.stringify({ photos }, null, 2),
    "utf8",
  );

  console.log(
    `Synced ${photos.length} photo(s): full → public/album/full/, thumbs → public/album/thumbs/ (${generated} generated, ${cached} from cache).`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
