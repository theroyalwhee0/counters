/**
 * @theroyalwhee0/counter:src/index.js
 */

/**
 * Imports.
 */
const { isInteger } = require('@theroyalwhee0/istype');

/**
 * Constants.
 */
const UINT8MIN = 1;
const UINT8MAX = 255;                 // (2**8)-1;
const UINT16MIN = 1;
const UINT16MAX = 65535;              // (2**16)-1;
const UINT32MIN = 1;
const UINT32MAX = 4294967295;         // (2**32)-1;
const UINT53MIN = 1;
const UINT53MAX = 9007199254740991;   // (2**53)-1;

/**
 * Build counter generators.
 * @param {number} min Minimum value.
 * @param {number} max Maximum value.
 * @return {function*} A generator function.
 */
function counterFactory(min, max) {
  return function* counter(options) {
    if(isInteger(options)) {
      options = { initial: options };
    }
    const { initial=min } = options || {};
    let value = initial;
    while(1) {
      if(value > max) {
        value = min;
      }
      yield value;
      value += 1;
    }
  };
}

/**
 * Various Counter generators.
 */
const uint8Counter = counterFactory(UINT8MIN, UINT8MAX);
const uint16Counter = counterFactory(UINT16MIN, UINT16MAX);
const uint32Counter = counterFactory(UINT32MIN, UINT32MAX);
const uint53Counter = counterFactory(UINT53MIN, UINT53MAX);

/**
 * Exports.
 */
module.exports = {
  // Min/Max constants.
  UINT8MIN, UINT8MAX,
  UINT16MIN, UINT16MAX,
  UINT32MIN, UINT32MAX,
  UINT53MIN, UINT53MAX,
  // Generators.
  uint8Counter,
  uint16Counter,
  uint32Counter,
  uint53Counter,
};
