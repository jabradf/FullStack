import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://jabradf.github.io/02%20React/e-plantShopping/",
  plugins: [react()],
})
