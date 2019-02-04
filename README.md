# eslint-config-koffeine

[![npm version](https://img.shields.io/npm/v/eslint-config-koffeine.svg)](https://www.npmjs.com/package/eslint-config-koffeine)
[![devDependency Status](https://david-dm.org/koffeine/eslint-config-koffeine/dev-status.svg)](https://david-dm.org/koffeine/eslint-config-koffeine?type=dev)
[![peerDependency Status](https://david-dm.org/koffeine/eslint-config-koffeine/peer-status.svg)](https://david-dm.org/koffeine/eslint-config-koffeine?type=peer)

Koffeine's ESLint shareable config

## Installation

Use option `--save-exact` for npm install to make sure that ESLint and config rules match.

__Install config__

```sh
npm install eslint-config-koffeine --save-dev --save-exact
```

__Install ESLint__

Install the correct version of ESLint, which is listed by the command:

```sh
npm info eslint-config-koffeine peerDependencies
```

For example:

```sh
npm install eslint@5.13.0 --save-dev --save-exact
```

## Usage

__ES6+ config__

Add the following to your .eslintrc.js file:

```js
modules.exports = {
	extends: 'koffeine',
	...
};
```

__ES5 config__

Add the following to your .eslintrc.js file:

```js
modules.exports = {
	extends: 'koffeine/es5',
	...
};
```

## License

Copyright © 2017-2018 Kornél Horváth

Licensed under the [MIT License](https://raw.githubusercontent.com/koffeine/eslint-config-koffeine/master/LICENSE).