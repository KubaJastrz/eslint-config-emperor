// @ts-check

const fs = require('node:fs/promises');

const { getRules, paths } = require('./config');

const [nextVersion] = process.argv.slice(2);

main();

async function main() {
  const latestSnapshot = await fs.readFile(paths.releaseSnapshot, { encoding: 'utf8' });
  const latestSnapshotJson = JSON.parse(latestSnapshot);
  const currentSnapshotJson = await getRules();

  await fs.writeFile(
    paths.releaseSnapshot,
    JSON.stringify(
      {
        version: nextVersion || null,
        presets: currentSnapshotJson,
      },
      null,
      2,
    ),
  );
  const changes = compareSnapshots(latestSnapshotJson.presets, currentSnapshotJson);
  const changelog = createChangelog(changes);

  // Write changelog to stdout, it will be picked up by semantic-release
  console.log(changelog);
}

/**
 * @param {string[]} changes
 */
function createChangelog(changes) {
  const changesEntry = changes.length > 0 ? changes : ['No rule changes in this release'];
  return [`### Rule Changes`, ...changesEntry].join('\n');
}

/**
 * @param {import('./config').ConfigEntry[]} previous
 * @param {import('./config').ConfigEntry[]} current
 */
function compareSnapshots(previous, current) {
  return current
    .map((currentConfig) => {
      const previousConfig = previous.find((c) => c.label === currentConfig.label);
      if (!previousConfig) {
        return `* ${currentConfig.label}: New preset`;
      }
      const changes = compareConfigs(previousConfig.config, currentConfig.config);
      if (changes.length === 0) {
        return '';
      }
      return `* ${currentConfig.label}:\n  * ${changes.join('\n  * ')}`;
    })
    .filter(Boolean);
}

/**
 *
 * @param {import('eslint').Linter.Config} previous
 * @param {import('eslint').Linter.Config} current
 */
function compareConfigs(previous, current) {
  if (!current.rules || !previous.rules) {
    return [];
  }
  const changes = [];
  for (const [ruleName, ruleConfig] of Object.entries(current.rules)) {
    const previousRuleConfig = previous.rules[ruleName];
    if (previousRuleConfig === undefined) {
      changes.push(`\`${ruleName}\`: Added rule with \`${JSON.stringify(ruleConfig)}\``);
    } else if (!compareObj(previousRuleConfig, ruleConfig)) {
      changes.push(
        `\`${ruleName}\`: Changed from \`${JSON.stringify(
          previousRuleConfig,
        )}\` to \`${JSON.stringify(ruleConfig)}\``,
      );
    }
  }
  for (const [ruleName] of Object.entries(previous.rules)) {
    if (current.rules[ruleName] === undefined) {
      changes.push(`\`${ruleName}\`: Removed rule`);
    }
  }
  return changes;
}

/**
 * @param {object} a
 * @param {object} b
 */
function compareObj(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
