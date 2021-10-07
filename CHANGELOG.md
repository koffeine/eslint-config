# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [Unreleased]

### Changed

- Updated func-style rule with 'expression', { allowArrowFunctions: true }


## [19.1.3] - 2021-08-07

### Changed

- Updated ESLint to 7.32.0


## [19.1.2] - 2021-05-13

### Changed

- Updated ESLint to 7.26.0


## [19.1.1] - 2021-04-27

### Changed

- Updated ESLint to 7.25.0


## [19.1.0] - 2021-04-20

### Changed

- Updated project files
- Updated func-style rule with 'declaration', { allowArrowFunctions: true }


## [19.0.0] - 2021-04-11

### Changed

- Updated ESLint to 7.24.0
- Updated no-implicit-coercion rule with { disallowTemplateShorthand: true }


## [18.0.0] - 2021-04-06

### Changed

- Updated ESLint to 7.23.0
- Updated no-unused-expressions rule with { enforceForJSX: false }
- Updated no-sequences rule with { allowInParentheses: false }
- Changed EditorConfig link to https


## [17.0.0] - 2021-01-16

### Added

- Enabled no-nonoctal-decimal-escape rule
- Enabled no-unsafe-optional-chaining rule with { disallowArithmeticOperators: true }

### Changed

- Updated ESLint to 7.18.0
- CHANGELOG.md cleanup


## [16.0.2] - 2020-10-07

### Changed

- Updated ESLint to 7.10.0


## [16.0.1] - 2020-09-15

### Changed

- Updated ESLint to 7.9.0


## [16.0.0] - 2020-09-09

### Changed

- Updated ESLint to 7.8.1
- Updated no-underscore-dangle rule with { allowAfterThis: false, allowAfterThisConstructor: false, allowFunctionParams: false }
- Explicitly turned off unused rules
- Updated devDependencies


## [15.0.2] - 2020-08-04

### Changed

- Updated ESLint to 7.6.0


## [15.0.1] - 2020-07-28

### Changed

- Renamed GitHub repository
- Renamed package to @koffeine/eslint-config
- Test cleanup


## [15.0.0] - 2020-07-26

### Added

- Added back eslint-find-rules as a devDependency
- Enabled default-case-last rule
- Enabled no-useless-backreference rule
- Enabled no-loss-of-precision rule
- Enabled no-promise-executor-return rule
- Enabled no-unreachable-loop rule

### Changed

- Updated ESLint to 7.5.0
- Updated no-extra-boolean-cast rule with { enforceForLogicalOperands: true }
- Updated no-void rule with { allowAsStatement: false }
- Updated no-extra-parens rule with { enforceForFunctionPrototypeMethods: false }
- Updated camelcase rule with { ignoreGlobals: false }
- Renamed id-blacklist rule to id-denylist

### Removed

- Removed deprecated rules


## [14.0.3] - 2020-07-24

### Changed

- Removed (already disabled) deprecated rules: require-jsdoc, valid-jsdoc


## [14.0.2] - 2020-01-06

### Changed

- Updated ESLint to 6.8.0


## [14.0.1] - 2019-12-02

### Changed

- Updated ESLint to 6.7.2


## [14.0.0] - 2019-11-25

### Changed

- Updated ESLint to 6.7.1
- Enabled grouped-accessor-pairs with 'anyOrder'
- Enabled no-constructor-return
- Enabled no-dupe-else-if
- Enabled no-setter-return
- Enabled { ignoreDestructuring: false, ignoreImports: false } for camelcase
- Enabled prefer-exponentiation-operator


## [13.0.0] - 2019-10-28

### Changed

- package.json cleanup
- Updated ESLint to 6.6.0
- Enabled { enforceForSwitchCase: true } for use-isnan
- Enabled { enforceForOrderingRelations: true } for no-unsafe-negation
- Enabled { enforceForNewInMemberExpressions: false } for no-extra-parens


## [12.0.0] - 2019-10-03

### Changed

- Updated ESLint to 6.5.1
- Enabled { enforceForSwitchCase: true } for use-isnan rule


## [11.0.0] - 2019-09-16

### Changed

- Updated ESLint to 6.4.0
- Enabled enforceForClassMembers for computed-property-spacing rule
- Enabled default-param-last rule
- Enabled no-import-assign rule
- Enabled prefer-regex-literals rule


## [10.0.0] - 2019-09-02

### Changed

- Updated ESLint to 6.3.0
- Enabled reportUnusedDisableDirectives


## [9.0.0] - 2019-08-23

### Changed

- Fixed typo in README.md
- Removed years from license
- Updated ESLint to 6.2.1

### Removed

- ES5 syntax support


## [8.0.3] - 2019-07-22

### Changed

- Updated license
- Updated .eslintrc.js
- Removed .npmignore in favor of files in package.json
- Updated ESLint to 6.1.0


