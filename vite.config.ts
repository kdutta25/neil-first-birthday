import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served at https://neilsfirstbirthday.kaustubhdutta.com/photos
export default defineConfig({
  base: "/photos/",
  plugins: [react()],
  build: {
    outDir: "dist/photos",
    emptyOutDir: true,
  },
});
