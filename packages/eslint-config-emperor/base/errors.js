/**
 * Native ESLint rules
 * @see https://eslint.org/docs/rules/
 */
const eslint = {
  // Enforce `return` in Array.prototype method callbacks
  'array-callback-return': 'error',

  // Require `super()` calls in constructors
  'constructor-super': 'error',

  // Require the use of `===` and `!==`
  eqeqeq: 'error',

  // Enforce `return` statements in getters
  'getter-return': 'error',

  // Disallow using an async function as a Promise executor
  'no-async-promise-executor': 'error',

  // Disallow the use of `arguments.caller` or `arguments.callee`
  'no-caller': 'error',

  // Disallow lexical declarations in case clauses
  'no-case-declarations': 'error',

  // Disallow reassigning class members
  'no-class-assign': 'error',

  // Disallow comparing against `-0`
  'no-compare-neg-zero': 'error',

  // Disallow assignment operators in conditional expressions
  'no-cond-assign': 'error',

  // Disallow reassigning `const` variables
  'no-const-assign': 'error',

  // Disallow returning value from constructor
  'no-constructor-return': 'error',

  // Disallow control characters in regular expressions
  'no-control-regex': 'error',

  // Disallow deleting variables
  'no-delete-var': 'error',

  // Disallow duplicate arguments in `function` definitions
  'no-dupe-args': 'error',

  // Disallow duplicate class members
  'no-dupe-class-members': 'error',

  // Disallow duplicate conditions in `if-else-if` chains
  'no-dupe-else-if': 'error',

  // Disallow duplicate keys in object literals
  'no-dupe-keys': 'error',

  // Disallow duplicate case labels
  'no-duplicate-case': 'error',

  // Disallow reassigning exceptions in `catch` clauses
  'no-ex-assign': 'error',

  // Disallow extending native types
  'no-extend-native': 'error',

  // Disallow fallthrough of `case` statements
  'no-fallthrough': 'error',

  // Disallow reassigning `function` declarations
  'no-func-assign': 'error',

  // Disallow assignments to native objects or read-only global variables
  'no-global-assign': 'error',

  // Disallow assigning to imported bindings
  'no-import-assign': 'error',

  // Disallow invalid regular expression strings in `RegExp` constructors
  'no-invalid-regexp': 'error',

  // Disallow use of `this` in contexts where `this` is not allowed
  'no-invalid-this': 'error',

  // Disallow literal numbers that lose precision
  'no-loss-of-precision': 'error',

  // Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
  'no-new-wrappers': 'error',

  // Disallow `\8` and `\9` escape sequences in string literals
  'no-nonoctal-decimal-escape': 'error',

  // Disallow calling global object properties as functions
  'no-obj-calls': 'error',

  // Disallow returning values from Promise executor functions
  'no-promise-executor-return': 'error',

  // Disallow the use of the `__proto__` property
  'no-proto': 'error',

  // Disallow calling some `Object.prototype` methods directly on objects
  'no-prototype-builtins': 'error',

  // Disallow assignments where both sides are exactly the same
  'no-self-assign': 'error',

  // Disallow comparisons where both sides are exactly the same
  'no-self-compare': 'error',

  // Disallow returning values from setters
  'no-setter-return': 'error',

  // Disallow identifiers from shadowing restricted names
  'no-shadow-restricted-names': 'error',

  // Disallow sparse arrays ([1,,2])
  'no-sparse-arrays': 'error',

  // Disallow `this`/`super` before calling `super()` in constructors
  'no-this-before-super': 'error',

  // Disallow the use of undeclared variables unless mentioned in `/*global */` comments
  'no-undef': 'error',

  // Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
  'no-unreachable': 'error',

  // Disallow control flow statements in `finally` blocks
  'no-unsafe-finally': 'error',

  // Disallow negating the left operand of relational operators
  'no-unsafe-negation': 'error',

  // Disallow use of optional chaining in contexts where the `undefined` value is not allowed
  'no-unsafe-optional-chaining': 'error',

  // Disallow the use of `with` statements
  'no-with': 'error',

  // Enforce the consistent use of the radix argument when using `parseInt()`
  radix: 'error',

  // Require calls to `isNaN()` when checking for `NaN`
  'use-isnan': 'error',

  // Enforce comparing `typeof` expressions against valid strings
  'valid-typeof': 'error',
};

/**
 * Unicorn rules
 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/tree/main/docs/rules
 */
const unicorn = {
  // Enforce correct `Error` subclassing
  'unicorn/custom-error-definition': 'error',

  // Require Array.isArray() instead of instanceof Array
  'unicorn/no-instanceof-array': 'error',

  // Prevent calling EventTarget#removeEventListener() with the result of an expression
  'unicorn/no-invalid-remove-event-listener': 'error',
};

/**
 * TypeScript ESLint rules
 * @see https://typescript-eslint.io/rules/
 */
const typescriptEslint = {
  // Disallow awaiting a value that is not a Thenable
  '@typescript-eslint/await-thenable': 'error',

  // Disallow duplicate enum member values
  '@typescript-eslint/no-duplicate-enum-values': 'error',

  // Require Promise-like statements to be handled appropriately
  '@typescript-eslint/no-floating-promises': 'error',

  // Disallow iterating over an array with a for-in loop
  '@typescript-eslint/no-for-in-array': 'error',

  // Disallow Promises in places not designed to handle them
  '@typescript-eslint/no-misused-promises': 'error',

  // Disallow TypeScript namespaces
  '@typescript-eslint/no-namespace': 'error',

  // Disallow unnecessary constraints on generic types
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',

  // Disallow calling a function with a value with type `any`
  '@typescript-eslint/no-unsafe-argument': 'error',

  // Disallow assigning a value with type `any` to variables and properties
  '@typescript-eslint/no-unsafe-assignment': 'error',

  // Disallow calling a value with type `any`
  '@typescript-eslint/no-unsafe-call': 'error',

  // Disallow unsafe declaration merging
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',

  // Disallow member access on a value with type `any`
  '@typescript-eslint/no-unsafe-member-access': 'error',

  // Disallow returning a value with type `any` from a function
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
