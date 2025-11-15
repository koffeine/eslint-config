import koffeine from './src/index.js';
import globals from 'globals';
import typescriptParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...koffeine,
	{
		ignores: [ 'tools/' ],
	},
	{
		languageOptions: {
			globals: globals.node
		}
	},
	{
		files: [ 'src/**/*' ],
		rules: {
			'@stylistic/quote-props': 'off'
		}
	},
	{
		files: [ '**/*.ts' ],
		languageOptions: {
			parser: typescriptParser
		}
	}
];
