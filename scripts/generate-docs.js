// @ts-check

const prettier = require('prettier');
const path = require('node:path');
const fs = require('node:fs/promises');
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

const { getRules, paths } = require('./config');

main();

async function main() {
  await fs.rm(paths.docsDir, { recursive: true });
  const promises = (await getRules()).map(async ({ label, config, outFile }) => {
    const { rules, ...rest } = config;
    const configTable = renderRecord(rest);
    const rulesTable = renderRules(rules);

    const fileName = path.join(paths.docsDir, outFile);
    const warning = `<!-- This file is auto-generated. Do not edit it directly. -->\n\n`;
    const content = `${warning}# ${label}\n\n## Config\n\n${configTable}\n\n## Rules\n\n${rulesTable}`;

    const formatted = prettier.format(content, { parser: 'markdown' });
    await fs.mkdir(path.dirname(fileName), { recursive: true });
    await fs.writeFile(fileName, formatted);
    await exec(`git add ${fileName}`);
  });
  await Promise.all(promises);
}

function renderRecord(record) {
  const header = '| Key | Value |';
  const spacer = '| --- | --- |';
  const rows = Object.entries(record).map(
    ([key, value]) => `| ${key} | \`${JSON.stringify(value)}\` |`,
  );
  return [header, spacer, ...rows].join('\n');
}

function renderRules(rules) {
  const header = '| Rule | Enabled | Options';
  const spacer = '| --- | --- | --- |';
  const rows = Object.entries(rules)
    .sort(([a], [b]) => compareRuleKeys(a, b))
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return [key, value[0], value[1] ? `\`${JSON.stringify(value[1])}\`` : ''];
      }
      return [key, value, ''];
    })
    .map(([key, enabled, options]) => `| ${key} | ${enabled} | ${options} |`);
  return [header, spacer, ...rows].join('\n');
}

function compareRuleKeys(a, b) {
  if (a.includes('/') && !b.includes('/')) return 1;
  if (!a.includes('/') && b.includes('/')) return -1;
  return a.localeCompare(b);
}
