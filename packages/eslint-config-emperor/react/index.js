module.exports = {
  extends: [
    require.resolve('../base/index.js'),
    require.resolve('./accessibility.js'),
    require.resolve('./errors.js'),
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es6: true,
  },
};
