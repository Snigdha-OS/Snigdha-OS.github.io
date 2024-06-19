import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://Snigdha-OS.github.io',
  base: 'Snigdha-OS.github.io',
  integrations: [starlight({
    title: 'SNIGDHA OS',
    customCss: [
      // Path to Snigdha OS Custom CSS Files
      './src/styles/custom.css',
    ],
    social: {
      github: 'https://github.com/Snigdha-OS/',
      facebook: 'https://facebook.com/',
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        link: '/guides/example/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), tailwind()]
});