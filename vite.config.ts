import path from 'node:path'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, './src') },
  },
  build: {
    // O globo 3D (three.js) vem num chunk separado, carregado sob demanda via React.lazy.
    chunkSizeWarningLimit: 1200,
  },
  test: {
    environment: 'node',
  },
})
