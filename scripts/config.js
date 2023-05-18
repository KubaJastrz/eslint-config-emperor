// @ts-check

const { ESLint } = require('eslint');
const path = require('node:path');

const repoDir = path.join(__dirname, '..');
const emperorDir = path.join(repoDir, 'packages/eslint-config-emperor');

const paths = {
  emperorDir,
  releaseSnapshot: path.join(emperorDir, '.release-snapshot.json'),
};

const configs = {
  'base (js)': { file: 'index.js', test: 'index.js' },
  'base (ts)': { file: 'index.js', test: 'index.ts' },
  'base/style (js)': { file: 'style.js', test: 'index.js' },
  'base/style (ts)': { file: 'style.js', test: 'index.ts' },
  'react (js)': { file: 'react/index.js', test: 'index.js' },
  'react (ts)': { file: 'react/index.js', test: 'index.ts' },
  'react/style (js)': { file: 'react/style.js', test: 'index.js' },
  'react/style (ts)': { file: 'react/style.js', test: 'index.ts' },
  prettier: { file: 'prettier.js', test: 'index.js' },
};

/**
 * @typedef {Object} ConfigEntry
 * @property {string} label
 * @property {import('eslint').Linter.Config} config
 */

/**
 * @returns {Promise<ConfigEntry[]>}
 */
function getRules() {
  const promises = Object.entries(configs).map(async ([label, { file, test: testFile }]) => {
    const config = await getConfig(file, testFile);
    return {
      label,
      config,
    };
  });
  return Promise.all(promises);
}

/**
 * @param {string} configFile
 * @param {string} testFile
 */
async function getConfig(configFile, testFile) {
  const eslint = new ESLint({
    baseConfig: {
      extends: [path.join(emperorDir, configFile)],
    },
    useEslintrc: false,
    cwd: emperorDir,
  });
  const config = await eslint.calculateConfigForFile(testFile);
  config.parser = removeAbsolutePath(config.parser);
  return config;
}

/**
 * @param {string | undefined} pathToFile
 */
function removeAbsolutePath(pathToFile) {
  if (!pathToFile) return pathToFile;
  return pathToFile.split('node_modules').pop();
}

module.exports = {
  paths,
  getRules,
};
