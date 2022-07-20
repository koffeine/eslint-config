<h1>
	eslint-config
	<a href="https://www.npmjs.com/package/@koffeine/eslint-config"><img alt="npm" src="https://img.shields.io/npm/v/@koffeine/eslint-config"></a>
</h1>

Koffeine's ESLint shareable config

## Installation

Use option `--save-exact` for npm install to make sure that ESLint and config rules match.

__Install config__

```sh
npm install @koffeine/eslint-config --save-dev --save-exact
```

__Install ESLint__

Install the correct version of ESLint, which is listed by the command:

```sh
npm info @koffeine/eslint-config peerDependencies
```

For example:

```sh
npm install eslint@8.20.0 --save-dev --save-exact
```

## Usage

Add the following to your .eslintrc.js file:

```js
module.exports = {
    extends: '@koffeine'
};
```

## License

Copyright © Kornél Horváth

Licensed under the [MIT License](https://raw.githubusercontent.com/koffeine/eslint-config/master/LICENSE).
