import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    ssr: true,
    outDir: 'dist/server',
    rollupOptions: {
      input: resolve(__dirname, 'src/entry-server.jsx'),
      output: {
        entryFileNames: 'entry-server.js'
      }
    }
  }
})