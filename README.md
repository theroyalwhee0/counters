# @theroyalwhee0/counters

## Wrapping Numeric Counters
Creates iterable sequences of 8/16/32/53 bits wrapping when the maximum value is exceeded. The sequences start at 1 (instead of 0) to prevent usage errors.

## Installation
`npm install @theroyalwhee0/counters`

*or*

`yarn add @theroyalwhee0/counters`


## Documentation
[API Documentation](https://theroyalwhee0.github.io/counters/)


## Usage
```
const { uint8Counter } = require('./index');
const counter = uint8Counter();
let item = counter.next();
console.log(`${item.value} should be 1`);
item = counter.next();
console.log(`${item.value} should now be 2`);
for(let idx=0; idx < 255; idx++) {
  item = counter.next();
  console.log(`${idx} = ${item.value}`);
}
```

## Testing.
Running ```npm run test``` will run the test suite. Running ```npm run test-watch``` will run the test suite in watch mode.


## Links
- GitHub: https://github.com/theroyalwhee0/counters
- NPM: https://www.npmjs.com/package/@theroyalwhee0/counters


## History
- v1.0.0 - 2022-06-02
  - Bump depends for security.
- v0.0.3 - 2021-03-30
  - Port to TypeScript.
- v0.0.2
  - Change docs to not have date.
- v0.0.1 2021-01-27
  - Initial release.


## Legal & License
Copyright 2021-2022 Adam Mill

This library is released under Apache 2 license. See [LICENSE](https://github.com/theroyalwhee0/dynasty/blob/master/LICENSE) for more details.
