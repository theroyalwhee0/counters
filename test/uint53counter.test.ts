/**
 * @theroyalwhee0/counters:test/uint53Counter.spec.js
 */

/**
 * Imports.
 */
import { uint53Counter, UINT53MIN, UINT53MAX } from '../src/index';

/**
 * Tests.
 */
test('uint53Counter should be a function', () => {
  expect(uint53Counter).toBeInstanceOf(Function);
  expect(uint53Counter.length).toBe(0);
});

test('uint53Counter should be create an iterable', () => {
  const iter = uint53Counter();
  expect(typeof iter).toBe('object');
  expect(iter[Symbol.iterator]).toBeInstanceOf(Function);
});

test('uint53Counter should generate a UINT53', () => {
  const iter = uint53Counter();
  const item1 = iter.next();
  expect(item1.value).toBe(1);
  expect(item1.value).toBe(UINT53MIN);
  expect(item1.done).toBe(false);
  const item2 = iter.next();
  expect(item2.value).toBe(2);
  expect(item2.done).toBe(false);
});

test('uint53Counter should allow setting initial value', () => {
  const iter = uint53Counter({ initial: 1000 });
  const item1 = iter.next();
  expect(item1.value).toBe(1000);
  expect(item1.done).toBe(false);
  const item2 = iter.next();
  expect(item2.value).toBe(1001);
  expect(item2.done).toBe(false);
});

test('uint53Counter should accept numeric initial value', () => {
  const iter = uint53Counter(2000);
  const item1 = iter.next();
  expect(item1.value).toBe(2000);
  expect(item1.done).toBe(false);
});

test('uint53Counter should wrap at boundry', () => {
  const iter = uint53Counter({ initial: UINT53MAX });
  const item1 = iter.next();
  expect(item1.value).toBe(UINT53MAX);
  expect(item1.done).toBe(false);
  const item2 = iter.next();
  expect(item2.value).toBe(UINT53MIN);
  expect(item2.done).toBe(false);
});

test('uint53Counter should generate a series of values', () => {
  const iter = uint53Counter();
  let value = 0;
  for (let idx = 0; idx < 10000; idx++) {
    const item = iter.next();
    expect(item.value).toBe(value + 1);
    expect(item.done).toBe(false);
    expect(item.value).toBeGreaterThanOrEqual(UINT53MIN);
    expect(item.value).toBeLessThanOrEqual(UINT53MAX);
    value += 1;
  }
});
