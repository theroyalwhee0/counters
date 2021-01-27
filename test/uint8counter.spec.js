/**
 * @theroyalwhee0/counters:test/uint8Counter.spec.js
 */

/**
 * Imports.
 */
const { describe, it, expect } = require('./testing');
const { uint8Counter, UINT8MIN, UINT8MAX } = require('../src/index');

/**
 * Tests.
 */
describe('@theroyalwhee0/counter', () => {
  describe('uint8Counter', () => {
    it('should be a function', () => {
      expect(uint8Counter).to.be.a('function');
      expect(uint8Counter.length).to.equal(1);
    });
    it('should be create an iterable', () => {
      const iter = uint8Counter();
      expect(typeof iter).to.equal('object');
      expect(iter[Symbol.iterator]).to.be.a('function');
    });
    it('should generate a UINT8', () => {
      const iter = uint8Counter();
      const item1 = iter.next();
      expect(item1.value).to.equal(1);
      expect(item1.value).to.equal(UINT8MIN);
      expect(item1.done).to.equal(false);
      const item2 = iter.next();
      expect(item2.value).to.equal(2);
      expect(item2.done).to.equal(false);
    });
    it('should allow setting initial value', () => {
      const iter = uint8Counter({ initial: 200 });
      const item1 = iter.next();
      expect(item1.value).to.equal(200);
      expect(item1.done).to.equal(false);
      const item2 = iter.next();
      expect(item2.value).to.equal(201);
      expect(item2.done).to.equal(false);
    });
    it('should accept numeric initial value', () => {
      const iter = uint8Counter(150);
      const item1 = iter.next();
      expect(item1.value).to.equal(150);
      expect(item1.done).to.equal(false);
    });
    it('should wrap at boundry', () => {
      const iter = uint8Counter({ initial: UINT8MAX });
      const item1 = iter.next();
      expect(item1.value).to.equal(UINT8MAX);
      expect(item1.done).to.equal(false);
      const item2 = iter.next();
      expect(item2.value).to.equal(UINT8MIN);
      expect(item2.done).to.equal(false);
    });
    it('should generate a series of values', () => {
      const iter = uint8Counter();
      let value = 0;
      for(let idx=0; idx < 250; idx++) {
        const item = iter.next();
        expect(item.value).to.equal(value+1);
        expect(item.done).to.equal(false);
        expect(item.value).to.be.gte(UINT8MIN);
        expect(item.value).to.be.lte(UINT8MAX);
        value += 1;
      }
    });
  });
});
