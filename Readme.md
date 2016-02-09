
# xargs

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Transform the arguments of a function

## Installation

    $ npm install @f/xargs

## Usage

xargs creates a wrapper for a function that transforms its arguments based on their position. E.g. `xargs(fn, add1, times2) -> (a, b) => fn(add1(a), times2(b))`.

Simple example:

```javascript
const newAdd = xargs(add, times2, times3)

newAdd(4, 5) === 4*2 + 3*5

function add (a, b) { return a + b }
function times2 (a) { return a * 2 }
function times3 (a) { return a * 3 }
```

A more practical example:

```js
import xargs from '@f/xargs'

const apiBase = 'http://myapi.com/v1/'
const apiFetch = xargs(fetch, url => apiBase + url)

apiFetch('user/login', {method: 'post', body: {username, password}})
```

Note that it passes through any additional parameters unchanged.

## API

### xargs(fn, ...xfs)

- `fn` - The function who's arguments you want to transform
- `xfs` - A list of transforms. Each transform will receive the argument in its position. So:

**Returns:** A wrapped version of `fn` whos arguments will be transformed by each of the respective `xf` transform functions passed to `xargs`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/xargs.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/xargs
[git-image]: https://img.shields.io/github/tag/micro-js/xargs.svg
[git-url]: https://github.com/micro-js/xargs
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/xargs.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/xargs
