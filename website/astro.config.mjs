import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: `https://kubajastrz.github.io`,
  base: '/eslint-config-emperor',
  vite: {
    optimizeDeps: {
      exclude: ['eslint-plugin-import'],
      include: [
        'eslint-plugin-jsx-a11y',
        'eslint-plugin-prettier',
        'eslint-plugin-react',
        'eslint-plugin-unicorn',
      ],
    },
  },
});
