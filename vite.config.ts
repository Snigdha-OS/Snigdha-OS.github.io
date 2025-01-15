import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import ViteSitemap from 'vite-plugin-sitemap';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [
      react(),
      ViteSitemap({
        hostname: process.env.VITE_SITE_URL || 'https://www.snigdhaos.org',
        outDir: './dist',
        changefreq: 'daily',
        priority: 0.7,
        }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/global.scss";`, // Import global SCSS
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'script.js',
          chunkFileNames: '[name].js',
          assetFileNames: ({ name }) => {
            if (name && name.endsWith('.css')) {
              return 'style.css';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
      terserOptions: {
        compress: {
          drop_console: isProduction, // Remove console logs in production
          drop_debugger: isProduction, // Remove debugger in production
        },
      },
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    server: {
      open: true,
      port: 5173, // Default port
      strictPort: false, // Allow using a different port if 5173 is taken
    },
    envDir: './env', // Define directory for environment variables
  };
});
