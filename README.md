# eslint-config

[![npm](https://img.shields.io/npm/v/eslint-config-koffeine)](https://www.npmjs.com/package/eslint-config-koffeine)
[![devDependencies Status](https://david-dm.org/koffeine/eslint-config/dev-status.svg)](https://david-dm.org/koffeine/eslint-config?type=dev)
[![peerDependencies Status](https://david-dm.org/koffeine/eslint-config/peer-status.svg)](https://david-dm.org/koffeine/eslint-config?type=peer)

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
npm install eslint@7.5.0 --save-dev --save-exact
```

## Usage

Add the following to your .eslintrc.js file:

```js
module.exports = {
	extends: 'koffeine',
	...
};
```

## License

Copyright © Kornél Horváth

Licensed under the [MIT License](https://raw.githubusercontent.com/koffeine/eslint-config/master/LICENSE).