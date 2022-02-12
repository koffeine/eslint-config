'use strict';

/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: './src/index.js',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'script'
	},
	env: {
		es2022: true,
		node: true
	},
	overrides: [
		{
			files: 'src/index.js',
			rules: {
				'quote-props': 'off'
			}
		},
		{
			files: '*.mjs',
			parserOptions: {
				sourceType: 'module'
			}
		}
	]
};
