import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'public', // tells Vite to start from /public
  build: {
    outDir: '../dist', // output goes one level up, into /dist
  },
  plugins: [react()],
  server: {
    port: 5173,
  },
})
