import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hawzz.github.io',
  base: './',
  output: 'static',
  outDir: './docs',
  build: {
    assets: '_astro'
  }
});
