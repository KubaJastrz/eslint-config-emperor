<h1 align="center">ESLint Config Emperor</h1>

<p align="center">Curated ESLint config for React and TypeScript.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/eslint-config-emperor"><img src="https://img.shields.io/npm/v/eslint-config-emperor.svg?style=flat" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/eslint-config-emperor"><img src="https://img.shields.io/npm/dm/eslint-config-emperor.svg?style=flat" alt="NPM Downloads" /></a>
  <a href="https://github.com/KubaJastrz/eslint-config-emperor/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-success?style=flat" alt="License MIT" /></a>
</p>

<br />
<br />

## Installation

```sh
npm install --save-dev eslint-config-emperor \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-prettier \
  eslint-plugin-import \
  eslint-plugin-jsx-a11y \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks
```

## Usage

### Entry points

#### Vanilla JS/TS

```js
module.exports = {
  extends: [
    // Base rules for regular JS/TS, only catching potential errors and code smells.
    'emperor',
    // Optional code style rules, aiming for best practices.
    'emperor/style',
  ],
  parserOptions: {
    // Required for TypeScript.
    project: './tsconfig.json',
  },
};
```

#### React

```js
module.exports = {
  extends: [
    // Base error-catching and a11y rules for React. Already includes Base rules.
    'emperor/react',
    // Optional code style rules, aiming for best practices.
    'emperor/react/style',
  ],
  parserOptions: {
    // Required for TypeScript.
    project: './tsconfig.json',
  },
};
```

#### Prettier

```js
module.exports = {
  extends: [
    // Optional, included for convenience if you want autoformatting.
    'emperor/prettier',
  ],
};
```
