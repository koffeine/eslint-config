module.exports = {
	root: true,
	extends: './index.js',
	parserOptions: {
		ecmaVersion: 2021, // 12
		sourceType: 'script'
	},
	env: {
		es2021: true,
		node: true
	},
	rules: {
		'quote-props': 'off',
		'strict': 'off'
	}
};