import snapshot from '../../../packages/eslint-config-emperor/.release-snapshot.json' assert { type: 'json' };

function getConfigFromSnapshot(label: string) {
  const config = snapshot.presets.find((preset) => preset.label === label);
  if (!config) {
    throw new Error(`Could not find config ${label}`);
  }
  return config;
}

export type Preset = {
  name: string;
  configs: object[];
  description: string;
  slug: string;
};

const presets: Preset[] = [
  {
    name: 'Base',
    configs: [getConfigFromSnapshot('base (js)'), getConfigFromSnapshot('base (ts)')],
    description: 'Base ESLint config for all projects',
    slug: 'base',
  },
  {
    name: 'Base Style',
    configs: [getConfigFromSnapshot('base/style (js)'), getConfigFromSnapshot('base/style (ts)')],
    description: 'Code style rules for all projects',
    slug: 'base/style',
  },
  {
    name: 'React',
    configs: [getConfigFromSnapshot('react (js)'), getConfigFromSnapshot('react (ts)')],
    description: 'ESLint config for React projects',
    slug: 'react',
  },
  {
    name: 'React Style',
    configs: [getConfigFromSnapshot('react/style (js)'), getConfigFromSnapshot('react/style (ts)')],
    description: 'Code style rules for React projects',
    slug: 'react/style',
  },
  {
    name: 'Prettier',
    configs: [getConfigFromSnapshot('prettier')],
    description: 'Convenience config ESLint for Prettier',
    slug: 'prettier',
  },
];

export function getPresets() {
  return presets;
}
