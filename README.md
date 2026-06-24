# Neil's First Birthday

Photo gallery for [neilsfirstbirthday.kaustubhdutta.com/photos](https://neilsfirstbirthday.kaustubhdutta.com/photos).

## Quick start

```bash
npm install
npm start
```

Open [http://localhost:5173/photos/](http://localhost:5173/photos/).

## Photos

All birthday photos live in **`album/`** in this repo. Add, remove, or replace images there, then restart the dev server (or run a build) to refresh the gallery.

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, `.avif`

`npm start` runs `scripts/sync-album.mjs` first, which copies images from `album/` into `public/album/` and writes `manifest.json` for the gallery.

## Deploy (GitHub Pages)

```bash
npm run deploy
```

Build output:

- `dist/photos/` — the React gallery (served at `/photos/`)
- `dist/index.html` — redirects `/` → `/photos/`
- `dist/CNAME` — `neilsfirstbirthday.kaustubhdutta.com`

In GitHub → Settings → Pages, set source to the `gh-pages` branch.

**Cloudflare:** remove any blanket redirect rule on `neilsfirstbirthday.kaustubhdutta.com` so GitHub Pages can serve the site.

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Sync album + dev server |
| `npm run build` | Sync album + production build + root redirect |
| `npm run deploy` | Build and push to `gh-pages` |
