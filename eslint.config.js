import koffeine from './src/index.js';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	koffeine,
	{
		files: [ 'src/**/*.js' ],
		rules: {
			'quote-props': 'off'
		}
	},
	{
		files: [ 'test/**/*.js' ],
		languageOptions: {
			globals: globals.node
		}
	}
];
