import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000 // Set this to your preferred limit in KB
  },
  base: '/casemixwebapp/', // Add this line
})
