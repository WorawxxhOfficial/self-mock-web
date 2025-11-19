import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5500,
    host: true, // Listen on all network interfaces
    strictPort: true,
    open: false,
    allowedHosts: [
      'info.yourworldstudio.net',
      'localhost',
      '.localhost'
    ]
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  publicDir: 'public'
});

