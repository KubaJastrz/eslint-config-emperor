import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		include: ['{scripts,packages,website}/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
	},
});
