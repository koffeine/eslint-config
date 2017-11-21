# eslint-config-koffeine

[![npm version](https://img.shields.io/npm/v/eslint-config-koffeine.svg)](https://www.npmjs.com/package/eslint-config-koffeine)
[![devDependency Status](https://david-dm.org/koffeine/eslint-config-koffeine/dev-status.svg)](https://david-dm.org/koffeine/eslint-config-koffeine#info=dev)
[![peerDependency Status](https://david-dm.org/koffeine/eslint-config-koffeine/peer-status.svg)](https://david-dm.org/koffeine/eslint-config-koffeine#info=peer)

Koffeine's ESLint shareable config

## Usage

> Use option `--save-exact` for npm install to make sure that ESLint and config rules match.

### Install config

```sh
npm install --save-dev --save-exact eslint-config-koffeine
```

### Install ESLint

- Install the correct version of ESlint, which is listed by the command:

```sh
npm info eslint-config-koffeine peerDependencies
```

- For example (for 4.11.0):

```sh
npm install --save-dev --save-exact eslint@4.11.0
```

### Extend from config

Now you can add the following to your .eslintrc.js file:

```js
modules.exports = {
	extends: 'koffeine',
	...
};
```

## License

Copyright © 2017 Horváth Kornél

Licensed under the [MIT License](https://github.com/koffeine/eslint/blob/master/LICENSE).