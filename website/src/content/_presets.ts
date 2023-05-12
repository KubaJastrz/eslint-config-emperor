import type { Linter } from 'eslint';
import snapshot from '../../../packages/eslint-config-emperor/.release-snapshot.json' assert { type: 'json' };

function getConfigFromSnapshot(label: string) {
  const config = snapshot.presets.find((preset) => preset.label === label);
  if (!config) {
    throw new Error(`Could not find config ${label}`);
  }
  return config as unknown as { config: Linter.BaseConfig };
}

export type Preset = {
  name: string;
  config: Linter.BaseConfig;
  description: string;
  slug: string;
};

const presets: Preset[] = [
  {
    name: 'Base',
    config: getConfigFromSnapshot('base (ts)').config,
    description: 'Base ESLint config for all projects',
    slug: 'base',
  },
  {
    name: 'Base Style',
    config: getConfigFromSnapshot('base/style (ts)').config,
    description: 'Code style rules for all projects',
    slug: 'base/style',
  },
  {
    name: 'React',
    config: getConfigFromSnapshot('react (ts)').config,
    description: 'ESLint config for React projects',
    slug: 'react',
  },
  {
    name: 'React Style',
    config: getConfigFromSnapshot('react/style (ts)').config,
    description: 'Code style rules for React projects',
    slug: 'react/style',
  },
  {
    name: 'Prettier',
    config: getConfigFromSnapshot('prettier').config,
    description: 'Convenience config ESLint for Prettier',
    slug: 'prettier',
  },
];

export function getPresets() {
  return presets;
}

export function lookupPresetsForRule(ruleId: string) {
  return presets.filter((preset) => preset.config.rules?.[ruleId]);
}

/**
 * Prioritize ESLint rules (with no slash) over plugins (with slash)
 */
export function compareRuleKeys(a: string, b: string) {
  if (a.includes('/') && !b.includes('/')) return 1;
  if (!a.includes('/') && b.includes('/')) return -1;
  return a.localeCompare(b);
}
