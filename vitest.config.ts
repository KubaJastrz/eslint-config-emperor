import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['packages/**/__tests__/**/*.test.[jt]s?(x)'],
    setupFiles: ['./config/snapshot-rules.ts'],
  },
});
