/**
 * @theroyalwhee0/counters:test/uint8Counter.test.ts
 */

/**
 * Imports.
 */
import { uint8Counter, UINT8MIN, UINT8MAX } from '../src/index.js';

/**
 * Tests.
 */
test('uint8Counter should be a function', () => {
  expect(uint8Counter).toBeInstanceOf(Function);
  expect(uint8Counter.length).toBe(0);
});

test('uint8Counter should be create an iterable', () => {
  const iter = uint8Counter();
  expect(typeof iter).toBe('object');
  expect(iter[Symbol.iterator]).toBeInstanceOf(Function);
});
test('uint8Counter should generate a UINT8', () => {
  const iter = uint8Counter();
  const item1 = iter.next();
  expect(item1.value).toBe(1);
  expect(item1.value).toBe(UINT8MIN);
  expect(item1.done).toBe(false);
  const item2 = iter.next();
  expect(item2.value).toBe(2);
  expect(item2.done).toBe(false);
});

test('uint8Counter should allow setting initial value', () => {
  const iter = uint8Counter({ initial: 200 });
  const item1 = iter.next();
  expect(item1.value).toBe(200);
  expect(item1.done).toBe(false);
  const item2 = iter.next();
  expect(item2.value).toBe(201);
  expect(item2.done).toBe(false);
});

test('uint8Counter should accept numeric initial value', () => {
  const iter = uint8Counter(150);
  const item1 = iter.next();
  expect(item1.value).toBe(150);
  expect(item1.done).toBe(false);
});

test('uint8Counter should wrap at boundry', () => {
  const iter = uint8Counter({ initial: UINT8MAX });
  const item1 = iter.next();
  expect(item1.value).toBe(UINT8MAX);
  expect(item1.done).toBe(false);
  const item2 = iter.next();
  expect(item2.value).toBe(UINT8MIN);
  expect(item2.done).toBe(false);
});

test('uint8Counter should generate a series of values', () => {
  const iter = uint8Counter();
  let value = 0;
  for (let idx = 0; idx < 250; idx++) {
    const item = iter.next();
    expect(item.value).toBe(value + 1);
    expect(item.done).toBe(false);
    expect(item.value).toBeGreaterThanOrEqual(UINT8MIN);
    expect(item.value).toBeLessThanOrEqual(UINT8MAX);
    value += 1;
  }
});
