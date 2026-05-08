import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  /* ===================================================
     BUILD OPTIMIZATION
     =================================================== */
  build: {
    // Target modern browsers for better compression
    target: 'esnext',

    // Code splitting configuration
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          // Vendor chunks
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-animation': ['framer-motion', 'gsap'],
          'vendor-state': ['zustand'],

          // Feature-based chunks for route splitting
          'chunk-home': ['./src/pages/HomePage.tsx'],
          'chunk-about': ['./src/pages/AboutPage.tsx'],
          'chunk-services': ['./src/pages/ServicesPage.tsx'],
          'chunk-projects': ['./src/pages/ProjectsPage.tsx'],
          'chunk-contact': ['./src/pages/ContactPage.tsx'],

          // Common components
          'chunk-common': [
            './src/components/common/LazyImage.tsx',
            './src/components/common/ScrollReveal.tsx',
            './src/components/common/AnimatedText.tsx',
          ],
        },
      },
    },

    // Minify with esbuild (faster than terser, good for modern JS)
    minify: 'esbuild',

    // Chunk size warning threshold
    chunkSizeWarningLimit: 600,

    // CSS code splitting
    cssCodeSplit: true,

    // Source maps for production debugging (optional, can be disabled for smaller bundle)
    sourcemap: false,

    // Report compressed size of final bundle
    reportCompressedSize: true,
  },

  /* ===================================================
     SERVER / PREVIEW OPTIMIZATION
     =================================================== */
  server: {
    // Enable gzip compression during dev
    middlewareMode: false,
  },

  /* ===================================================
     ASSET OPTIMIZATION
     =================================================== */
  assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.ttf', '**/*.otf'],
});
