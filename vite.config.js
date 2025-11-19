import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5500,
    host: true, // Listen on all network interfaces
    strictPort: true,
    open: false
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  publicDir: 'public'
});

