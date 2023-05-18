import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [preact(), tailwind()],
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
