// @ts-check

process.env.NODE_ENV = 'test';

const path = require('node:path');
const fs = require('node:fs/promises');
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);
const { lookupRuleMeta } = require('./meta');
const { getRules, paths } = require('./config');

main();

async function main() {
  await fs.rm(paths.docsDir, { recursive: true });
  await fs.mkdir(paths.docsDir, { recursive: true });
  const promises = (await getRules()).map(async ({ label, config, outFile }) => {
    const { rules, ...rest } = config;
    const configTable = renderRecord(rest);
    const rulesTable = renderRules(rules);

    const fileName = path.join(paths.docsDir, outFile);
    const warning = `<!-- This file is auto-generated. Do not edit it directly. -->\n\n`;
    const content = `${warning}# ${label}\n\n## Config\n\n${configTable}\n\n## Rules\n\n${rulesTable}`;

    await fs.mkdir(path.dirname(fileName), { recursive: true });
    await fs.writeFile(fileName, content);
    await exec(`git add ${fileName}`);
  });
  await Promise.all(promises);
}

function renderRecord(record) {
  const rows = Object.entries(record).map(([key, value]) => [
    key,
    `<code>${JSON.stringify(value)}</code>`,
  ]);
  return renderTable({ header: ['Key', 'Value'], rows });
}

function renderRules(rules) {
  const rows = Object.entries(rules)
    .sort(([a], [b]) => compareRuleKeys(a, b))
    .map(([key, value]) => {
      const meta = lookupRuleMeta(key);
      const url = meta?.docs?.url ?? '';
      const ruleName = url ? `[${key}](${url})` : key;
      const description = meta?.docs?.description ?? '';

      if (Array.isArray(value)) {
        return [ruleName, description, value[0], wrapOptions(value[1])];
      }
      return [ruleName, description, value, ''];
    });
  return renderTable({ header: ['Rule', 'Description', 'Enabled', 'Options'], rows });
}

/**
 * @param {string} a
 * @param {string} b
 */
function compareRuleKeys(a, b) {
  if (a.includes('/') && !b.includes('/')) return 1;
  if (!a.includes('/') && b.includes('/')) return -1;
  return a.localeCompare(b);
}

/**
 * @param {object} options
 * @returns {string}
 */
function wrapOptions(options) {
  if (!options) return '';
  return `<details><summary>Show</summary><code>${JSON.stringify(options)}</code></details>`;
}

/**
 * @param {Object} options
 * @param {string[]} options.header
 * @param {string[][]} options.rows
 * @returns {string}
 */
function renderTable({ header, rows }) {
  return `| ${header.join(' | ')} |
| ${header.map(() => '---').join(' | ')} |
${rows.map((row) => `| ${row.join(' | ')} |`).join('\n')}
`;
}
