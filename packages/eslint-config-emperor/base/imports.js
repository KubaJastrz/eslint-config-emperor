module.exports = {
	extends: [],
	plugins: ['import'],
	rules: {
		'import/default': 'error',
		'import/export': 'error',
		'import/named': 'error',
		'import/namespace': 'error',
		'import/newline-after-import': 'error',
		'import/no-absolute-path': 'error',
		'import/no-anonymous-default-export': 'error',
		'import/no-cycle': 'error',
		'import/no-duplicates': [
			'error',
			{
				'prefer-inline': true,
			},
		],
		'import/no-empty-named-blocks': 'error',
		'import/no-extraneous-dependencies': 'error',
		'import/no-named-as-default-member': 'error',
		'import/no-named-as-default': 'error',
		'import/no-self-import': 'error',
		'import/no-useless-path-segments': [
			'error',
			{
				noUselessIndex: true,
			},
		],
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				// These rules are redundant in TypeScript
				'import/default': 'off',
				'import/named': 'off',
				'import/namespace': 'off',
			},
		},
	],
};
