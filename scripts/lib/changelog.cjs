// @ts-check

const assert = require('node:assert');

/**
 * @typedef {import('eslint').Linter.RuleEntry} RuleEntry
 *
 * @typedef {object} ChangelogEntry
 * @property {{label: string, current: RuleEntry | undefined}[]} [added]
 * @property {{label: string, current: RuleEntry | undefined, previous: RuleEntry | undefined}[]} [changed]
 * @property {string[]} [removed]
 *
 * @typedef {Record<string, ChangelogEntry>} Changelog
 */

/**
 * @param {Changelog} changelog
 * @returns {string}
 */
function createChangelog(changelog) {
	function processRules() {
		return Object.entries(changelog).map(([ruleId, entry]) => {
			const { added, changed, removed } = entry;
			const ruleChanges = [];
			if (removed) {
				ruleChanges.push(`* Removed from: ${removed.map((label) => `**${label}**`).join(', ')}`);
			}
			if (added) {
				ruleChanges.push(
					`* Added to:\n    * ${added
						.map(({ label, current }) => `**${label}** as ${formatRuleEntry(current)}`)
						.join('\n    * ')}`,
				);
			}
			if (changed) {
				ruleChanges.push(
					`* Changed in:\n    * ${changed
						.map(
							({ label, current, previous }) =>
								`**${label}** from ${formatRuleEntry(previous)} to ${formatRuleEntry(current)}`,
						)
						.join('\n    * ')}`,
				);
			}
			const ruleName = `[\`${ruleId}\`](${getDocsLink(ruleId)})`;
			return `* ${ruleName}\n  ${ruleChanges.join('\n  ')}`;
		});
	}

	const changesEntry =
		objSize(changelog) > 0 ? processRules() : ['No rule changes in this release'];
	return [`### Rule Changes`, ...changesEntry, ''].join('\n');
}

/**
 * @param {import('./config.cjs').ConfigEntry[]} previous
 * @param {import('./config.cjs').ConfigEntry[]} current
 * @returns {Changelog}
 */
function compareSnapshots(previous, current) {
	/** @type {Changelog} */
	const changelog = {};

	for (const ruleId of getAllRules(previous, current)) {
		const previousConfigs = previous.filter(
			(config) => getRuleInConfig(ruleId, config) !== undefined,
		);
		const currentConfigs = current.filter(
			(config) => getRuleInConfig(ruleId, config) !== undefined,
		);

		if (previousConfigs.length === 0 && currentConfigs.length === 0) {
			continue;
		}

		/** @type {ChangelogEntry} */
		const entry = {};

		for (const config of previousConfigs) {
			compareAgainstCurrent({ entry, ruleId, current: currentConfigs, target: config });
		}
		for (const config of currentConfigs) {
			compareAgainstPrevious({ entry, ruleId, previous: previousConfigs, target: config });
		}

		if (objSize(entry) > 0) {
			changelog[ruleId] = entry;
		}
	}

	return changelog;
}

/**
 * @param {import('./config.cjs').ConfigEntry[][]} configs
 * @returns {string[]}
 */
function getAllRules(...configs) {
	return uniq(configs.flat().flatMap((config) => Object.keys(config.config.rules ?? {}))).sort(
		compareRuleKeys,
	);
}

/**
 * @param {string} ruleId
 * @param {import('./config.cjs').ConfigEntry} config
 */
function getRuleInConfig(ruleId, config) {
	return config.config.rules?.[ruleId];
}

/**
 * @param {object} options
 * @param {ChangelogEntry} options.entry - Warning: possible mutation
 * @param {string} options.ruleId
 * @param {import('./config.cjs').ConfigEntry[]} options.previous
 * @param {import('./config.cjs').ConfigEntry} options.target
 */
function compareAgainstPrevious({ entry, ruleId, previous, target }) {
	if (!previous.find((config) => getRuleInConfig(ruleId, config) !== undefined)) {
		entry.added = entry.added ?? [];
		entry.added.push({ label: target.label, current: getRuleInConfig(ruleId, target) });
	} else if (!previous.find((config) => config.label === target.label)) {
		entry.added = entry.added ?? [];
		entry.added.push({ label: target.label, current: getRuleInConfig(ruleId, target) });
	}

	for (const config of previous) {
		const previousRule = getRuleInConfig(ruleId, config);
		const currentRule = getRuleInConfig(ruleId, target);

		const wasIncludedAlready =
			entry.removed?.includes(config.label) || !!entry.added?.find((a) => a.label === target.label);

		if (
			!wasIncludedAlready &&
			config.label === target.label &&
			!compareObj(previousRule, currentRule)
		) {
			entry.changed = entry.changed ?? [];
			entry.changed.push({ label: config.label, previous: previousRule, current: currentRule });
		}
	}
}

/**
 * @param {object} options
 * @param {ChangelogEntry} options.entry - Warning: possible mutation
 * @param {string} options.ruleId
 * @param {import('./config.cjs').ConfigEntry} options.target
 * @param {import('./config.cjs').ConfigEntry[]} options.current
 */
function compareAgainstCurrent({ entry, ruleId, target, current }) {
	if (!current.find((config) => getRuleInConfig(ruleId, config) !== undefined)) {
		entry.removed = entry.removed ?? [];
		entry.removed.push(target.label);
	} else if (!current.find((config) => config.label === target.label)) {
		entry.removed = entry.removed ?? [];
		entry.removed.push(target.label);
	}
}

/**
 * @param {string} ruleId
 */
function getDocsLink(ruleId) {
	const [plugin, rule] = ruleId.includes('/') ? ruleId.split('/') : ['eslint', ruleId];
	return `https://kubajastrz.github.io/eslint-config-emperor/plugin/${plugin}/#${rule}`;
}

/**
 * @param {RuleEntry | undefined} value
 */
function formatRuleEntry(value) {
	if (!value) {
		return 'undefined';
	}
	if (typeof value === 'string' || Array.isArray(value) && value.length === 1) {
		return `\`\"${value}\"\``;
	}
	return `\`${JSON.stringify(value)}\``;
}

/**
 * Prioritize ESLint rules (with no slash) over plugins (with slash)
 * @param {string} a
 * @param {string} b
 */
function compareRuleKeys(a, b) {
	if (a.includes('/') && !b.includes('/')) return 1;
	if (!a.includes('/') && b.includes('/')) return -1;
	return a.localeCompare(b);
}

/**
 * @param {object} a
 * @param {object} b
 */
function compareObj(a, b) {
	try {
		assert.deepStrictEqual(a, b);
		return true;
	} catch {
		return false;
	}
}

/**
 * @param {object} a
 */
function objSize(a) {
	return Object.keys(a).length;
}

/**
 * @template T
 * @param {T[]} a
 */
function uniq(a) {
	return Array.from(new Set(a));
}

module.exports = {
	createChangelog,
	compareSnapshots,
};
