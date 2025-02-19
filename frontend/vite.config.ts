import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://3t2d1gmx79.execute-api.eu-north-1.amazonaws.com/dev/',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
