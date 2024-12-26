import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/FullStack/02 React/e-plantShopping",
  plugins: [react()],
})
