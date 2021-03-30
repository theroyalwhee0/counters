/**
 * @file Wrapping Numeric Counters
 * @version v0.0.3
 * @author Adam Mill <hismajesty@theroyalwhee.com>
 * @copyright Copyright 2021 Adam Mill
 * @license Apache-2.0
 */
/**
 * Constants.
 * @private
 */
export declare const UINT8MIN = 1;
export declare const UINT8MAX = 255;
export declare const UINT16MIN = 1;
export declare const UINT16MAX = 65535;
export declare const UINT32MIN = 1;
export declare const UINT32MAX = 4294967295;
export declare const UINT53MIN = 1;
export declare const UINT53MAX = 9007199254740991;
/**
 * Build Counter generators.
 * @param {number} min Minimum value.
 * @param {number} max Maximum value.
 * @param {number} step The step value.
 * @returns {generator} A wrapper counter generator.
 */
declare type CounterOption = (number | {
    initial?: number;
});
export declare function counterFactory(min: number, max: number, step?: number): (options?: CounterOption) => Generator<number, number, void>;
/**
 * Unsigned 8 bit Wrapping Counter.
 * @function uint8Counter
 * @param {object|number} options If a number it is used as options.initial.
 * @param {number} options.initial The initial number. Defaults to 1.
 * @yields {number} Number from 1 to 255 wrapping when the max value is exceeded.
 */
export declare const uint8Counter: (options?: CounterOption) => Generator<number, number, void>;
/**
 * Unsigned 16 bit Wrapping Counter.
 * @function uint16Counter
 * @param {object|number} options If a number it is used as options.initial.
 * @param {number} options.initial The initial number. Defaults to 1.
 * @yields {number} Number from 1 to 65535 wrapping when the max value is exceeded.
 */
export declare const uint16Counter: (options?: CounterOption) => Generator<number, number, void>;
/**
 * Unsigned 32 bit Wrapping Counter.
 * @function uint32Counter
 * @param {object|number} options If a number it is used as options.initial.
 * @param {number} options.initial The initial number. Defaults to 1.
 * @yields {number} Number from 1 to 4294967295 wrapping when the max value is exceeded.
 */
export declare const uint32Counter: (options?: CounterOption) => Generator<number, number, void>;
/**
 * Unsigned 53 bit Wrapping Counter.
 * @function uint53Counter
 * @param {object|number} options If a number it is used as options.initial.
 * @param {number} options.initial The initial number. Defaults to 1.
 * @yields {number} Number from 1 to 9007199254740991 wrapping when the max value is exceeded.
 */
export declare const uint53Counter: (options?: CounterOption) => Generator<number, number, void>;
export {};
