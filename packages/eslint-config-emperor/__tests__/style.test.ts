import path from 'node:path';
import { it, expect } from 'vitest';
import { getConfigForFile } from './_utils';

it('[JS] style', async () => {
  const computedConfig = await getConfigForFile({
    baseConfig: {
      extends: [require.resolve('../style')],
    },
    targetFile: path.resolve(__dirname, 'sample/base.js'),
  });
  expect(computedConfig).toMatchSnapshot();
});

it('[TS] style', async () => {
  const computedConfig = await getConfigForFile({
    baseConfig: {
      extends: [require.resolve('../style')],
    },
    targetFile: path.resolve(__dirname, 'sample/base.ts'),
  });
  expect(computedConfig).toMatchSnapshot();
});
