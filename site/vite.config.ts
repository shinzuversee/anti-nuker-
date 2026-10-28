import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Chemins relatifs : le site fonctionne quel que soit l'hébergeur ou le sous-dossier.
  base: './',
  plugins: [react(), tailwindcss()],
})
