// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://seedbkkchurch.github.io',
  base: 'qr-code-seed',
  integrations: [react()]
});