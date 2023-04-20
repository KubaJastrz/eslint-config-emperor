// @ts-check

const { ESLint } = require('eslint');
const Prettier = require('prettier');
const path = require('node:path');
const fs = require('node:fs/promises');
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

const rootDir = path.join(__dirname, '../packages/eslint-config-emperor');
const configs = {
  'base (js)': { file: 'index.js', out: 'base_js.md', test: 'index.js' },
  'base (ts)': { file: 'index.js', out: 'base_ts.md', test: 'index.ts' },
  'base/style (js)': { file: 'style.js', out: 'base-style_js.md', test: 'index.js' },
  'base/style (ts)': { file: 'style.js', out: 'base-style_ts.md', test: 'index.ts' },
  'react (js)': { file: 'react/index.js', out: 'react_js.md', test: 'index.js' },
  'react (ts)': { file: 'react/index.js', out: 'react_ts.md', test: 'index.ts' },
  'react/style (js)': { file: 'react/style.js', out: 'react-style_js.md', test: 'index.js' },
  'react/style (ts)': { file: 'react/style.js', out: 'react-style_ts.md', test: 'index.ts' },
  prettier: { file: 'prettier.js', out: 'prettier.md', test: 'index.js' },
};
const outDir = path.join(rootDir, 'docs');

main();

async function main() {
  await fs.rm(outDir, { recursive: true });
  const promises = Object.entries(configs).map(
    async ([label, { file, out: outFile, test: testFile }]) => {
      const config = await getConfig(file, testFile);
      const { rules, ...rest } = config;
      const configTable = renderRecord(rest);
      const rulesTable = renderRules(rules);

      const fileName = path.join(outDir, outFile);
      const warning = `<!-- This file is auto-generated. Do not edit it directly. -->\n\n`;
      const content = `${warning}# ${label}\n\n## Config\n\n${configTable}\n\n## Rules\n\n${rulesTable}`;

      const formatted = Prettier.format(content, { parser: 'markdown' });
      await fs.mkdir(path.dirname(fileName), { recursive: true });
      await fs.writeFile(fileName, formatted);
      await exec(`git add ${fileName}`);
    },
  );
  await Promise.all(promises);
}

async function getConfig(configFile, testFile) {
  const eslint = new ESLint({
    baseConfig: {
      extends: [path.join(rootDir, configFile)],
    },
    useEslintrc: false,
    cwd: rootDir,
  });
  const config = await eslint.calculateConfigForFile(testFile);
  config.parser = removeAbsolutePath(config.parser);
  return config;
}

function removeAbsolutePath(pathToFile) {
  if (!pathToFile) return pathToFile;
  return pathToFile.split('node_modules').pop();
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
