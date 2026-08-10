import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Don't inline tiny assets — keep them as separate cacheable files
    assetsInlineLimit: 4096,
    // No source maps in production
    sourcemap: false,
    // Use Vite's default minifier (oxc in Vite 8+)
    // minify: 'esbuild' — removed, esbuild is not bundled in Vite 8
    // Split CSS per chunk for more granular caching
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Split vendor libraries into separate cacheable chunks
        manualChunks: (id) => {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'framer-motion';
          }
          if (id.includes('node_modules/react-router-dom') || id.includes('node_modules/react-router')) {
            return 'router';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'lucide';
          }
        },
      },
    },
  },
})
