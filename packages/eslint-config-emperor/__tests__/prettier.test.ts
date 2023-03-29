import path from 'node:path';
import { it, expect } from 'vitest';
import { getConfigForFile } from './_utils';

it('[JS] prettier', async () => {
  const computedConfig = await getConfigForFile({
    baseConfig: require('../prettier'),
    targetFile: path.resolve(__dirname, 'sample/base.js'),
  });
  expect(computedConfig).toMatchSnapshot();
});

it('[TS] prettier', async () => {
  const computedConfig = await getConfigForFile({
    baseConfig: require('../prettier'),
    targetFile: path.resolve(__dirname, 'sample/base.ts'),
  });
  expect(computedConfig).toMatchSnapshot();
});
