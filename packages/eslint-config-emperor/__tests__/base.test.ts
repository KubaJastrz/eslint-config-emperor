import path from 'node:path';
import { it, expect } from 'vitest';
import { getConfigForFile } from './_utils';

it('[JS] base', async () => {
  const computedConfig = await getConfigForFile({
    baseConfig: {
      extends: [require.resolve('../base')],
    },
    targetFile: path.resolve(__dirname, 'sample/base.js'),
  });
  expect(computedConfig).toMatchSnapshot();
});

it('[TS] base', async () => {
  const computedConfig = await getConfigForFile({
    baseConfig: {
      extends: [require.resolve('../base')],
    },
    targetFile: path.resolve(__dirname, 'sample/base.ts'),
  });
  expect(computedConfig).toMatchSnapshot();
});

it('[JS] base/style', async () => {
  const computedConfig = await getConfigForFile({
    baseConfig: {
      extends: [require.resolve('../base/style')],
    },
    targetFile: path.resolve(__dirname, 'sample/base.js'),
  });
  expect(computedConfig).toMatchSnapshot();
});

it('[TS] base/style', async () => {
  const computedConfig = await getConfigForFile({
    baseConfig: {
      extends: [require.resolve('../base/style')],
    },
    targetFile: path.resolve(__dirname, 'sample/base.ts'),
  });
  expect(computedConfig).toMatchSnapshot();
});
