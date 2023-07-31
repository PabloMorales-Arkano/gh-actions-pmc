import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://pablomorales-arkano.github.io/gh-actions-pmc/',
  plugins: [react()],
})
