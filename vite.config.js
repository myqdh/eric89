import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [react(), tailwindcss()],
  plugins: [react()],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        brand: resolve(__dirname, "brand.html"),
      },
    },
  },
});