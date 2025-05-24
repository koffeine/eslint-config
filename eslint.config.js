import koffeine from './src/index.js';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
	koffeine,
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
	}
];
