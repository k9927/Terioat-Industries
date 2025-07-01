import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// defineConfig can accept a function to get mode
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/Terioat-Industries/' : '/',
  plugins: [react()]
}));
