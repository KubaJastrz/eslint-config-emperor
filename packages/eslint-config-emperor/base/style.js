/**
 * Native ESLint rules
 * @see https://eslint.org/docs/rules/
 */
const eslint = {
  'no-debugger': 'error',
  'no-empty': 'error',
  'no-empty-character-class': 'error',
  'no-empty-function': [
    'error',
    {
      allow: ['constructors', 'methods', 'asyncMethods'],
    },
  ],
  'no-empty-pattern': 'error',
  'no-empty-static-block': 'error',
  'no-eval': 'error',
  'no-extra-boolean-cast': 'error',
  'no-implicit-coercion': 'error',
  'no-implied-eval': 'error',
  'no-inner-declarations': 'error',
  'no-irregular-whitespace': 'error',
  'no-labels': 'error',
  'no-multi-assign': 'error',
  'no-regex-spaces': 'error',
  'no-return-assign': 'error',
  'no-sequences': 'error',
  'no-throw-literal': 'error',
  'no-unused-expressions': 'error',
  'no-useless-backreference': 'error',
  'no-useless-catch': 'error',
  'no-useless-concat': 'error',
  'no-useless-escape': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  'no-void': 'error',
  'object-shorthand': ['error', 'always'],
  'one-var': ['error', 'never'],
  'prefer-const': 'error',
  'prefer-promise-reject-errors': 'error',
  yoda: 'error',
};

/**
 * Unicorn rules
 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/tree/main/docs/rules
 */
const unicorn = {
  'unicorn/error-message': 'error',
  'unicorn/new-for-builtins': 'error',
  'unicorn/no-array-method-this-argument': 'error',
  'unicorn/no-useless-fallback-in-spread': 'error',
  'unicorn/no-useless-promise-resolve-reject': 'error',
  'unicorn/no-useless-spread': 'error',
  'unicorn/no-useless-switch-case': 'error',
  'unicorn/prefer-prototype-methods': 'error',
  'unicorn/require-array-join-separator': 'error',
  'unicorn/require-number-to-fixed-digits-argument': 'error',
};

/**
 * TypeScript ESLint rules
 * @see https://typescript-eslint.io/rules/
 */
const typescriptEslint = {
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': true,
      'ts-nocheck': true,
      'ts-check': false,
    },
  ],
  '@typescript-eslint/consistent-type-exports': 'error',
  '@typescript-eslint/no-duplicate-type-constituents': 'error',
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-inferrable-types': 'error',
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-redundant-type-constituents': 'error',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  '@typescript-eslint/non-nullable-type-assertion-style': 'error',
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/prefer-namespace-keyword': 'error',
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-ts-expect-error': 'error',

  'no-implied-eval': 'off',
  '@typescript-eslint/no-implied-eval': 'error',
  'no-throw-literal': 'off',
  '@typescript-eslint/no-throw-literal': 'error',
};

module.exports = {
  extends: [],
  parser: '@typescript-eslint/parser',
  plugins: ['unicorn', '@typescript-eslint'],
  rules: {
    ...eslint,
    ...unicorn,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        ...typescriptEslint,
      },
    },
  ],
};
