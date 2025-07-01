import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Terioat-Industries/',  // ✅ Required for GitHub Pages
  plugins: [react()]
})
