import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import ViteSitemap from 'vite-plugin-sitemap';
import ViteCompression from 'vite-plugin-compression'; // For file compression in production
import postcssPresetEnv from 'postcss-preset-env'; // For enabling modern PostCSS features

// Define the base path based on the deployment environment (GitHub Pages or main domain)
const isGitHubPages = process.env.VITE_DEPLOY_ENV === 'gh-pages';

export default defineConfig({
  // Base path setting for GitHub Pages and main domain
  // Use '/' for both GitHub Pages and the main domain (adjust as needed)
  base: isGitHubPages ? '/' : '/', 
  
  plugins: [
    react(), // Vite plugin for React support
    
    // Sitemap plugin to generate a sitemap.xml for SEO purposes
    ViteSitemap({
      hostname: isGitHubPages ? 'https://Snigdha-OS.github.io/' : 'https://www.snigdhaos.org', // Dynamic hostname based on deployment
      outDir: './dist', // Directory to output the sitemap
      changefreq: 'daily', // Frequency of content updates
      priority: 0.7, // Priority of the pages in the sitemap
      // lastmod: true, // Optional: Use last modification date for each URL (uncomment if needed)
    }),
    
    // Gzip compression for production build to reduce file sizes
    ViteCompression({
      algorithm: 'gzip', // Compression algorithm
      threshold: 10240, // Only compress files larger than 10KB
    }),
  ],

  resolve: {
    // Alias for easier imports from the 'src' directory
    alias: {
      '@': resolve(__dirname, './src'), // '@' is a shortcut for the 'src' folder
    },
  },

  build: {
    rollupOptions: {
      output: {
        // Entry file for the build (e.g., script.js instead of main.js)
        entryFileNames: 'script.js',
        
        // Customize asset file names (e.g., CSS and other assets)
        assetFileNames: ({ name }) => {
          if (name && name.endsWith('.css')) {
            return 'style.css'; // All CSS files will be named 'style.css'
          }
          return 'assets/[name]-[hash][extname]'; // For other assets, use hashed filenames
        },
      },
    },
    target: 'esnext', // Set the target to 'esnext' for modern JavaScript (ES modules)
  },

  // Exclude specific dependencies from being bundled by Vite
  optimizeDeps: {
    exclude: ['lucide-react'], // Prevent bundling of 'lucide-react'
  },

  css: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          stage: 2, // Enable PostCSS features up to stage 2
        }),
      ],
    },
  },

  // Configuration for Vite development server
  server: {
    open: true, // Automatically open the browser when starting the dev server
    proxy: {
      '/api': 'http://localhost:5000', // Example proxy setup for API requests during development
    },
  },

  // Extend configuration with environment variables (useful for flexibility)
  define: {
    'process.env': {
      // Provide a default API URL, which can be overridden by environment variables
      API_URL: process.env.VITE_API_URL || 'https://api.snigdhaos.org',
    },
  },
});
