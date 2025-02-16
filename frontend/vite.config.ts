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
        target: 'http://fishkey-load-balancer-1947283239.eu-north-1.elb.amazonaws.com',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
