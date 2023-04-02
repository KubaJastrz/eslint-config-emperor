/**
 * Native ESLint rules
 * @see https://eslint.org/docs/rules/
 */
const eslint = {};

module.exports = {
  extends: [],
  plugins: ['import', 'unicorn', '@typescript-eslint'],
  rules: {
    ...eslint,

    // Import
    'import/export': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-cycle': 'error',
    'import/no-duplicates': [
      'error',
      {
        'prefer-inline': true,
      },
    ],
    'import/no-empty-named-blocks': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-as-default': 'error',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],

    // Unicorn
    'unicorn/prefer-export-from': 'error',
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        // These rules are redundant in TypeScript
        'import/default': 'error',
        'import/named': 'error',
        'import/namespace': 'error',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            fixStyle: 'inline-type-imports',
          },
        ],
      },
    },
  ],
};
