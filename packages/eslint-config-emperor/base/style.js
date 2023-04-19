/**
 * Native ESLint rules
 * @see https://eslint.org/docs/rules/
 */
const eslint = {
  // Require constructor names to begin with a capital letter
  'new-cap': 'error',

  // Disallow the use of `debugger`
  'no-debugger': 'error',

  // Disallow empty block statements
  'no-empty': 'error',

  // Disallow empty character classes in regular expressions
  'no-empty-character-class': 'error',

  // Disallow empty functions
  'no-empty-function': [
    'error',
    {
      allow: ['constructors', 'methods', 'asyncMethods'],
    },
  ],

  // Disallow empty destructuring patterns
  'no-empty-pattern': 'error',

  // Disallow empty static blocks
  'no-empty-static-block': 'error',

  // Disallow the use of `eval()`
  'no-eval': 'error',

  // Disallow unnecessary boolean casts
  'no-extra-boolean-cast': 'error',

  // Disallow shorthand type conversions
  'no-implicit-coercion': 'error',

  // Disallow the use of eval()-like methods
  'no-implied-eval': 'error',

  // Disallow variable or function declarations in nested blocks
  'no-inner-declarations': 'error',

  // Disallow irregular whitespace
  'no-irregular-whitespace': 'error',

  // Disallow labeled statements
  'no-labels': 'error',

  // Disallow use of chained assignment expressions
  'no-multi-assign': 'error',

  // Disallow multiple spaces in regular expressions
  'no-regex-spaces': 'error',

  // Disallow assignment operators in `return` statements
  'no-return-assign': 'error',

  // Disallow comma operators
  'no-sequences': 'error',

  // Disallow throwing literals as exceptions
  'no-throw-literal': 'error',

  // Disallow unused expressions
  'no-unused-expressions': 'error',

  // Disallow useless backreferences in regular expressions
  'no-useless-backreference': 'error',

  // Disallow unnecessary `catch` clauses
  'no-useless-catch': 'error',

  // Disallow unnecessary concatenation of literals or template literals
  'no-useless-concat': 'error',

  // Disallow unnecessary escape characters
  'no-useless-escape': 'error',

  // Disallow renaming import, export, and destructured assignments to the same name
  'no-useless-rename': 'error',

  // Disallow redundant return statements
  'no-useless-return': 'error',

  // Require `let` or `const` instead of `var`
  'no-var': 'error',

  // Disallow `void` operators
  'no-void': 'error',

  // Require method and property shorthand syntax for object literals
  'object-shorthand': ['error', 'always'],

  // Disallow variables to be declared separately in functions
  'one-var': ['error', 'never'],

  // Require `const` declarations for variables that are never reassigned after declared
  'prefer-const': 'error',

  // Require using Error objects as Promise rejection reasons
  'prefer-promise-reject-errors': 'error',

  // Disallow "Yoda" conditions
  yoda: 'error',
};

/**
 * Unicorn rules
 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/tree/main/docs/rules
 */
const unicorn = {
  // Enforce passing a `message` value when creating a built-in error
  'unicorn/error-message': 'error',

  // Enforce the use of `new` for all builtins, except String, Number, Boolean, Symbol and BigInt
  'unicorn/new-for-builtins': 'error',

  // Disallow using the `this` argument in array methods
  'unicorn/no-array-method-this-argument': 'error',

  // Disallow useless fallback when spreading in object literals
  'unicorn/no-useless-fallback-in-spread': 'error',

  // Disallow returning/yielding Promise.resolve/reject() in async functions or promise callbacks
  'unicorn/no-useless-promise-resolve-reject': 'error',

  // Disallow unnecessary spread
  'unicorn/no-useless-spread': 'error',

  // Disallow useless case in switch statements
  'unicorn/no-useless-switch-case': 'error',

  // Prefer borrowing methods from the prototype instead of the instance
  'unicorn/prefer-prototype-methods': 'error',

  // Enforce using the separator argument with Array#join()
  'unicorn/require-array-join-separator': 'error',

  // Enforce using the digits argument with Number#toFixed()
  'unicorn/require-number-to-fixed-digits-argument': 'error',
};

/**
 * TypeScript ESLint rules
 * @see https://typescript-eslint.io/rules/
 */
const typescriptEslint = {
  // Require that function overload signatures be consecutive
  '@typescript-eslint/adjacent-overload-signatures': 'error',

  // Disallow `@ts-<directive>` comments or require descriptions after directives
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': true,
      'ts-nocheck': true,
      'ts-check': false,
    },
  ],

  // Enforce consistent usage of type exports
  '@typescript-eslint/consistent-type-exports': 'error',

  // Disallow duplicate constituents of union or intersection types
  '@typescript-eslint/no-duplicate-type-constituents': 'error',

  // Disallow extra non-null assertions
  '@typescript-eslint/no-extra-non-null-assertion': 'error',

  // Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
  '@typescript-eslint/no-inferrable-types': 'error',

  // Disallow non-null assertions in the left operand of a nullish coalescing operator
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

  // Disallow non-null assertions after an optional chain expression
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

  // Disallow members of unions and intersections that do nothing or override type information
  '@typescript-eslint/no-redundant-type-constituents': 'error',

  // Disallow type assertions that do not change the type of an expression
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',

  // Enforce non-null assertions over explicit type casts
  '@typescript-eslint/non-nullable-type-assertion-style': 'error',

  // Enforce the use of `as const` over literal type
  '@typescript-eslint/prefer-as-const': 'error',

  // Require using `namespace` keyword over module keyword to declare custom TypeScript modules
  '@typescript-eslint/prefer-namespace-keyword': 'error',

  // Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
  '@typescript-eslint/prefer-optional-chain': 'error',

  // Enforce using `@ts-expect-error` over `@ts-ignore`
  '@typescript-eslint/prefer-ts-expect-error': 'error',

  // Extensions
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
