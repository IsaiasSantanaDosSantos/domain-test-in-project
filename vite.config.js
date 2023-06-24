import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    // Configuração para permitir o download de arquivos
    serveStatic: {
      directory: [
        { path: '.', serve: true },
        { path: '/assets', serve: true }
      ]
    }
  }
})

// vite.config.js



