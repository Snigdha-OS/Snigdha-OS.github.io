import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Make sure main.js is generated as part of the build
        entryFileNames: 'main.js',
        // Output CSS as a separate file (style.css)
        assetFileNames: ({ name }) => {
          if (name && name.endsWith('.css')) {
            return 'style.css'; // Ensure style.css is generated
          }
          return 'assets/[name]-[hash][extname]'; // Other assets (images, etc.)
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
