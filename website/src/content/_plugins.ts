import type { Rule } from 'eslint';
import { builtinRules } from 'eslint/use-at-your-own-risk';

export type Plugin = {
  name: string;
  rules: Record<string, Rule.RuleModule>;
  url: string;
};

const plugins: Plugin[] = [
  {
    name: 'eslint',
    rules: Object.fromEntries(builtinRules.entries()),
    url: 'https://eslint.org/docs/rules/',
  },
  {
    name: '@typescript-eslint',
    // @ts-ignore
    rules: (await import('@typescript-eslint/eslint-plugin')).rules,
    url: 'https://typescript-eslint.io/rules/',
  },
  {
    name: 'import',
    // @ts-ignore
    rules: (await import('eslint-plugin-import')).rules,
    url: 'https://github.com/import-js/eslint-plugin-import',
  },
  {
    name: 'jsx-a11y',
    // @ts-ignore
    rules: (await import('eslint-plugin-jsx-a11y')).rules,
    url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y',
  },
  {
    name: 'prettier',
    // @ts-ignore
    rules: (await import('eslint-plugin-prettier')).rules,
    url: 'https://github.com/prettier/eslint-plugin-prettier',
  },
  {
    name: 'react',
    // @ts-ignore
    rules: (await import('eslint-plugin-react')).rules,
    url: 'https://github.com/jsx-eslint/eslint-plugin-react',
  },
  {
    name: 'react-hooks',
    // @ts-ignore
    rules: (await import('eslint-plugin-react-hooks')).rules,
    url: 'https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks',
  },
  {
    name: 'unicorn',
    // @ts-ignore
    rules: (await import('eslint-plugin-unicorn')).rules,
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn',
  },
];

export function getPlugins() {
  return plugins;
}
