import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://thomaspwalter.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
