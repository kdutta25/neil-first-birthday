import { copyFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const distRoot = join(root, "dist");

mkdirSync(distRoot, { recursive: true });

writeFileSync(
  join(distRoot, "index.html"),
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Neil's First Birthday</title>
  <meta http-equiv="refresh" content="0; url=/gallery/" />
  <script>window.location.replace("/gallery/");</script>
</head>
<body>
  <p>Redirecting to <a href="/gallery/">Neil's first birthday photos</a>…</p>
</body>
</html>`,
  "utf8",
);

const cname = join(root, "CNAME");
if (existsSync(cname)) {
  copyFileSync(cname, join(distRoot, "CNAME"));
}

console.log("Created dist/index.html → /gallery/ redirect");
