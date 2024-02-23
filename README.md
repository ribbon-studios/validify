**NOTE: Still a WIP and may be breaking changes within the first major version**

### @rain-cafe/validify

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Coveralls][coveralls-image]][coveralls-url]

[![CI Build][github-actions-image]][github-actions-url]
[![Maintainability][maintainability-image]][maintainability-url]
[![Semantic Release][semantic-release-image]][semantic-release-url]
[![Code Style: Prettier][code-style-image]][code-style-url]

An incredibly simple object validation library

### Usage

```tsx
import { Validator, isDefined, isAlpha } from '@rain-cafe/validify';

type MyCustomType = {
  name: string;
  version: string;

  i18n: {
    en: {
      hello: string;
    };
  };

  users: Array<{
    first: string;
    last: string;
  }>;
};

const validator = new Validator<MyCustomType>({
  name: [isDefined, isAlpha],

  i18n: {
    en: {
      hello: [isDefined, isAlphaNumeric],
    },
  },

  users: {
    first: [isDefined, isAlpha],
    last: [isDefined, isAlpha],
  },
});

const myObject = {
  name: 'App',
  version: '1.0.0',

  i18n: {
    en: {
      hello: 'world',
    },
  },

  users: [
    {
      first: 'Cecilia',
      last: 'Sanare',
    },
  ],
};

const errors = validator.check(myObject); // returns a list of all the validator failure reasons
validator.validate(myObject); // throws an error containing all of the validator failure reasons
validator.isValid(myObject); // returns true if the object passes all of the validators
validator.isInvalid(myObject); // returns true if the object fails any of the validators
```

[npm-version-image]: https://img.shields.io/npm/v/@rain-cafe/validify.svg
[npm-downloads-image]: https://img.shields.io/npm/dm/@rain-cafe/validify.svg
[npm-url]: https://npmjs.org/package/@rain-cafe/validify
[github-actions-image]: https://img.shields.io/github/actions/workflow/status/rain-cafe/validify/ci.yml?event=push
[github-actions-url]: https://github.com/rain-cafe/validify/actions/workflows/ci.yml?query=branch%3Amain
[coveralls-image]: https://img.shields.io/coveralls/rain-cafe/validify.svg
[coveralls-url]: https://coveralls.io/github/rain-cafe/validify?branch=main
[code-style-image]: https://img.shields.io/badge/code%20style-prettier-ff69b4.svg
[code-style-url]: https://prettier.io
[maintainability-image]: https://img.shields.io/codeclimate/maintainability/rain-cafe/refreshly
[maintainability-url]: https://codeclimate.com/github/rain-cafe/refreshly/maintainability
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[semantic-release-image]: https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079
