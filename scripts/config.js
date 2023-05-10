// @ts-check

const { ESLint } = require('eslint');
const path = require('node:path');

const repoDir = path.join(__dirname, '..');
const rootDir = path.join(repoDir, 'packages/eslint-config-emperor');

const paths = {
  rootDir,
  docsDir: path.join(rootDir, 'docs'),
  releaseSnapshot: path.join(rootDir, '.release-snapshot.json'),
};

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

/**
 * @typedef {Object} ConfigEntry
 * @property {string} label
 * @property {import('eslint').Linter.Config} config
 * @property {string} outFile
 */

/**
 * @returns {Promise<ConfigEntry[]>}
 */
function getRules() {
  const promises = Object.entries(configs).map(
    async ([label, { file, out: outFile, test: testFile }]) => {
      const config = await getConfig(file, testFile);
      return {
        label,
        config,
        outFile,
      };
    },
  );
  return Promise.all(promises);
}

/**
 * @param {string} configFile
 * @param {string} testFile
 */
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

module.exports = {
  paths,
  getRules,
};
