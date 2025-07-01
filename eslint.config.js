import koffeine from './src/index.js';
import globals from 'globals';
import typescriptParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...koffeine,
	{
		files: [ 'src/**/*.js' ],
		rules: {
			'@stylistic/quote-props': 'off'
		}
	},
	{
		files: [ 'test/**/*.js' ],
		languageOptions: {
			globals: globals.node
		}
	},
	{
		files: [ 'index.d.ts' ],
		languageOptions: {
			globals: globals.browser,
			parser: typescriptParser
		}
	}
];