## [8.0.2] - 2019-07-18

## Changed

- Disabled one-var


## [8.0.1] - 2019-07-01

### Changed

- Fixed new-parens definition
- Temporarily disabled require-atomic-updates until its fixed


## [8.0.0] - 2019-06-25

### Changed

- Enabled function-paren-newline as consistent
- Updated ESLint to 6.0.1


## [7.0.9] - 2019-04-01

### Changed

- Updated ESLint to 5.16.0


## [7.0.8] - 2019-03-19

### Changed

- Updated ESLint to 5.15.3


## [7.0.7] - 2019-03-18

### Changed

- Updated ESLint to 5.15.2


## [7.0.6] - 2019-03-05

### Changed

- Updated ESLint to 5.15.1


## [7.0.5] - 2019-03-04

### Changed

- Updated ESLint to 5.15.0


## [7.0.4] - 2019-02-19

### Changed

- Updated ESLint to 5.14.1


## [7.0.3] - 2019-02-18

### Changed

- Updated ESLint to 5.14.0


## [7.0.2] - 2019-02-04

### Changed

- Updated ESLint to 5.13.0


## [7.0.1] - 2019-01-21

### Changed

- Updated ESLint to 5.12.1


## [7.0.0] - 2019-01-07

### Changed

- Updated ESLint to 5.12.0
- Enabled no-useless-catch


## [6.0.0] - 2018-12-10

### Changed

- Enabled multiline-const, multiline-let, multiline-var for padding-line-between-statements
- Updated ESLint to 5.10.0


## [5.0.10] - 2018-11-11

### Removed

- eslint-find-rules as a devDependency
- Unnecessary files from published package


## [5.0.9] - 2018-11-11

### Changed

- Updated ESLint to 5.9.0


## [5.0.8] - 2018-11-06

### Fixed

- License link in README.md


## [5.0.7] - 2018-11-06

### Changed

- Updated license


## [5.0.6] - 2018-11-04

### Changed

- Updated license
- Updated .gitignore
- Updated README.md
- Renamed es6.js to es6+.js
- Disabled package-lock.json
- Reordered package.json properties

### Fixed

- Linting errors


## [5.0.5] - 2018-10-27

### Changed

- Updated ESLint to 5.8.0


## [5.0.4] - 2018-10-15

### Changed

- Updated ESLint to 5.7.0


## [5.0.3] - 2018-09-30

### Changed

- Updated ESLint to 5.6.1


## [5.0.2] - 2018-09-17

### Changed

- Updated ESLint to 5.6.0


## [5.0.1] - 2018-09-03

### Changed

- Updated ESLint to 5.5.0


## [5.0.0] - 2018-08-06

### Changed

- Updated ESLint to 5.3.0
- Enabled the following rules: no-misleading-character-class, require-atomic-updates, no-async-promise-executor, require-unicode-regexp


## [4.0.2] - 2018-07-23

### Changed

- Updated ESLint to 5.2.0


## [4.0.1] - 2018-07-09

### Changed

- Updated ESLint to 5.1.0


## [4.0.0] - 2018-07-05

### Changed

- Updated ESLint to 5.0.1
- Enabled array-element-newline rule with 'consistent'


## [3.0.6] - 2018-03-10

### Changed

- Underscore dangles are now allowed after this


## [3.0.5] - 2018-03-22

### Fixed

- Changed one-var rule back to 'always', because consecutive mode ignores the separateRequires flag


## [3.0.4] - 2018-03-22

### Changed

- Updated ESLint to 4.19.1


## [3.0.3] - 2018-03-05

### Changed

- Updated ESLint to 4.18.2


## [3.0.2] - 2018-02-21

### Changed

- Updated ESLint to 4.18.1


## [3.0.1] - 2018-02-19

### Changed

- Updated ESLint to 4.18.0


## [3.0.0] - 2018-02-05

### Changed

- Updated ESLint to 4.17.0
- Extended configuration of padding-line-between-statements rule


## [2.0.2] - 2018-01-23

### Changed

- Updated ESLint to 4.16.0


## [2.0.1] - 2018-01-08

### Changed

- Updated ESLint to 4.15.0


## [2.0.0] - 2017-12-24

### Changed

- Updated ESLint to 4.14.0
- Enabled one-var rule


## [1.1.4] - 2017-12-12

### Changed

- Updated ESLint to 4.13.1


## [1.1.3] - 2017-12-11

### Changed

- Updated ESLint to 4.13.0


## [1.1.2] - 2017-11-30

### Changed

- Updated ESLint to 4.12.1


## [1.1.1] - 2017-11-26

### Changed

- Fixed badge links in README.md
- Updated ESLint to 4.12.0


## [1.1.0] - 2017-11-21

### Added

- ES5 compatibility mode

### Changed

- no-shadow.builtinGlobals from true to false


## [1.0.0] - 2017-11-21

### Added

- Initial public release