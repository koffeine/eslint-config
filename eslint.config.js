import koffeine from './src/index.js';
import globals from 'globals';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
	{
		...koffeine,
		languageOptions: {
			globals: globals.node
		}
	},
	{
		files: [ 'src/index.js' ],
		rules: {
			'quote-props': 'off'
		}
	}
];
