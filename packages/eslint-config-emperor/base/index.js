// See https://github.com/microsoft/rushstack/blob/main/eslint/eslint-config/README.md
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [require.resolve('./errors.js'), require.resolve('./imports.js')],
  parser: '@typescript-eslint/parser',
};
