// @ts-check

const eslintRules = require('eslint/use-at-your-own-risk').builtinRules;

const plugins = {
  '@typescript-eslint': require('@typescript-eslint/eslint-plugin').rules,
  import: require('eslint-plugin-import').rules,
  'jsx-a11y': require('eslint-plugin-jsx-a11y').rules,
  prettier: require('eslint-plugin-prettier').rules,
  react: require('eslint-plugin-react').rules,
  'react-hooks': require('eslint-plugin-react-hooks').rules,
  unicorn: require('eslint-plugin-unicorn').rules,
};

/**
 * @param {string} ruleId
 * @returns {import('eslint').Rule.RuleMetaData}
 */
function lookupRuleMeta(ruleId) {
  if (ruleId.includes('/')) {
    const [pluginId, ruleName] = ruleId.split('/');
    const pluginRules = plugins[pluginId];
    if (!pluginRules) {
      return {};
    }
    return pluginRules[ruleName].meta;
  }
  return eslintRules.get(ruleId)?.meta ?? {};
}

module.exports = {
  lookupRuleMeta,
};
