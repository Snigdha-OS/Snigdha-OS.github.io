import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/', // Deployment to the root directory
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // Alias for src
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude specific dependency
  },
});
