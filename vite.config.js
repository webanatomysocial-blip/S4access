import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    outDir: 'dist',
  },
  server: {
    host: true, // Allows network access
    port: 5173, // Default Vite port
  },
});