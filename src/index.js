/**
 * @file Wrapping Numeric Counters
 * @version v0.0.2
 * @author Adam Mill <hismajesty@theroyalwhee.com>
 * @copyright Copyright 2021 Adam Mill
 * @license Apache-2.0
 */

/**
 * Imports.
 */
const { isInteger } = require('@theroyalwhee0/istype');

/**
 * Constants.
 * @private
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
 * Build Counter generators.
 * @param {number} min Minimum value.
 * @param {number} max Maximum value.
 * @param {number} step The step value.
 * @returns {generator} A wrapper counter generator.
 */
function counterFactory(min, max, step=1) {
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
      value += step;
    }
  };
}

/**
 * Unsigned 8 bit Wrapping Counter.
 * @function uint8Counter
 * @param {object|number} options If a number it is used as options.initial.
 * @param {number} options.initial The initial number. Defaults to 1.
 * @yields {number} Number from 1 to 255 wrapping when the max value is exceeded.
 */
const uint8Counter = counterFactory(UINT8MIN, UINT8MAX);


/**
 * Unsigned 16 bit Wrapping Counter.
 * @function uint16Counter
 * @param {object|number} options If a number it is used as options.initial.
 * @param {number} options.initial The initial number. Defaults to 1.
 * @yields {number} Number from 1 to 65535 wrapping when the max value is exceeded.
 */
const uint16Counter = counterFactory(UINT16MIN, UINT16MAX);

/**
 * Unsigned 32 bit Wrapping Counter.
 * @function uint32Counter
 * @param {object|number} options If a number it is used as options.initial.
 * @param {number} options.initial The initial number. Defaults to 1.
 * @yields {number} Number from 1 to 4294967295 wrapping when the max value is exceeded.
 */
const uint32Counter = counterFactory(UINT32MIN, UINT32MAX);

/**
 * Unsigned 53 bit Wrapping Counter.
 * @function uint53Counter
 * @param {object|number} options If a number it is used as options.initial.
 * @param {number} options.initial The initial number. Defaults to 1.
 * @yields {number} Number from 1 to 9007199254740991 wrapping when the max value is exceeded.
 */
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
  // General.
  counterFactory,
  // Generators.
  uint8Counter,
  uint16Counter,
  uint32Counter,
  uint53Counter,
};
