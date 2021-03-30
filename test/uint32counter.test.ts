/**
 * @theroyalwhee0/counters:test/uint32counter.spec.js
 */

/**
 * Imports.
 */
import { uint32Counter, UINT32MIN, UINT32MAX } from '../src/index.js';

/**
 * Tests.
 */

test('uint32Counter should be a function', () => {
  expect(uint32Counter).toBeInstanceOf(Function);
  expect(uint32Counter.length).toBe(0);
});

test('uint32Counter should be create an iterable', () => {
  const iter = uint32Counter();
  expect(typeof iter).toBe('object');
  expect(iter[Symbol.iterator]).toBeInstanceOf(Function);
});

test('uint32Counter should generate a uint32', () => {
  const iter = uint32Counter();
  const item1 = iter.next();
  expect(item1.value).toBe(1);
  expect(item1.value).toBe(UINT32MIN);
  expect(item1.done).toBe(false);
  const item2 = iter.next();
  expect(item2.value).toBe(2);
  expect(item2.done).toBe(false);
});

test('uint32Counter should allow setting initial value', () => {
  const iter = uint32Counter({ initial: 1000 });
  const item1 = iter.next();
  expect(item1.value).toBe(1000);
  expect(item1.done).toBe(false);
  const item2 = iter.next();
  expect(item2.value).toBe(1001);
  expect(item2.done).toBe(false);
});

test('uint32Counter should accept numeric initial value', () => {
  const iter = uint32Counter(2000);
  const item1 = iter.next();
  expect(item1.value).toBe(2000);
  expect(item1.done).toBe(false);
});

test('uint32Counter should wrap at boundry', () => {
  const iter = uint32Counter({ initial: UINT32MAX });
  const item1 = iter.next();
  expect(item1.value).toBe(UINT32MAX);
  expect(item1.done).toBe(false);
  const item2 = iter.next();
  expect(item2.value).toBe(UINT32MIN);
  expect(item2.done).toBe(false);
});

test('uint32Counter should generate a series of values', () => {
  const iter = uint32Counter();
  let value = 0;
  for (let idx = 0; idx < 10000; idx++) {
    const item = iter.next();
    expect(item.value).toBe(value + 1);
    expect(item.done).toBe(false);
    expect(item.value).toBeGreaterThanOrEqual(UINT32MIN);
    expect(item.value).toBeLessThanOrEqual(UINT32MAX);
    value += 1;
  }
});
