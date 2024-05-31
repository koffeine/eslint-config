import stylisticJs from '@stylistic/eslint-plugin-js';

/** @type {import('eslint').Linter.FlatConfig} */
export default {
	linterOptions: {
		reportUnusedDisableDirectives: 'error'
	},
	plugins: {
		'@stylistic/js': stylisticJs
	},
	rules: {
		// POSSIBLE PROBLEMS

		'array-callback-return': [ 'error', { allowImplicit: false, checkForEach: false, allowVoid: false } ],
		'constructor-super': 'error',
		'for-direction': 'error',
		'getter-return': [ 'error', { allowImplicit: false } ],
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',
		'no-class-assign': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': [ 'error', 'except-parens' ],
		'no-const-assign': 'error',
		'no-constant-binary-expression': 'error',
		'no-constant-condition': [ 'error', { checkLoops: false } ],
		'no-constructor-return': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'warn',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-else-if': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': [ 'error', { includeExports: true } ],
		'no-empty-character-class': 'error',
		'no-empty-pattern': 'error',
		'no-ex-assign': 'error',
		'no-fallthrough': [ 'error', { commentPattern: 'break[\\s\\w]*omitted', allowEmptyCase: true, reportUnusedFallthroughComment: true } ],
		'no-func-assign': 'error',
		'no-import-assign': 'error',
		'no-inner-declarations': [ 'error', 'both' ],
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': [ 'error', { skipStrings: false, skipComments: false, skipRegExps: false, skipTemplates: false, skipJSXText: false } ],
		'no-loss-of-precision': 'error',
		'no-misleading-character-class': [ 'error', { allowEscape: true } ],
		'no-new-native-nonconstructor': 'error',
		'no-obj-calls': 'error',
		'no-promise-executor-return': [ 'error', { allowVoid: false } ],
		'no-prototype-builtins': 'error',
		'no-self-assign': [ 'error', { props: true } ],
		'no-self-compare': 'error',
		'no-setter-return': 'error',
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'error',
		'no-this-before-super': 'error',
		'no-undef': [ 'error', { typeof: true } ],
		'no-unexpected-multiline': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unreachable': 'error',
		'no-unreachable-loop': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': [ 'error', { enforceForOrderingRelations: true } ],
		'no-unsafe-optional-chaining': [ 'error', { disallowArithmeticOperators: true } ],
		'no-unused-private-class-members': 'error',
		'no-unused-vars': [ 'error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false, caughtErrors: 'all', ignoreClassWithStaticInitBlock: false, reportUsedIgnorePattern: false } ],
		'no-use-before-define': [ 'error', { functions: true, classes: true, variables: true, allowNamedExports: false } ],
		'no-useless-assignment': 'error',
		'no-useless-backreference': 'error',
		'require-atomic-updates': 'off',
		'use-isnan': [ 'error', { enforceForSwitchCase: true, enforceForIndexOf: true } ],
		'valid-typeof': [ 'error', { requireStringLiterals: true } ],

		// SUGGESTIONS

		'accessor-pairs': 'off',
		'arrow-body-style': [ 'error', 'as-needed', { requireReturnForObjectLiteral: false } ],
		'block-scoped-var': 'error',
		'camelcase': [ 'error', { properties: 'always', ignoreDestructuring: false, ignoreImports: false, ignoreGlobals: false } ],
		'capitalized-comments': 'off',
		'class-methods-use-this': 'off',
		'complexity': 'off',
		'consistent-return': [ 'error', { treatUndefinedAsUnspecified: true } ],
		'consistent-this': [ 'error', 'self' ],
		'curly': [ 'error', 'all' ],
		'default-case': 'error',
		'default-case-last': 'error',
		'default-param-last': 'error',
		'dot-notation': [ 'error', { allowKeywords: true } ],
		'eqeqeq': [ 'error', 'smart' ],
		'func-name-matching': [ 'error', 'always', { considerPropertyDescriptor: true, includeCommonJSModuleExports: false } ],
		'func-names': 'off',
		'func-style': [ 'error', 'expression', { allowArrowFunctions: true } ],
		'grouped-accessor-pairs': [ 'error', 'anyOrder' ],
		'guard-for-in': 'off',
		'id-denylist': 'off',
		'id-length': 'off',
		'id-match': 'off',
		'init-declarations': 'off',
		'logical-assignment-operators': [ 'error', 'always', { enforceForIfStatements: true } ],
		'max-classes-per-file': 'off',
		'max-depth': 'off',
		'max-lines': 'off',
		'max-lines-per-function': 'off',
		'max-nested-callbacks': 'off',
		'max-params': 'off',
		'max-statements': 'off',
		'new-cap': [ 'error', { newIsCap: true, capIsNew: true, properties: true } ],
		'no-alert': 'warn',
		'no-array-constructor': 'error',
		'no-bitwise': [ 'error', { int32Hint: false } ],
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-console': 'warn',
		'no-continue': 'off',
		'no-delete-var': 'error',
		'no-div-regex': 'off',
		'no-else-return': 'off',
		'no-empty': [ 'error', { allowEmptyCatch: false } ],
		'no-empty-function': 'error',
		'no-empty-static-block': 'error',
		'no-eq-null': 'error',
		'no-eval': [ 'error', { allowIndirect: false } ],
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-boolean-cast': [ 'error', { enforceForInnerExpressions: true } ],
		'no-extra-label': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': [ 'error', { boolean: true, number: true, string: true, disallowTemplateShorthand: true } ],
		'no-implicit-globals': 'off',
		'no-implied-eval': 'error',
		'no-inline-comments': 'off',
		'no-invalid-this': [ 'error', { capIsConstructor: true } ],
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': [ 'error', { allowLoop: false, allowSwitch: false } ],
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-magic-numbers': 'off',
		'no-multi-assign': 'off',
		'no-multi-str': 'error',
		'no-negated-condition': 'error',
		'no-nested-ternary': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-object-constructor': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'off',
		'no-plusplus': 'off',
		'no-proto': 'error',
		'no-redeclare': [ 'error', { builtinGlobals: true } ],
		'no-regex-spaces': 'error',
		'no-restricted-exports': 'off',
		'no-restricted-globals': 'off',
		'no-restricted-imports': 'off',
		'no-restricted-properties': 'off',
		'no-restricted-syntax': 'off',
		'no-return-assign': 'off',
		'no-script-url': 'error',
		'no-sequences': [ 'error', { allowInParentheses: false } ],
		'no-shadow': [ 'error', { builtinGlobals: false, hoist: 'all', ignoreOnInitialization: false } ],
		'no-shadow-restricted-names': 'error',
		'no-ternary': 'off',
		'no-throw-literal': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'error',
		'no-underscore-dangle': [
			'error',
			{
				allowAfterThis: false,
				allowAfterSuper: false,
				allowAfterThisConstructor: false,
				enforceInMethodNames: true,
				enforceInClassFields: true,
				allowInArrayDestructuring: false,
				allowInObjectDestructuring: false,
				allowFunctionParams: false
			}
		],
		'no-unneeded-ternary': [ 'error', { defaultAssignment: true } ],
		'no-unused-expressions': [ 'error', { allowShortCircuit: false, allowTernary: false, allowTaggedTemplates: false, enforceForJSX: false } ],
		'no-unused-labels': 'error',
		'no-useless-call': 'error',
		'no-useless-catch': 'error',
		'no-useless-computed-key': [ 'error', { enforceForClassMembers: true } ],
		'no-useless-concat': 'error',
		'no-useless-constructor': 'error',
		'no-useless-escape': 'error',
		'no-useless-rename': [ 'error', { ignoreImport: false, ignoreExport: false, ignoreDestructuring: false } ],
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-void': [ 'error', { allowAsStatement: false } ],
		'no-warning-comments': [ 'warn', { terms: [ 'todo', 'fixme', 'xxx' ], location: 'start' } ],
		'no-with': 'error',
		'object-shorthand': [ 'error', 'always', { avoidQuotes: false, ignoreConstructors: false, avoidExplicitReturnArrows: true } ],
		'one-var': 'off',
		'operator-assignment': [ 'error', 'always' ],
		'prefer-arrow-callback': [ 'error', { allowNamedFunctions: false, allowUnboundThis: false } ],
		'prefer-const': [ 'error', { destructuring: 'all', ignoreReadBeforeAssign: false } ],
		'prefer-destructuring': 'off',
		'prefer-exponentiation-operator': 'error',
		'prefer-named-capture-group': 'off',
		'prefer-numeric-literals': 'off',
		'prefer-object-has-own': 'error',
		'prefer-object-spread': 'error',
		'prefer-promise-reject-errors': 'off',
		'prefer-regex-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'radix': [ 'error', 'as-needed' ],
		'require-await': 'error',
		'require-unicode-regexp': 'error',
		'require-yield': 'error',
		'sort-imports': 'off',
		'sort-keys': 'off',
		'sort-vars': 'off',
		'strict': [ 'error', 'global' ],
		'symbol-description': 'off',
		'vars-on-top': 'off',
		'yoda': [ 'error', 'never', { exceptRange: false, onlyEquality: false } ],

		// LAYOUT & FORMATTING

		'unicode-bom': [ 'error', 'never' ],

		// STYLISTIC

		'@stylistic/js/array-bracket-newline': [ 'error', 'consistent' ],
		'@stylistic/js/array-bracket-spacing': [ 'error', 'always', { singleValue: true, objectsInArrays: true, arraysInArrays: true } ],
		'@stylistic/js/array-element-newline': [ 'error', 'consistent' ],
		'@stylistic/js/arrow-parens': [ 'error', 'always' ],
		'@stylistic/js/arrow-spacing': [ 'error', { before: true, after: true } ],
		'@stylistic/js/block-spacing': [ 'error', 'always' ],
		'@stylistic/js/brace-style': [ 'error', '1tbs', { allowSingleLine: false } ],
		'@stylistic/js/comma-dangle': [ 'error', 'only-multiline' ],
		'@stylistic/js/comma-spacing': [ 'error', { before: false, after: true } ],
		'@stylistic/js/comma-style': [ 'error', 'last' ],
		'@stylistic/js/computed-property-spacing': [ 'error', 'never', { enforceForClassMembers: true } ],
		'@stylistic/js/dot-location': [ 'error', 'property' ],
		'@stylistic/js/eol-last': [ 'error', 'always' ],
		'@stylistic/js/func-call-spacing': [ 'error', 'never' ], // alias of @stylistic/js/function-call-spacing
		'@stylistic/js/function-call-argument-newline': [ 'error', 'consistent' ],
		'@stylistic/js/function-call-spacing': [ 'error', 'never' ],
		'@stylistic/js/function-paren-newline': [ 'error', 'consistent' ],
		'@stylistic/js/generator-star-spacing': [ 'error', { before: true, after: false } ],
		'@stylistic/js/implicit-arrow-linebreak': 'off',
		'@stylistic/js/indent': [
			'error',
			'tab',
			{
				SwitchCase: 1,
				VariableDeclarator: 1,
				outerIIFEBody: 1,
				MemberExpression: 1,
				FunctionDeclaration: { parameters: 1, body: 1 },
				FunctionExpression: { parameters: 1, body: 1 },
				CallExpression: { arguments: 1 },
				ArrayExpression: 1,
				ObjectExpression: 1,
				ImportDeclaration: 1,
				flatTernaryExpressions: false,
				offsetTernaryExpressions: false,
				ignoreComments: false
			}
		],
		'@stylistic/js/jsx-quotes': [ 'error', 'prefer-double' ],
		'@stylistic/js/key-spacing': [ 'error', { beforeColon: false, afterColon: true, mode: 'minimum' } ],
		'@stylistic/js/keyword-spacing': [ 'error', { before: true, after: true } ],
		'@stylistic/js/line-comment-position': 'off',
		'@stylistic/js/linebreak-style': [ 'error', 'unix' ],
		'@stylistic/js/lines-around-comment': [
			'error',
			{
				beforeBlockComment: true,
				afterBlockComment: false,
				beforeLineComment: false,
				afterLineComment: false,
				allowBlockStart: true,
				allowBlockEnd: true,
				allowObjectStart: true,
				allowObjectEnd: true,
				allowArrayStart: true,
				allowArrayEnd: true,
				allowClassStart: true,
				allowClassEnd: true,
				applyDefaultIgnorePatterns: true,
				afterHashbangComment: false
			}
		],
		'@stylistic/js/lines-between-class-members': [ 'error', 'always', { exceptAfterSingleLine: false } ],
		'@stylistic/js/max-len': 'off',
		'@stylistic/js/max-statements-per-line': 'off',
		'@stylistic/js/multiline-comment-style': 'off',
		'@stylistic/js/multiline-ternary': 'off',
		'@stylistic/js/new-parens': [ 'error', 'always' ],
		'@stylistic/js/newline-per-chained-call': 'off',
		'@stylistic/js/no-confusing-arrow': 'off',
		'@stylistic/js/no-extra-parens': [
			'error',
			'all',
			{
				conditionalAssign: false,
				returnAssign: true,
				nestedBinaryExpressions: false,
				ternaryOperandBinaryExpressions: true,
				ignoreJSX: 'none',
				enforceForArrowConditionals: true,
				enforceForSequenceExpressions: true,
				enforceForNewInMemberExpressions: false,
				enforceForFunctionPrototypeMethods: false
			}
		],
		'@stylistic/js/no-extra-semi': 'error',
		'@stylistic/js/no-floating-decimal': 'error',
		'@stylistic/js/no-mixed-operators': [
			'error',
			{
				groups: [
					[ '+', '-', '*', '/', '%', '**' ],
					[ '&', '|', '^', '~', '<<', '>>', '>>>' ],
					[ '==', '!=', '===', '!==', '>', '>=', '<', '<=' ],
					[ '&&', '||' ],
					[ 'in', 'instanceof' ]
				],
				allowSamePrecedence: true
			}
		],
		'@stylistic/js/no-mixed-spaces-and-tabs': 'error',
		'@stylistic/js/no-multi-spaces': [ 'error', { ignoreEOLComments: false, exceptions: { Property: true, BinaryExpression: false, VariableDeclarator: true, ImportDeclaration: false }, includeTabs: true } ],
		'@stylistic/js/no-multiple-empty-lines': [ 'error', { max: 2, maxEOF: 1, maxBOF: 0 } ],
		'@stylistic/js/no-tabs': 'off',
		'@stylistic/js/no-trailing-spaces': [ 'error', { skipBlankLines: false, ignoreComments: false } ],
		'@stylistic/js/no-whitespace-before-property': 'error',
		'@stylistic/js/nonblock-statement-body-position': 'off',
		'@stylistic/js/object-curly-newline': [ 'error', { consistent: true } ],
		'@stylistic/js/object-curly-spacing': [ 'error', 'always', { arraysInObjects: true, objectsInObjects: true } ],
		'@stylistic/js/object-property-newline': 'off',
		'@stylistic/js/one-var-declaration-per-line': 'off',
		'@stylistic/js/operator-linebreak': [ 'error', 'before' ],
		'@stylistic/js/padded-blocks': 'off',
		'@stylistic/js/padding-line-between-statements': [
			'error',

			{ prev: '*', next: 'block', blankLine: 'always' },
			{ prev: 'block', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'block-like', blankLine: 'always' },
			{ prev: 'block-like', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'class', blankLine: 'always' },
			{ prev: 'class', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'do', blankLine: 'always' },
			{ prev: 'do', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'for', blankLine: 'always' },
			{ prev: 'for', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'function', blankLine: 'always' },
			{ prev: 'function', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'if', blankLine: 'always' },
			{ prev: 'if', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'multiline-block-like', blankLine: 'always' },
			{ prev: 'multiline-block-like', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'multiline-const', blankLine: 'always' },
			{ prev: 'multiline-const', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'multiline-let', blankLine: 'always' },
			{ prev: 'multiline-let', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'multiline-var', blankLine: 'always' },
			{ prev: 'multiline-var', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'switch', blankLine: 'always' },
			{ prev: 'switch', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'try', blankLine: 'always' },
			{ prev: 'try', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'while', blankLine: 'always' },
			{ prev: 'while', next: '*', blankLine: 'always' }
		],
		'@stylistic/js/quote-props': [ 'error', 'as-needed', { keywords: false, unnecessary: true, numbers: false } ],
		'@stylistic/js/quotes': [ 'error', 'single', { avoidEscape: true, allowTemplateLiterals: false } ],
		'@stylistic/js/rest-spread-spacing': [ 'error', 'never' ],
		'@stylistic/js/semi': [ 'error', 'always', { omitLastInOneLineBlock: false, omitLastInOneLineClassBody: false } ],
		'@stylistic/js/semi-spacing': [ 'error', { before: false, after: true } ],
		'@stylistic/js/semi-style': [ 'error', 'last' ],
		'@stylistic/js/space-before-blocks': [ 'error', 'always' ],
		'@stylistic/js/space-before-function-paren': [ 'error', { anonymous: 'never', named: 'never', asyncArrow: 'always' } ],
		'@stylistic/js/space-in-parens': [ 'error', 'never' ],
		'@stylistic/js/space-infix-ops': [ 'error', { int32Hint: false } ],
		'@stylistic/js/space-unary-ops': [ 'error', { words: true, nonwords: false } ],
		'@stylistic/js/spaced-comment': [ 'error', 'always' ],
		'@stylistic/js/switch-colon-spacing': [ 'error', { before: false, after: true } ],
		'@stylistic/js/template-curly-spacing': [ 'error', 'never' ],
		'@stylistic/js/template-tag-spacing': 'off',
		'@stylistic/js/wrap-iife': [ 'error', 'outside', { functionPrototypeMethods: false } ],
		'@stylistic/js/wrap-regex': 'off',
		'@stylistic/js/yield-star-spacing': [ 'error', 'before' ]
	}
};
