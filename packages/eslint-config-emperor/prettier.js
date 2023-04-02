// See https://github.com/microsoft/rushstack/blob/main/eslint/eslint-patch/README.md
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn',
  },
};
