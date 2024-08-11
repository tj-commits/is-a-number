# is-a-number
[`is-number`](https://github.com/jonschlinkert/is-number) is trash. jonschlinkert will never listen to the PRs and optimization issues. Well, `is-a-number` is here to fix that. I will listen to your pull requests! And there is other features too.

### Installation
NPM:
`npm i is-a-number`

Yarn:
`yarn add is-a-number`

PNPM:
`pnpm add is-a-number`

### Usage
```javascript
const isNumber = require('is-actual-number')
console.log(isNumber(1)) // true
console.log(isNumber('1', { allowNumberStrings: false })) // false
console.log(isNumber('1')) // true
console.log(isNumber(Infinity)) // false
console.log(isNumber(Infinity, { allowInfinite: true })) // true
```