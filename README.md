# Neil's First Birthday

Photo gallery for [neilsfirstbirthday.kaustubhdutta.com/photos](https://neilsfirstbirthday.kaustubhdutta.com/photos).

A single-page birthday photo gallery with a vintage “Little Explorer” theme, light/dark mode, multilingual UI, and a responsive grid with lightbox viewer.

## Tech stack

| Layer | Technology |
|-------|------------|
| UI | React 19 |
| Language | TypeScript |
| Build tool | Vite 6 |
| Styling | styled-components + CSS variables |
| Icons | react-icons |
| Hosting | GitHub Pages (`gh-pages`) |

## Dependencies

### Runtime (`dependencies`)

| Package | Purpose |
|---------|---------|
| `react` / `react-dom` | UI framework |
| `styled-components` | Component styling via `styledWithConfig` |
| `@emotion/is-prop-valid` | Filters invalid DOM props in styled components |
| `react-icons` | Footer social icons (YouTube, Instagram, GitHub) |

### Development (`devDependencies`)

| Package | Purpose |
|---------|---------|
| `vite` | Dev server and production bundler |
| `@vitejs/plugin-react` | React Fast Refresh + JSX transform |
| `typescript` | Type checking |
| `@types/react` / `@types/react-dom` | React TypeScript types |
| `gh-pages` | Deploy `dist/` to the `gh-pages` branch |

## Project structure

```
neil-first-birthday/
├── album/                    # Source photos (committed to git)
├── public/album/             # Generated at build time (gitignored)
├── scripts/
│   ├── sync-album.mjs        # Copies album/ → public/album/ + manifest.json
│   └── postbuild.mjs         # Writes dist/index.html root redirect + CNAME
├── src/
│   ├── assets/
│   │   └── hero.png          # Hero banner image
│   ├── components/
│   │   ├── Gallery.tsx       # Photo grid + lightbox trigger
│   │   ├── Hero.tsx          # Banner, kicker, thank-you message
│   │   ├── Lightbox.tsx      # Full-screen photo viewer
│   │   ├── PreferencesBar.tsx # Title, language + theme controls
│   │   ├── SiteFooter.tsx    # Credits, copyright, social links
│   │   └── SkyDecorations.tsx # Balloons, biplane, hot-air balloon, clouds
│   ├── constants/
│   │   └── footerLinks.ts    # YouTube, Instagram, GitHub URLs
│   ├── i18n/
│   │   ├── I18nContext.tsx   # Language provider (en / hi / pa / bn)
│   │   └── translations.ts   # UI strings for all languages
│   ├── theme/
│   │   ├── GlobalStyle.ts    # Global reset, fonts, keyframe animations
│   │   └── ThemeContext.tsx  # Light / dark theme provider
│   ├── utils/
│   │   ├── photos.ts         # Album manifest loader
│   │   └── styledWithConfig.ts # styled-components wrapper with prop filtering
│   ├── App.tsx               # Page shell
│   ├── index.css             # Light / dark CSS variables
│   └── main.tsx              # React entry point
├── CNAME                     # neilsfirstbirthday.kaustubhdutta.com
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts            # base: /photos/, outDir: dist/photos
```

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

## Features

- **Gallery** — responsive grid with lazy-loaded thumbnails and keyboard-friendly lightbox
- **i18n** — English (default), Hindi, Punjabi, Bengali
- **Theming** — light (default) and dark modes, persisted in `localStorage`
- **Sky decorations** — vintage biplane, hot-air balloon, and rising balloons
- **Footer** — credits, copyright, and links to [YouTube](https://www.youtube.com/@KausDiaries), [Instagram](https://www.instagram.com/neildutta10/), and [GitHub](https://github.com/kdutta25/neil-first-birthday)

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
| `npm run dev` | Alias for `npm start` |
| `npm run build` | Sync album + TypeScript check + production build + root redirect |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build and push to `gh-pages` |
