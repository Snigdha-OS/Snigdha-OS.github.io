import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Correct base URL for GitHub Pages deployment
  plugins: [
    react(), 
    sitemap({
      hostname: 'https://snigdha-os.github.io', // Ensure this is your site URL
      outDir: 'dist', // Correct build output directory
      // Optional: specify other options like exclude routes or change frequency if needed
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'], // Prevent 'lucide-react' from being pre-bundled
  },
});
