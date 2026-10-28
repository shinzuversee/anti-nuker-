// Construit une version d'aperçu du site, entièrement dans le navigateur : npm run build:preview
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const r = (p: string) => path.resolve(__dirname, p);

export default defineConfig({
  root: r("preview"),
  base: "./",
  envDir: r("."),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: "@tanstack/react-start/server", replacement: r("preview/stubs/react-start.ts") },
      { find: /^@tanstack\/react-start$/, replacement: r("preview/stubs/react-start.ts") },
      { find: "@/lib/stripe.server", replacement: r("preview/stubs/stripe-server.ts") },
      { find: "@", replacement: r("src") },
    ],
  },
  build: {
    outDir: r("dist-preview"),
    emptyOutDir: true,
  },
});
