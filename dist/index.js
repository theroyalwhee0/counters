"use strict";
/**
 * @file Wrapping Numeric Counters
 * @version v0.0.3
 * @author Adam Mill <hismajesty@theroyalwhee.com>
 * @copyright Copyright 2021 Adam Mill
 * @license Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.uint53Counter = exports.uint32Counter = exports.uint16Counter = exports.uint8Counter = exports.counterFactory = exports.UINT53MAX = exports.UINT53MIN = exports.UINT32MAX = exports.UINT32MIN = exports.UINT16MAX = exports.UINT16MIN = exports.UINT8MAX = exports.UINT8MIN = void 0;
const istype_1 = require("@theroyalwhee0/istype");
/**
 * Constants.
 * @private
 */
exports.UINT8MIN = 1;
exports.UINT8MAX = 255; // (2**8)-1;
exports.UINT16MIN = 1;
exports.UINT16MAX = 65535; // (2**16)-1;
exports.UINT32MIN = 1;
exports.UINT32MAX = 4294967295; // (2**32)-1;
exports.UINT53MIN = 1;
exports.UINT53MAX = 9007199254740991; // (2**53)-1;
function counterFactory(min, max, step = 1) {
    return function* counter(options = {}) {
        if (istype_1.isInteger(options)) {
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
exports.counterFactory = counterFactory;
/**
 * Unsigned 8 bit Wrapping Counter.
 * @function uint8Counter
 * @param {object|number} options If a number it is used as options.initial.
 * @param {number} options.initial The initial number. Defaults to 1.
 * @yields {number} Number from 1 to 255 wrapping when the max value is exceeded.
 */
exports.uint8Counter = counterFactory(exports.UINT8MIN, exports.UINT8MAX);
/**
 * Unsigned 16 bit Wrapping Counter.
 * @function uint16Counter
 * @param {object|number} options If a number it is used as options.initial.
 * @param {number} options.initial The initial number. Defaults to 1.
 * @yields {number} Number from 1 to 65535 wrapping when the max value is exceeded.
 */
exports.uint16Counter = counterFactory(exports.UINT16MIN, exports.UINT16MAX);
/**
 * Unsigned 32 bit Wrapping Counter.
 * @function uint32Counter
 * @param {object|number} options If a number it is used as options.initial.
 * @param {number} options.initial The initial number. Defaults to 1.
 * @yields {number} Number from 1 to 4294967295 wrapping when the max value is exceeded.
 */
exports.uint32Counter = counterFactory(exports.UINT32MIN, exports.UINT32MAX);
/**
 * Unsigned 53 bit Wrapping Counter.
 * @function uint53Counter
 * @param {object|number} options If a number it is used as options.initial.
 * @param {number} options.initial The initial number. Defaults to 1.
 * @yields {number} Number from 1 to 9007199254740991 wrapping when the max value is exceeded.
 */
exports.uint53Counter = counterFactory(exports.UINT53MIN, exports.UINT53MAX);
//# sourceMappingURL=index.js.map