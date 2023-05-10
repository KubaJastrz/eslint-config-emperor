<!-- This file is auto-generated. Do not edit it directly. -->

# base (ts)

## Config

| Key | Value |
| --- | --- |
| env | <code>{}</code> |
| globals | <code>{}</code> |
| noInlineConfig | <code>undefined</code> |
| parser | <code>"/@typescript-eslint/parser/dist/index.js"</code> |
| parserOptions | <code>{}</code> |
| plugins | <code>["@typescript-eslint","unicorn","import"]</code> |
| reportUnusedDisableDirectives | <code>undefined</code> |
| settings | <code>{}</code> |
| ignorePatterns | <code>[]</code> |


## Rules

| Rule | Description | Enabled | Options |
| --- | --- | --- | --- |
| [array-callback-return](https://eslint.org/docs/rules/array-callback-return) | Enforce `return` statements in callbacks of array methods | error |  |
| [constructor-super](https://eslint.org/docs/rules/constructor-super) | Require `super()` calls in constructors | error |  |
| [eqeqeq](https://eslint.org/docs/rules/eqeqeq) | Require the use of `===` and `!==` | error |  |
| [getter-return](https://eslint.org/docs/rules/getter-return) | Enforce `return` statements in getters | error |  |
| [no-async-promise-executor](https://eslint.org/docs/rules/no-async-promise-executor) | Disallow using an async function as a Promise executor | error |  |
| [no-caller](https://eslint.org/docs/rules/no-caller) | Disallow the use of `arguments.caller` or `arguments.callee` | error |  |
| [no-case-declarations](https://eslint.org/docs/rules/no-case-declarations) | Disallow lexical declarations in case clauses | error |  |
| [no-class-assign](https://eslint.org/docs/rules/no-class-assign) | Disallow reassigning class members | error |  |
| [no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero) | Disallow comparing against -0 | error |  |
| [no-cond-assign](https://eslint.org/docs/rules/no-cond-assign) | Disallow assignment operators in conditional expressions | error |  |
| [no-const-assign](https://eslint.org/docs/rules/no-const-assign) | Disallow reassigning `const` variables | error |  |
| [no-constructor-return](https://eslint.org/docs/rules/no-constructor-return) | Disallow returning value from constructor | error |  |
| [no-control-regex](https://eslint.org/docs/rules/no-control-regex) | Disallow control characters in regular expressions | error |  |
| [no-delete-var](https://eslint.org/docs/rules/no-delete-var) | Disallow deleting variables | error |  |
| [no-dupe-args](https://eslint.org/docs/rules/no-dupe-args) | Disallow duplicate arguments in `function` definitions | error |  |
| [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members) | Disallow duplicate class members | off |  |
| [no-dupe-else-if](https://eslint.org/docs/rules/no-dupe-else-if) | Disallow duplicate conditions in if-else-if chains | error |  |
| [no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys) | Disallow duplicate keys in object literals | error |  |
| [no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case) | Disallow duplicate case labels | error |  |
| [no-ex-assign](https://eslint.org/docs/rules/no-ex-assign) | Disallow reassigning exceptions in `catch` clauses | error |  |
| [no-extend-native](https://eslint.org/docs/rules/no-extend-native) | Disallow extending native types | error |  |
| [no-fallthrough](https://eslint.org/docs/rules/no-fallthrough) | Disallow fallthrough of `case` statements | error |  |
| [no-func-assign](https://eslint.org/docs/rules/no-func-assign) | Disallow reassigning `function` declarations | error |  |
| [no-global-assign](https://eslint.org/docs/rules/no-global-assign) | Disallow assignments to native objects or read-only global variables | error |  |
| [no-import-assign](https://eslint.org/docs/rules/no-import-assign) | Disallow assigning to imported bindings | error |  |
| [no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp) | Disallow invalid regular expression strings in `RegExp` constructors | error |  |
| [no-invalid-this](https://eslint.org/docs/rules/no-invalid-this) | Disallow use of `this` in contexts where the value of `this` is `undefined` | off |  |
| [no-loss-of-precision](https://eslint.org/docs/rules/no-loss-of-precision) | Disallow literal numbers that lose precision | off |  |
| [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers) | Disallow `new` operators with the `String`, `Number`, and `Boolean` objects | error |  |
| [no-nonoctal-decimal-escape](https://eslint.org/docs/rules/no-nonoctal-decimal-escape) | Disallow `\8` and `\9` escape sequences in string literals | error |  |
| [no-obj-calls](https://eslint.org/docs/rules/no-obj-calls) | Disallow calling global object properties as functions | error |  |
| [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign) | Disallow reassigning `function` parameters | error |  |
| [no-promise-executor-return](https://eslint.org/docs/rules/no-promise-executor-return) | Disallow returning values from Promise executor functions | error |  |
| [no-proto](https://eslint.org/docs/rules/no-proto) | Disallow the use of the `__proto__` property | error |  |
| [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins) | Disallow calling some `Object.prototype` methods directly on objects | error |  |
| [no-self-assign](https://eslint.org/docs/rules/no-self-assign) | Disallow assignments where both sides are exactly the same | error |  |
| [no-self-compare](https://eslint.org/docs/rules/no-self-compare) | Disallow comparisons where both sides are exactly the same | error |  |
| [no-setter-return](https://eslint.org/docs/rules/no-setter-return) | Disallow returning values from setters | error |  |
| [no-shadow-restricted-names](https://eslint.org/docs/rules/no-shadow-restricted-names) | Disallow identifiers from shadowing restricted names | error |  |
| [no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays) | Disallow sparse arrays | error |  |
| [no-this-before-super](https://eslint.org/docs/rules/no-this-before-super) | Disallow `this`/`super` before calling `super()` in constructors | error |  |
| [no-undef](https://eslint.org/docs/rules/no-undef) | Disallow the use of undeclared variables unless mentioned in `/*global */` comments | off |  |
| [no-unreachable](https://eslint.org/docs/rules/no-unreachable) | Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements | error |  |
| [no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally) | Disallow control flow statements in `finally` blocks | error |  |
| [no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation) | Disallow negating the left operand of relational operators | error |  |
| [no-unsafe-optional-chaining](https://eslint.org/docs/rules/no-unsafe-optional-chaining) | Disallow use of optional chaining in contexts where the `undefined` value is not allowed | error |  |
| [no-with](https://eslint.org/docs/rules/no-with) | Disallow `with` statements | error |  |
| [radix](https://eslint.org/docs/rules/radix) | Enforce the consistent use of the radix argument when using `parseInt()` | error |  |
| [use-isnan](https://eslint.org/docs/rules/use-isnan) | Require calls to `isNaN()` when checking for `NaN` | error |  |
| [valid-typeof](https://eslint.org/docs/rules/valid-typeof) | Enforce comparing `typeof` expressions against valid strings | error |  |
| [@typescript-eslint/await-thenable](https://typescript-eslint.io/rules/await-thenable) | Disallow awaiting a value that is not a Thenable | error |  |
| [@typescript-eslint/consistent-type-imports](https://typescript-eslint.io/rules/consistent-type-imports) | Enforce consistent usage of type imports | error | <details><summary>Show</summary><code>{"prefer":"type-imports","fixStyle":"inline-type-imports"}</code></details> |
| [@typescript-eslint/no-dupe-class-members](https://typescript-eslint.io/rules/no-dupe-class-members) | Disallow duplicate class members | error |  |
| [@typescript-eslint/no-duplicate-enum-values](https://typescript-eslint.io/rules/no-duplicate-enum-values) | Disallow duplicate enum member values | error |  |
| [@typescript-eslint/no-floating-promises](https://typescript-eslint.io/rules/no-floating-promises) | Require Promise-like statements to be handled appropriately | error |  |
| [@typescript-eslint/no-for-in-array](https://typescript-eslint.io/rules/no-for-in-array) | Disallow iterating over an array with a for-in loop | error |  |
| [@typescript-eslint/no-invalid-this](https://typescript-eslint.io/rules/no-invalid-this) | Disallow `this` keywords outside of classes or class-like objects | error |  |
| [@typescript-eslint/no-loss-of-precision](https://typescript-eslint.io/rules/no-loss-of-precision) | Disallow literal numbers that lose precision | error |  |
| [@typescript-eslint/no-misused-promises](https://typescript-eslint.io/rules/no-misused-promises) | Disallow Promises in places not designed to handle them | error |  |
| [@typescript-eslint/no-namespace](https://typescript-eslint.io/rules/no-namespace) | Disallow TypeScript namespaces | error |  |
| [@typescript-eslint/no-unnecessary-type-constraint](https://typescript-eslint.io/rules/no-unnecessary-type-constraint) | Disallow unnecessary constraints on generic types | error |  |
| [@typescript-eslint/no-unsafe-argument](https://typescript-eslint.io/rules/no-unsafe-argument) | Disallow calling a function with a value with type `any` | error |  |
| [@typescript-eslint/no-unsafe-assignment](https://typescript-eslint.io/rules/no-unsafe-assignment) | Disallow assigning a value with type `any` to variables and properties | error |  |
| [@typescript-eslint/no-unsafe-call](https://typescript-eslint.io/rules/no-unsafe-call) | Disallow calling a value with type `any` | error |  |
| [@typescript-eslint/no-unsafe-declaration-merging](https://typescript-eslint.io/rules/no-unsafe-declaration-merging) | Disallow unsafe declaration merging | error |  |
| [@typescript-eslint/no-unsafe-member-access](https://typescript-eslint.io/rules/no-unsafe-member-access) | Disallow member access on a value with type `any` | error |  |
| [@typescript-eslint/no-unsafe-return](https://typescript-eslint.io/rules/no-unsafe-return) | Disallow returning a value with type `any` from a function | error |  |
| [import/export](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/export.md) | Forbid any invalid exports, i.e. re-export of the same name. | error |  |
| [import/newline-after-import](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/newline-after-import.md) | Enforce a newline after import statements. | error |  |
| [import/no-absolute-path](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-absolute-path.md) | Forbid import of modules using absolute paths. | error |  |
| [import/no-anonymous-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-anonymous-default-export.md) | Forbid anonymous values as default exports. | error |  |
| [import/no-cycle](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-cycle.md) | Forbid a module from importing a module with a dependency path back to itself. | error |  |
| [import/no-duplicates](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-duplicates.md) | Forbid repeated import of the same module in multiple places. | error | <details><summary>Show</summary><code>{"prefer-inline":true}</code></details> |
| [import/no-empty-named-blocks](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-empty-named-blocks.md) | Forbid empty named import blocks. | error |  |
| [import/no-extraneous-dependencies](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-extraneous-dependencies.md) | Forbid the use of extraneous packages. | error |  |
| [import/no-named-as-default](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-named-as-default.md) | Forbid use of exported name as identifier of default export. | error |  |
| [import/no-named-as-default-member](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-named-as-default-member.md) | Forbid use of exported name as property of default export. | error |  |
| [import/no-self-import](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-self-import.md) | Forbid a module from importing itself. | error |  |
| [import/no-useless-path-segments](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-useless-path-segments.md) | Forbid unnecessary path segments in import and require statements. | error | <details><summary>Show</summary><code>{"noUselessIndex":true}</code></details> |
| [unicorn/custom-error-definition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/custom-error-definition.md) | Enforce correct `Error` subclassing. | error |  |
| [unicorn/no-instanceof-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-instanceof-array.md) | Require `Array.isArray()` instead of `instanceof Array`. | error |  |
| [unicorn/no-invalid-remove-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-invalid-remove-event-listener.md) | Prevent calling `EventTarget#removeEventListener()` with the result of an expression. | error |  |
| [unicorn/prefer-export-from](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-export-from.md) | Prefer `export…from` when re-exporting. | error |  |
