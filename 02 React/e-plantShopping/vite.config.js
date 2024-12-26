import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/jabradf/FullStack/blob/main/02%20React/e-plantShopping/",
  plugins: [react()],
})
