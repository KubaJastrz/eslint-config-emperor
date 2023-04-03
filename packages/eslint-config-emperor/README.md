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
npm install --save-dev eslint-config-emperor
```

```sh
yarn add --save-dev eslint-config-emperor
```

```sh
pnpm add --save-dev eslint-config-emperor
```

Dependant plugins will be installed automatically. The list includes:

- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-prettier
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-unicorn

## Usage

### Entry points

#### Vanilla JS/TS

```js
module.exports = {
  // General error-catching rules. Lightweight code style rules are included as optional.
  extends: ['emperor', 'emperor/style'],
  // Add, if you are using TypeScript:
  parserOptions: {
    project: './tsconfig.json',
  },
  // Add, if you are using Node.js:
  env: {
    node: true,
  },
};
```

#### React

```js
module.exports = {
  // General error-catching rules. Already includes regular JS/TS rules.
  // Lightweight code style rules are included as optional.
  extends: ['emperor/react', 'emperor/react/style'],
  // Add, if you are using TypeScript:
  parserOptions: {
    project: './tsconfig.json',
  },
  // Add, if you are using Node.js:
  env: {
    node: true,
  },
};
```

Integrating with Next.js:

_TODO_

Integrating with Remix:

_TODO_

#### Prettier

Optional Prettier integration.

```js
module.exports = {
  extends: ['emperor/prettier'],
};
```

If you are not using Prettier, take a look at [all available stylistic rules](https://github.com/prettier/eslint-config-prettier/blob/main/index.js) to customize on your own.
