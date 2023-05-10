<!-- This file is auto-generated. Do not edit it directly. -->

# react/style (ts)

## Config

| Key | Value |
| --- | --- |
| env | <code>{}</code> |
| globals | <code>{}</code> |
| noInlineConfig | <code>undefined</code> |
| parser | <code>"/@typescript-eslint/parser/dist/index.js"</code> |
| parserOptions | <code>{}</code> |
| plugins | <code>["@typescript-eslint","unicorn","react"]</code> |
| reportUnusedDisableDirectives | <code>undefined</code> |
| settings | <code>{}</code> |
| ignorePatterns | <code>[]</code> |


## Rules

| Rule | Description | Enabled | Options |
| --- | --- | --- | --- |
| [no-debugger](https://eslint.org/docs/rules/no-debugger) | Disallow the use of `debugger` | error |  |
| [no-empty](https://eslint.org/docs/rules/no-empty) | Disallow empty block statements | error |  |
| [no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class) | Disallow empty character classes in regular expressions | error |  |
| [no-empty-function](https://eslint.org/docs/rules/no-empty-function) | Disallow empty functions | error | <details><summary>Show</summary><code>{"allow":["constructors","methods","asyncMethods"]}</code></details> |
| [no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern) | Disallow empty destructuring patterns | error |  |
| [no-empty-static-block](https://eslint.org/docs/rules/no-empty-static-block) | Disallow empty static blocks | error |  |
| [no-eval](https://eslint.org/docs/rules/no-eval) | Disallow the use of `eval()` | error |  |
| [no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast) | Disallow unnecessary boolean casts | error |  |
| [no-implicit-coercion](https://eslint.org/docs/rules/no-implicit-coercion) | Disallow shorthand type conversions | error |  |
| [no-implied-eval](https://eslint.org/docs/rules/no-implied-eval) | Disallow the use of `eval()`-like methods | off |  |
| [no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations) | Disallow variable or `function` declarations in nested blocks | error |  |
| [no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace) | Disallow irregular whitespace | error |  |
| [no-labels](https://eslint.org/docs/rules/no-labels) | Disallow labeled statements | error |  |
| [no-multi-assign](https://eslint.org/docs/rules/no-multi-assign) | Disallow use of chained assignment expressions | error |  |
| [no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces) | Disallow multiple spaces in regular expressions | error |  |
| [no-return-assign](https://eslint.org/docs/rules/no-return-assign) | Disallow assignment operators in `return` statements | error |  |
| [no-sequences](https://eslint.org/docs/rules/no-sequences) | Disallow comma operators | error |  |
| [no-throw-literal](https://eslint.org/docs/rules/no-throw-literal) | Disallow throwing literals as exceptions | off |  |
| [no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions) | Disallow unused expressions | error |  |
| [no-useless-backreference](https://eslint.org/docs/rules/no-useless-backreference) | Disallow useless backreferences in regular expressions | error |  |
| [no-useless-catch](https://eslint.org/docs/rules/no-useless-catch) | Disallow unnecessary `catch` clauses | error |  |
| [no-useless-concat](https://eslint.org/docs/rules/no-useless-concat) | Disallow unnecessary concatenation of literals or template literals | error |  |
| [no-useless-escape](https://eslint.org/docs/rules/no-useless-escape) | Disallow unnecessary escape characters | error |  |
| [no-useless-rename](https://eslint.org/docs/rules/no-useless-rename) | Disallow renaming import, export, and destructured assignments to the same name | error |  |
| [no-useless-return](https://eslint.org/docs/rules/no-useless-return) | Disallow redundant return statements | error |  |
| [no-var](https://eslint.org/docs/rules/no-var) | Require `let` or `const` instead of `var` | error |  |
| [no-void](https://eslint.org/docs/rules/no-void) | Disallow `void` operators | error |  |
| [object-shorthand](https://eslint.org/docs/rules/object-shorthand) | Require or disallow method and property shorthand syntax for object literals | error | <details><summary>Show</summary><code>"always"</code></details> |
| [one-var](https://eslint.org/docs/rules/one-var) | Enforce variables to be declared either together or separately in functions | error | <details><summary>Show</summary><code>"never"</code></details> |
| [prefer-const](https://eslint.org/docs/rules/prefer-const) | Require `const` declarations for variables that are never reassigned after declared | error |  |
| [prefer-promise-reject-errors](https://eslint.org/docs/rules/prefer-promise-reject-errors) | Require using Error objects as Promise rejection reasons | error |  |
| [yoda](https://eslint.org/docs/rules/yoda) | Require or disallow "Yoda" conditions | error |  |
| [@typescript-eslint/adjacent-overload-signatures](https://typescript-eslint.io/rules/adjacent-overload-signatures) | Require that function overload signatures be consecutive | error |  |
| [@typescript-eslint/ban-ts-comment](https://typescript-eslint.io/rules/ban-ts-comment) | Disallow `@ts-<directive>` comments or require descriptions after directives | error | <details><summary>Show</summary><code>{"ts-expect-error":"allow-with-description","ts-ignore":true,"ts-nocheck":true,"ts-check":false}</code></details> |
| [@typescript-eslint/consistent-type-exports](https://typescript-eslint.io/rules/consistent-type-exports) | Enforce consistent usage of type exports | error |  |
| [@typescript-eslint/no-duplicate-type-constituents](https://typescript-eslint.io/rules/no-duplicate-type-constituents) | Disallow duplicate constituents of union or intersection types | error |  |
| [@typescript-eslint/no-extra-non-null-assertion](https://typescript-eslint.io/rules/no-extra-non-null-assertion) | Disallow extra non-null assertions | error |  |
| [@typescript-eslint/no-implied-eval](https://typescript-eslint.io/rules/no-implied-eval) | Disallow the use of `eval()`-like methods | error |  |
| [@typescript-eslint/no-inferrable-types](https://typescript-eslint.io/rules/no-inferrable-types) | Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean | error |  |
| [@typescript-eslint/no-non-null-asserted-nullish-coalescing](https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing) | Disallow non-null assertions in the left operand of a nullish coalescing operator | error |  |
| [@typescript-eslint/no-non-null-asserted-optional-chain](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain) | Disallow non-null assertions after an optional chain expression | error |  |
| [@typescript-eslint/no-redundant-type-constituents](https://typescript-eslint.io/rules/no-redundant-type-constituents) | Disallow members of unions and intersections that do nothing or override type information | error |  |
| [@typescript-eslint/no-throw-literal](https://typescript-eslint.io/rules/no-throw-literal) | Disallow throwing literals as exceptions | error |  |
| [@typescript-eslint/no-unnecessary-type-assertion](https://typescript-eslint.io/rules/no-unnecessary-type-assertion) | Disallow type assertions that do not change the type of an expression | error |  |
| [@typescript-eslint/non-nullable-type-assertion-style](https://typescript-eslint.io/rules/non-nullable-type-assertion-style) | Enforce non-null assertions over explicit type casts | error |  |
| [@typescript-eslint/prefer-as-const](https://typescript-eslint.io/rules/prefer-as-const) | Enforce the use of `as const` over literal type | error |  |
| [@typescript-eslint/prefer-namespace-keyword](https://typescript-eslint.io/rules/prefer-namespace-keyword) | Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules | error |  |
| [@typescript-eslint/prefer-optional-chain](https://typescript-eslint.io/rules/prefer-optional-chain) | Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects | error |  |
| [@typescript-eslint/prefer-ts-expect-error](https://typescript-eslint.io/rules/prefer-ts-expect-error) | Enforce using `@ts-expect-error` over `@ts-ignore` | error |  |
| [react/jsx-curly-brace-presence](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-brace-presence.md) | Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes | error | <details><summary>Show</summary><code>{"props":"never","children":"never","propElementValues":"always"}</code></details> |
| [react/no-children-prop](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-children-prop.md) | Disallow passing of children as props | error |  |
| [unicorn/error-message](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/error-message.md) | Enforce passing a `message` value when creating a built-in error. | error |  |
| [unicorn/new-for-builtins](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/new-for-builtins.md) | Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`. | error |  |
| [unicorn/no-array-method-this-argument](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-array-method-this-argument.md) | Disallow using the `this` argument in array methods. | error |  |
| [unicorn/no-useless-fallback-in-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-useless-fallback-in-spread.md) | Disallow useless fallback when spreading in object literals. | error |  |
| [unicorn/no-useless-promise-resolve-reject](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-useless-promise-resolve-reject.md) | Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks | error |  |
| [unicorn/no-useless-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-useless-spread.md) | Disallow unnecessary spread. | error |  |
| [unicorn/no-useless-switch-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-useless-switch-case.md) | Disallow useless case in switch statements. | error |  |
| [unicorn/prefer-prototype-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-prototype-methods.md) | Prefer borrowing methods from the prototype instead of the instance. | error |  |
| [unicorn/require-array-join-separator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/require-array-join-separator.md) | Enforce using the separator argument with `Array#join()`. | error |  |
| [unicorn/require-number-to-fixed-digits-argument](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/require-number-to-fixed-digits-argument.md) | Enforce using the digits argument with `Number#toFixed()`. | error |  |
