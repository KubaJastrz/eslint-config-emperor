/**
 * Native ESLint rules
 * @see https://eslint.org/docs/rules/
 */
const eslint = {
  'array-callback-return': 'error',
  'constructor-super': 'error',
  eqeqeq: 'error',
  'getter-return': 'error',
  'no-async-promise-executor': 'error',
  'no-caller': 'error',
  'no-case-declarations': 'error',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': 'error',
  'no-const-assign': 'error',
  'no-constructor-return': 'error',
  'no-control-regex': 'error',
  'no-delete-var': 'error',
  'no-dupe-args': 'error',
  'no-dupe-class-members': 'error',
  'no-dupe-else-if': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-ex-assign': 'error',
  'no-extend-native': 'error',
  'no-fallthrough': 'error',
  'no-func-assign': 'error',
  'no-global-assign': 'error',
  'no-import-assign': 'error',
  'no-invalid-regexp': 'error',
  'no-invalid-this': 'error',
  'no-loss-of-precision': 'error',
  'no-new-wrappers': 'error',
  'no-nonoctal-decimal-escape': 'error',
  'no-obj-calls': 'error',
  'no-param-reassign': 'error',
  'no-promise-executor-return': 'error',
  'no-proto': 'error',
  'no-prototype-builtins': 'error',
  'no-self-assign': 'error',
  'no-self-compare': 'error',
  'no-setter-return': 'error',
  'no-shadow-restricted-names': 'error',
  'no-sparse-arrays': 'error',
  'no-this-before-super': 'error',
  'no-undef': 'error',
  'no-unreachable': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': 'error',
  'no-unsafe-optional-chaining': 'error',
  'no-with': 'error',
  radix: 'error',
  'use-isnan': 'error',
  'valid-typeof': 'error',
};

/**
 * Unicorn rules
 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/tree/main/docs/rules
 */
const unicorn = {
  'unicorn/custom-error-definition': 'error',
  'unicorn/no-instanceof-array': 'error',
  'unicorn/no-invalid-remove-event-listener': 'error',
};

/**
 * TypeScript ESLint rules
 * @see https://typescript-eslint.io/rules/
 */
const typescriptEslint = {
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/no-duplicate-enum-values': 'error',
  '@typescript-eslint/no-floating-promises': 'error',
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-misused-promises': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/no-unsafe-argument': 'error',
  '@typescript-eslint/no-unsafe-assignment': 'error',
  '@typescript-eslint/no-unsafe-call': 'error',
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',
  '@typescript-eslint/no-unsafe-member-access': 'error',
  '@typescript-eslint/no-unsafe-return': 'error',

  'no-dupe-class-members': 'off',
  '@typescript-eslint/no-dupe-class-members': 'error',
  'no-loss-of-precision': 'off',
  '@typescript-eslint/no-loss-of-precision': 'error',
  'no-invalid-this': 'off',
  '@typescript-eslint/no-invalid-this': 'error',
};

module.exports = {
  extends: [],
  plugins: ['unicorn', '@typescript-eslint'],
  rules: {
    ...eslint,
    ...unicorn,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
        ...typescriptEslint,
      },
    },
  ],
};
