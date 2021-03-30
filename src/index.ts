/**
 * @file Wrapping Numeric Counters
 * @version v0.0.3
 * @author Adam Mill <hismajesty@theroyalwhee.com>
 * @copyright Copyright 2021 Adam Mill
 * @license Apache-2.0
 */

import { isInteger } from '@theroyalwhee0/istype';

/**
 * Constants.
 * @private
 */
export const UINT8MIN = 1;
export const UINT8MAX = 255;                 // (2**8)-1;
export const UINT16MIN = 1;
export const UINT16MAX = 65535;              // (2**16)-1;
export const UINT32MIN = 1;
export const UINT32MAX = 4294967295;         // (2**32)-1;
export const UINT53MIN = 1;
export const UINT53MAX = 9007199254740991;   // (2**53)-1;

/**
 * Build Counter generators.
 * @param {number} min Minimum value.
 * @param {number} max Maximum value.
 * @param {number} step The step value.
 * @returns {generator} A wrapper counter generator.
 */
type CounterOption = (
  number | {
    initial?: number;
  }
);

export function counterFactory(min: number, max: number, step = 1) {
  return function* counter(options: CounterOption = {}): Generator<number, number, void> {
    if (isInteger(options)) {
      options = { initial: options };
    }
    const { initial = min } = options;
    let value = initial;
    while (1) {
      if (value > max) {
        value = min;
      }
      yield value;
      value += step;
    }
    /* istanbul ignore next */
    return;
  };
}

/**
 * Unsigned 8 bit Wrapping Counter.
 * @function uint8Counter
 * @param {object|number} options If a number it is used as options.initial.
 * @param {number} options.initial The initial number. Defaults to 1.
 * @yields {number} Number from 1 to 255 wrapping when the max value is exceeded.
 */
export const uint8Counter = counterFactory(UINT8MIN, UINT8MAX);

/**
 * Unsigned 16 bit Wrapping Counter.
 * @function uint16Counter
 * @param {object|number} options If a number it is used as options.initial.
 * @param {number} options.initial The initial number. Defaults to 1.
 * @yields {number} Number from 1 to 65535 wrapping when the max value is exceeded.
 */
export const uint16Counter = counterFactory(UINT16MIN, UINT16MAX);

/**
 * Unsigned 32 bit Wrapping Counter.
 * @function uint32Counter
 * @param {object|number} options If a number it is used as options.initial.
 * @param {number} options.initial The initial number. Defaults to 1.
 * @yields {number} Number from 1 to 4294967295 wrapping when the max value is exceeded.
 */
export const uint32Counter = counterFactory(UINT32MIN, UINT32MAX);

/**
 * Unsigned 53 bit Wrapping Counter.
 * @function uint53Counter
 * @param {object|number} options If a number it is used as options.initial.
 * @param {number} options.initial The initial number. Defaults to 1.
 * @yields {number} Number from 1 to 9007199254740991 wrapping when the max value is exceeded.
 */
export const uint53Counter = counterFactory(UINT53MIN, UINT53MAX);
