import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served at https://photos.neilsfirstbirthday.kaustubhdutta.com/gallery/
export default defineConfig({
  base: "/gallery/",
  plugins: [react()],
  build: {
    outDir: "dist/gallery",
    emptyOutDir: true,
  },
});
