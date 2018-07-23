# eslint-config-koffeine

[![npm version](https://img.shields.io/npm/v/eslint-config-koffeine.svg)](https://www.npmjs.com/package/eslint-config-koffeine)
[![devDependency Status](https://david-dm.org/koffeine/eslint-config-koffeine/dev-status.svg)](https://david-dm.org/koffeine/eslint-config-koffeine?type=dev)
[![peerDependency Status](https://david-dm.org/koffeine/eslint-config-koffeine/peer-status.svg)](https://david-dm.org/koffeine/eslint-config-koffeine?type=peer)

Koffeine's ESLint shareable config

## Usage

Use option `--save-exact` for npm install to make sure that ESLint and config rules match.

### Install config

```sh
npm install --save-dev --save-exact eslint-config-koffeine
```

### Install ESLint

Install the correct version of ESlint, which is listed by the command:

```sh
npm info eslint-config-koffeine peerDependencies
```

For example (for 5.2.0):

```sh
npm install --save-dev --save-exact eslint@5.2.0
```

### ES6+ config

Add the following to your .eslintrc.js file:

```js
modules.exports = {
	extends: 'koffeine',
	...
};
```

### ES5 config

Add the following to your .eslintrc.js file:

```js
modules.exports = {
	extends: 'koffeine/es5',
	...
};
```


## License

Copyright © 2017 Horváth Kornél

Licensed under the [MIT License](https://github.com/koffeine/eslint/blob/master/LICENSE).