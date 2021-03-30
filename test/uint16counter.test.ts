/**
 * @theroyalwhee0/counters:test/uint16Counter.spec.js
 */

/**
 * Imports.
 */
import { uint16Counter, UINT16MIN, UINT16MAX } from '../src/index.js';

/**
 * Tests.
 */
test('uint16Counter should be a function', () => {
  expect(uint16Counter).toBeInstanceOf(Function);
  expect(uint16Counter.length).toBe(0);
});

test('uint16Counter should be create an iterable', () => {
  const iter = uint16Counter();
  expect(typeof iter).toBe('object');
  expect(iter[Symbol.iterator]).toBeInstanceOf(Function);
});

test('uint16Counter should generate a UINT16', () => {
  const iter = uint16Counter();
  const item1 = iter.next();
  expect(item1.value).toBe(1);
  expect(item1.value).toBe(UINT16MIN);
  expect(item1.done).toBe(false);
  const item2 = iter.next();
  expect(item2.value).toBe(2);
  expect(item2.done).toBe(false);
});

test('uint16Counter should allow setting initial value', () => {
  const iter = uint16Counter({ initial: 1000 });
  const item1 = iter.next();
  expect(item1.value).toBe(1000);
  expect(item1.done).toBe(false);
  const item2 = iter.next();
  expect(item2.value).toBe(1001);
  expect(item2.done).toBe(false);
});

test('uint16Counter should accept numeric initial value', () => {
  const iter = uint16Counter(2000);
  const item1 = iter.next();
  expect(item1.value).toBe(2000);
  expect(item1.done).toBe(false);
});

test('uint16Counter should wrap at boundry', () => {
  const iter = uint16Counter({ initial: UINT16MAX });
  const item1 = iter.next();
  expect(item1.value).toBe(UINT16MAX);
  expect(item1.done).toBe(false);
  const item2 = iter.next();
  expect(item2.value).toBe(UINT16MIN);
  expect(item2.done).toBe(false);
});

test('uint16Counter should generate a series of values', () => {
  const iter = uint16Counter();
  let value = 0;
  for (let idx = 0; idx < 10000; idx++) {
    const item = iter.next();
    expect(item.value).toBe(value + 1);
    expect(item.done).toBe(false);
    expect(item.value).toBeGreaterThanOrEqual(UINT16MIN);
    expect(item.value).toBeLessThanOrEqual(UINT16MAX);
    value += 1;
  }
});
