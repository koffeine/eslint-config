'use strict';

module.exports = {
	reportUnusedDisableDirectives: true,
	rules: {
		'accessor-pairs': 'off',
		'array-bracket-newline': 'off',
		'array-bracket-spacing': [ 'error', 'always', { 'singleValue': true, 'objectsInArrays': true, 'arraysInArrays': true } ],
		'array-callback-return': 'error',
		'array-element-newline': [ 'error', 'consistent' ],
		'arrow-body-style': 'off',
		'arrow-parens': [ 'error', 'always' ],
		'arrow-spacing': [ 'error', { 'before': true, 'after': true } ],
		'block-scoped-var': 'error',
		'block-spacing': [ 'error', 'always' ],
		'brace-style': [ 'error', '1tbs', { 'allowSingleLine': true } ],
		'camelcase': [ 'error', { 'properties': 'always', 'ignoreDestructuring': false, 'ignoreImports': false, 'ignoreGlobals': false } ],
		'capitalized-comments': 'off',
		'class-methods-use-this': 'off',
		'comma-dangle': [ 'error', 'never' ],
		'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
		'comma-style': [ 'error', 'last' ],
		'complexity': 'off',
		'computed-property-spacing': [ 'error', 'never', { 'enforceForClassMembers': true } ],
		'consistent-return': [ 'error', { 'treatUndefinedAsUnspecified': true } ],
		'consistent-this': [ 'error', 'self' ],
		'constructor-super': 'off',
		'curly': [ 'error', 'all' ],
		'default-case': [ 'error', { 'commentPattern': '^no default$' } ],
		'default-case-last': 'error',
		'default-param-last': 'error',
		'dot-location': [ 'error', 'property' ],
		'dot-notation': [ 'error', { 'allowKeywords': true } ],
		'eol-last': [ 'error', 'always' ],
		'eqeqeq': [ 'error', 'smart' ],
		'for-direction': 'off',
		'func-call-spacing': [ 'error', 'never' ],
		'func-name-matching': 'off',
		'func-names': 'off',
		'func-style': [ 'error', 'expression', { 'allowArrowFunctions': true } ],
		'function-call-argument-newline': 'off',
		'function-paren-newline': [ 'error', 'consistent' ],
		'generator-star-spacing': [ 'error', { 'before': true, 'after': false } ],
		'getter-return': [ 'error', { 'allowImplicit': false } ],
		'grouped-accessor-pairs': [ 'error', 'anyOrder' ],
		'guard-for-in': 'off',
		'id-denylist': 'off',
		'id-length': 'off',
		'id-match': 'off',
		'implicit-arrow-linebreak': 'off',
		'indent': [ 'error', 'tab', { 'SwitchCase': 1, 'VariableDeclarator': 1, 'outerIIFEBody': 1, 'MemberExpression': 1, 'FunctionDeclaration': { 'parameters': 1, 'body': 1 }, 'FunctionExpression': { 'parameters': 1, 'body': 1 }, 'CallExpression': { 'arguments': 1 }, 'ArrayExpression': 1, 'ObjectExpression': 1, 'ImportDeclaration': 1, 'flatTernaryExpressions': false, 'ignoreComments': false } ],
		'init-declarations': 'off',
		'jsx-quotes': [ 'error', 'prefer-double' ],
		'key-spacing': [ 'error', { 'mode': 'minimum' } ],
		'keyword-spacing': [ 'error', { 'before': true, 'after': true } ],
		'line-comment-position': 'off',
		'linebreak-style': [ 'error', 'unix' ],
		'lines-around-comment': [ 'error', { 'beforeBlockComment': true, 'afterBlockComment': false, 'beforeLineComment': false, 'afterLineComment': false, 'allowBlockStart': true, 'allowBlockEnd': true, 'allowObjectStart': true, 'allowObjectEnd': true, 'allowArrayStart': true, 'allowArrayEnd': true, 'allowClassStart': true, 'allowClassEnd': true } ],
		'lines-between-class-members': [ 'error', 'always', { 'exceptAfterSingleLine': false } ],
		'max-classes-per-file': 'off',
		'max-depth': 'off',
		'max-len': 'off',
		'max-lines': 'off',
		'max-lines-per-function': 'off',
		'max-nested-callbacks': 'off',
		'max-params': 'off',
		'max-statements': 'off',
		'max-statements-per-line': 'off',
		'multiline-comment-style': 'off',
		'multiline-ternary': 'off',
		'new-cap': [ 'error', { 'newIsCap': true, 'capIsNew': true, 'properties': true } ],
		'new-parens': [ 'error', 'always' ],
		'newline-per-chained-call': 'off',
		'no-alert': 'warn',
		'no-array-constructor': 'error',
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',
		'no-bitwise': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-class-assign': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'off',
		'no-confusing-arrow': 'off',
		'no-console': 'warn',
		'no-const-assign': 'error',
		'no-constant-condition': [ 'error', { 'checkLoops': false } ],
		'no-constructor-return': 'error',
		'no-continue': 'off',
		'no-control-regex': 'error',
		'no-debugger': 'warn',
		'no-delete-var': 'error',
		'no-div-regex': 'off',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-else-if': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': [ 'error', { 'includeExports': true } ],
		'no-else-return': 'off',
		'no-empty': [ 'error', { 'allowEmptyCatch': false } ],
		'no-empty-character-class': 'error',
		'no-empty-function': 'error',
		'no-empty-pattern': 'error',
		'no-eq-null': 'error',
		'no-eval': [ 'error', { 'allowIndirect': false } ],
		'no-ex-assign': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-boolean-cast': [ 'error', { 'enforceForLogicalOperands': true } ],
		'no-extra-label': 'error',
		'no-extra-parens': [ 'error', 'all', { 'conditionalAssign': true, 'returnAssign': true, 'nestedBinaryExpressions': false, 'ignoreJSX': 'none', 'enforceForArrowConditionals': true, 'enforceForSequenceExpressions': true, 'enforceForNewInMemberExpressions': false, 'enforceForFunctionPrototypeMethods': false } ],
		'no-extra-semi': 'error',
		'no-fallthrough': [ 'error', { 'commentPattern': '^break omitted$' } ],
		'no-floating-decimal': 'off',
		'no-func-assign': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': [ 'error', { 'boolean': true, 'number': true, 'string': true, 'disallowTemplateShorthand': true } ],
		'no-implicit-globals': 'off',
		'no-implied-eval': 'error',
		'no-import-assign': 'error',
		'no-inline-comments': 'off',
		'no-inner-declarations': [ 'error', 'both' ],
		'no-invalid-regexp': 'error',
		'no-invalid-this': 'error',
		'no-irregular-whitespace': [ 'error', { 'skipStrings': true, 'skipComments': true, 'skipRegExps': true, 'skipTemplates': true } ],
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': [ 'error', { 'allowLoop': false, 'allowSwitch': false } ],
		'no-lone-blocks': 'error',
		'no-lonely-if': 'off',
		'no-loop-func': 'error',
		'no-loss-of-precision': 'error',
		'no-magic-numbers': 'off',
		'no-misleading-character-class': 'error',
		'no-mixed-operators': [ 'error', { 'allowSamePrecedence': true } ],
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-assign': 'off',
		'no-multi-spaces': [ 'error', { 'ignoreEOLComments': false, 'exceptions': { 'Property': true, 'VariableDeclarator': true, 'ImportDeclaration': true } } ],
		'no-multi-str': 'error',
		'no-multiple-empty-lines': [ 'error', { 'max': 2 } ],
		'no-negated-condition': 'error',
		'no-nested-ternary': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-symbol': 'error',
		'no-new-wrappers': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-obj-calls': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'off',
		'no-plusplus': 'off',
		'no-promise-executor-return': 'error',
		'no-proto': 'error',
		'no-prototype-builtins': 'off',
		'no-redeclare': [ 'error', { 'builtinGlobals': true } ],
		'no-regex-spaces': 'error',
		'no-restricted-exports': 'off',
		'no-restricted-globals': 'off',
		'no-restricted-imports': 'off',
		'no-restricted-properties': 'off',
		'no-restricted-syntax': 'off',
		'no-return-assign': 'off',
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-assign': [ 'error', { 'props': true } ],
		'no-self-compare': 'error',
		'no-sequences': [ 'error', { 'allowInParentheses': false } ],
		'no-setter-return': 'error',
		'no-shadow': [ 'error', { 'builtinGlobals': false, 'hoist': 'all' } ],
		'no-shadow-restricted-names': 'error',
		'no-sparse-arrays': 'error',
		'no-tabs': 'off',
		'no-template-curly-in-string': 'error',
		'no-ternary': 'off',
		'no-this-before-super': 'error',
		'no-throw-literal': 'off',
		'no-trailing-spaces': [ 'error', { 'skipBlankLines': false, 'ignoreComments': false } ],
		'no-undef': [ 'error', { 'typeof': true } ],
		'no-undef-init': 'error',
		'no-undefined': 'error',
		'no-underscore-dangle': [ 'error', { 'allowAfterThis': false, 'allowAfterSuper': false, 'allowAfterThisConstructor': false, 'enforceInMethodNames': true, 'allowFunctionParams': false } ],
		'no-unexpected-multiline': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': [ 'error', { 'defaultAssignment': false } ],
		'no-unreachable': 'error',
		'no-unreachable-loop': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': [ 'error', { 'enforceForOrderingRelations': true } ],
		'no-unsafe-optional-chaining': [ 'error', { 'disallowArithmeticOperators': true } ],
		'no-unused-expressions': [ 'error', { 'allowShortCircuit': false, 'allowTernary': false, 'allowTaggedTemplates': false, 'enforceForJSX': false } ],
		'no-unused-labels': 'error',
		'no-unused-vars': [ 'error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false, 'caughtErrors': 'all' } ],
		'no-use-before-define': [ 'error', { 'functions': true, 'classes': true, 'variables': true } ],
		'no-useless-backreference': 'error',
		'no-useless-call': 'error',
		'no-useless-catch': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-constructor': 'error',
		'no-useless-escape': 'error',
		'no-useless-rename': [ 'error', { 'ignoreImport': false, 'ignoreExport': false, 'ignoreDestructuring': false } ],
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-void': [ 'error', { 'allowAsStatement': false } ],
		'no-warning-comments': [ 'warn', { 'terms': [ 'todo', 'fixme', 'xxx' ], 'location': 'start' } ],
		'no-whitespace-before-property': 'error',
		'no-with': 'error',
		'nonblock-statement-body-position': 'off',
		'object-curly-newline': 'off',
		'object-curly-spacing': [ 'error', 'always', { 'arraysInObjects': true, 'objectsInObjects': true } ],
		'object-property-newline': 'off',
		'object-shorthand': 'off',
		'one-var': 'off',
		'one-var-declaration-per-line': 'off',
		'operator-assignment': [ 'error', 'always' ],
		'operator-linebreak': [ 'error', 'before' ],
		'padded-blocks': 'off',
		'padding-line-between-statements': [
			'error',

			{ 'prev': '*', 'next': 'block', 'blankLine': 'always' },
			{ 'prev': 'block', 'next': '*', 'blankLine': 'always' },

			{ 'prev': '*', 'next': 'block-like', 'blankLine': 'always' },
			{ 'prev': 'block-like', 'next': '*', 'blankLine': 'always' },

			{ 'prev': '*', 'next': 'class', 'blankLine': 'always' },
			{ 'prev': 'class', 'next': '*', 'blankLine': 'always' },

			{ 'prev': '*', 'next': 'do', 'blankLine': 'always' },
			{ 'prev': 'do', 'next': '*', 'blankLine': 'always' },

			{ 'prev': '*', 'next': 'for', 'blankLine': 'always' },
			{ 'prev': 'for', 'next': '*', 'blankLine': 'always' },

			{ 'prev': '*', 'next': 'function', 'blankLine': 'always' },
			{ 'prev': 'function', 'next': '*', 'blankLine': 'always' },

			{ 'prev': '*', 'next': 'if', 'blankLine': 'always' },
			{ 'prev': 'if', 'next': '*', 'blankLine': 'always' },

			{ 'prev': '*', 'next': 'multiline-block-like', 'blankLine': 'always' },
			{ 'prev': 'multiline-block-like', 'next': '*', 'blankLine': 'always' },

			{ 'prev': '*', 'next': 'multiline-const', 'blankLine': 'always' },
			{ 'prev': 'multiline-const', 'next': '*', 'blankLine': 'always' },

			{ 'prev': '*', 'next': 'multiline-let', 'blankLine': 'always' },
			{ 'prev': 'multiline-let', 'next': '*', 'blankLine': 'always' },

			{ 'prev': '*', 'next': 'multiline-var', 'blankLine': 'always' },
			{ 'prev': 'multiline-var', 'next': '*', 'blankLine': 'always' },

			{ 'prev': '*', 'next': 'switch', 'blankLine': 'always' },
			{ 'prev': 'switch', 'next': '*', 'blankLine': 'always' },

			{ 'prev': '*', 'next': 'try', 'blankLine': 'always' },
			{ 'prev': 'try', 'next': '*', 'blankLine': 'always' },

			{ 'prev': '*', 'next': 'while', 'blankLine': 'always' },
			{ 'prev': 'while', 'next': '*', 'blankLine': 'always' }
		],
		'prefer-arrow-callback': [ 'error', { 'allowNamedFunctions': false, 'allowUnboundThis': true } ],
		'prefer-const': 'off',
		'prefer-destructuring': 'off',
		'prefer-exponentiation-operator': 'error',
		'prefer-named-capture-group': 'off',
		'prefer-numeric-literals': 'off',
		'prefer-object-spread': 'off',
		'prefer-promise-reject-errors': 'off',
		'prefer-regex-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'quote-props': [ 'error', 'as-needed' ],
		'quotes': [ 'error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': false } ],
		'radix': [ 'error', 'as-needed' ],
		'require-atomic-updates': 'off', // https://github.com/eslint/eslint/issues/11899
		'require-await': 'error',
		'require-unicode-regexp': 'error',
		'require-yield': 'error',
		'rest-spread-spacing': [ 'error', 'never' ],
		'semi': [ 'error', 'always' ],
		'semi-spacing': [ 'error', { 'before': false, 'after': true } ],
		'semi-style': [ 'error', 'last' ],
		'sort-imports': 'off',
		'sort-keys': 'off',
		'sort-vars': 'off',
		'space-before-blocks': [ 'error', 'always' ],
		'space-before-function-paren': [ 'error', 'never' ],
		'space-in-parens': [ 'error', 'never' ],
		'space-infix-ops': [ 'error', { 'int32Hint': false } ],
		'space-unary-ops': [ 'error', { 'words': true, 'nonwords': false } ],
		'spaced-comment': [ 'error', 'always' ],
		'strict': [ 'error', 'global' ],
		'switch-colon-spacing': [ 'error', { 'before': false, 'after': true } ],
		'symbol-description': 'off',
		'template-curly-spacing': [ 'error', 'never' ],
		'template-tag-spacing': 'off',
		'unicode-bom': [ 'error', 'never' ],
		'use-isnan': [ 'error', { 'enforceForSwitchCase': true, 'enforceForIndexOf': true } ],
		'valid-typeof': [ 'error', { 'requireStringLiterals': true } ],
		'vars-on-top': 'off',
		'wrap-iife': [ 'error', 'outside', { 'functionPrototypeMethods': false } ],
		'wrap-regex': 'off',
		'yield-star-spacing': [ 'error', 'before' ],
		'yoda': [ 'error', 'never' ]
	}
};