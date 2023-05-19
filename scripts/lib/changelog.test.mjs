// @ts-check

import { expect, test } from 'vitest';
import { compareSnapshots, createChangelog } from './changelog.cjs';

test('no changes', () => {
	const changelog = compareSnapshots(
		[{ label: 'preset-a', config: { rules: { 'rule/a': 'warn' } } }],
		[{ label: 'preset-a', config: { rules: { 'rule/a': 'warn' } } }],
	);
	expect(createChangelog(changelog)).toMatchInlineSnapshot(`
		"### Rule Changes
		No rule changes in this release
		"
	`);
});

test('no changes 2', () => {
	const changelog = compareSnapshots(
		[
			{ label: 'preset-a', config: { rules: { 'rule/a': 'warn' } } },
			{ label: 'preset-b', config: { rules: { 'rule/a': 'off' } } },
		],
		[
			{ label: 'preset-a', config: { rules: { 'rule/a': 'warn' } } },
			{ label: 'preset-b', config: { rules: { 'rule/a': 'off' } } },
		],
	);
	expect(createChangelog(changelog)).toMatchInlineSnapshot(`
		"### Rule Changes
		No rule changes in this release
		"
	`);
});

test('added rule', () => {
	const changelog = compareSnapshots(
		[{ label: 'preset-a', config: { rules: {} } }],
		[{ label: 'preset-a', config: { rules: { 'rule/a': 'warn' } } }],
	);
	expect(createChangelog(changelog)).toMatchInlineSnapshot(`
		"### Rule Changes
		* [\`rule/a\`](https://kubajastrz.github.io/eslint-config-emperor/plugin/rule/#a)
		  * Added to:
		    * **preset-a** as \`\\"warn\\"\`
		"
	`);
});

test('changed rule', () => {
	const changelog = compareSnapshots(
		[{ label: 'preset-a', config: { rules: { 'rule/a': 'error' } } }],
		[{ label: 'preset-a', config: { rules: { 'rule/a': 'warn' } } }],
	);
	expect(createChangelog(changelog)).toMatchInlineSnapshot(`
		"### Rule Changes
		* [\`rule/a\`](https://kubajastrz.github.io/eslint-config-emperor/plugin/rule/#a)
		  * Changed in:
		    * **preset-a** from \`\\"error\\"\` to \`\\"warn\\"\`
		"
	`);
});

test('removed rule', () => {
	const changelog = compareSnapshots(
		[{ label: 'preset-a', config: { rules: { 'rule/a': 'error' } } }],
		[{ label: 'preset-a', config: { rules: {} } }],
	);
	expect(createChangelog(changelog)).toMatchInlineSnapshot(`
		"### Rule Changes
		* [\`rule/a\`](https://kubajastrz.github.io/eslint-config-emperor/plugin/rule/#a)
		  * Removed from: **preset-a**
		"
	`);
});

test('moved rule', () => {
	const changelog = compareSnapshots(
		[{ label: 'preset-a', config: { rules: { 'rule/a': 'error' } } }],
		[{ label: 'preset-b', config: { rules: { 'rule/a': 'error' } } }],
	);
	expect(createChangelog(changelog)).toMatchInlineSnapshot(`
		"### Rule Changes
		* [\`rule/a\`](https://kubajastrz.github.io/eslint-config-emperor/plugin/rule/#a)
		  * Removed from: **preset-a**
		  * Added to:
		    * **preset-b** as \`\\"error\\"\`
		"
	`);
});

test('kitchen sink', () => {
	const changelog = compareSnapshots(
		[
			{ label: 'preset-a', config: { rules: { 'rule/a': 'error', 'rule/d': 'warn' } } },
			{ label: 'preset-b', config: { rules: { 'rule/a': 'error', 'rule/b': 'error' } } },
			{ label: 'preset-c', config: { rules: { 'rule/c': 'error', 'rule/e': 'off' } } },
		],
		[
			{
				label: 'preset-a',
				config: { rules: { 'rule/a': 'error', 'rule/c': 'error', 'rule/d': 'off' } },
			},
			{ label: 'preset-b', config: { rules: { 'rule/b': 'error', 'rule/c': 'error' } } },
			{ label: 'preset-c', config: { rules: { 'rule/a': 'warn', 'rule/f': 'off' } } },
		],
	);
	expect(createChangelog(changelog)).toMatchInlineSnapshot(`
		"### Rule Changes
		* [\`rule/a\`](https://kubajastrz.github.io/eslint-config-emperor/plugin/rule/#a)
		  * Removed from: **preset-b**
		  * Added to:
		    * **preset-c** as \`\\"warn\\"\`
		* [\`rule/c\`](https://kubajastrz.github.io/eslint-config-emperor/plugin/rule/#c)
		  * Removed from: **preset-c**
		  * Added to:
		    * **preset-a** as \`\\"error\\"\`
		    * **preset-b** as \`\\"error\\"\`
		* [\`rule/d\`](https://kubajastrz.github.io/eslint-config-emperor/plugin/rule/#d)
		  * Changed in:
		    * **preset-a** from \`\\"warn\\"\` to \`\\"off\\"\`
		* [\`rule/e\`](https://kubajastrz.github.io/eslint-config-emperor/plugin/rule/#e)
		  * Removed from: **preset-c**
		* [\`rule/f\`](https://kubajastrz.github.io/eslint-config-emperor/plugin/rule/#f)
		  * Added to:
		    * **preset-c** as \`\\"off\\"\`
		"
	`);
});
