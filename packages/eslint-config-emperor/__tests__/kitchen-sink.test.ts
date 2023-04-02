import path from 'node:path';
import { it, expect } from 'vitest';
import { getConfigForFile } from './_utils';

it('[JS] kitchen sink', async () => {
  const computedConfig = await getConfigForFile({
    baseConfig: {
      extends: [require.resolve('../react'), require.resolve('../react/style'), require.resolve('../prettier')],
    },
    targetFile: path.resolve(__dirname, 'sample/react.js'),
  });
  expect(computedConfig).toMatchSnapshot();
});

it('[TS] kitchen sink', async () => {
  const computedConfig = await getConfigForFile({
    baseConfig: {
      extends: [require.resolve('../react'), require.resolve('../react/style'), require.resolve('../prettier')],
    },
    targetFile: path.resolve(__dirname, 'sample/react.tsx'),
  });
  expect(computedConfig).toMatchSnapshot();
});
