import path from 'node:path';
import { it, expect } from 'vitest';
import { getConfigForFile } from './_utils';

it('[JS] react', async () => {
  const computedConfig = await getConfigForFile({
    baseConfig: require('../react'),
    targetFile: path.resolve(__dirname, 'sample/react.js'),
  });
  expect(computedConfig).toMatchSnapshot();
});

it('[TS] react', async () => {
  const computedConfig = await getConfigForFile({
    baseConfig: require('../react'),
    targetFile: path.resolve(__dirname, 'sample/react.tsx'),
  });
  expect(computedConfig).toMatchSnapshot();
});

it('[JS] react/style', async () => {
  const computedConfig = await getConfigForFile({
    baseConfig: require('../react/style'),
    targetFile: path.resolve(__dirname, 'sample/react.js'),
  });
  expect(computedConfig).toMatchSnapshot();
});

it('[TS] react/style', async () => {
  const computedConfig = await getConfigForFile({
    baseConfig: require('../react/style'),
    targetFile: path.resolve(__dirname, 'sample/react.tsx'),
  });
  expect(computedConfig).toMatchSnapshot();
});
