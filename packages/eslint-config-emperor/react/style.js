module.exports = {
  extends: [require.resolve('../base/style.js')],
  plugins: ['react'],
  rules: {
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never',
        propElementValues: 'always',
      },
    ],
    'react/jsx-no-useless-fragment': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    'react/no-children-prop': 'error',
  },
};
