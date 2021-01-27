/**
 * @theroyalwhee0/counters:test/uint16Counter.spec.js
 */

/**
 * Imports.
 */
const { describe, it, expect } = require('./testing');
const { uint16Counter, UINT16MIN, UINT16MAX } = require('../src/index');

/**
 * Tests.
 */
describe('@theroyalwhee0/counter', () => {
  describe('uint16Counter', () => {
    it('should be a function', () => {
      expect(uint16Counter).to.be.a('function');
      expect(uint16Counter.length).to.equal(1);
    });
    it('should be create an iterable', () => {
      const iter = uint16Counter();
      expect(typeof iter).to.equal('object');
      expect(iter[Symbol.iterator]).to.be.a('function');
    });
    it('should generate a UINT16', () => {
      const iter = uint16Counter();
      const item1 = iter.next();
      expect(item1.value).to.equal(1);
      expect(item1.value).to.equal(UINT16MIN);
      expect(item1.done).to.equal(false);
      const item2 = iter.next();
      expect(item2.value).to.equal(2);
      expect(item2.done).to.equal(false);
    });
    it('should allow setting initial value', () => {
      const iter = uint16Counter({ initial: 1000 });
      const item1 = iter.next();
      expect(item1.value).to.equal(1000);
      expect(item1.done).to.equal(false);
      const item2 = iter.next();
      expect(item2.value).to.equal(1001);
      expect(item2.done).to.equal(false);
    });
    it('should accept numeric initial value', () => {
      const iter = uint16Counter(2000);
      const item1 = iter.next();
      expect(item1.value).to.equal(2000);
      expect(item1.done).to.equal(false);
    });
    it('should wrap at boundry', () => {
      const iter = uint16Counter({ initial: UINT16MAX });
      const item1 = iter.next();
      expect(item1.value).to.equal(UINT16MAX);
      expect(item1.done).to.equal(false);
      const item2 = iter.next();
      expect(item2.value).to.equal(UINT16MIN);
      expect(item2.done).to.equal(false);
    });
    it('should generate a series of values', () => {
      const iter = uint16Counter();
      let value = 0;
      for(let idx=0; idx < 10000; idx++) {
        const item = iter.next();
        expect(item.value).to.equal(value+1);
        expect(item.done).to.equal(false);
        expect(item.value).to.be.gte(UINT16MIN);
        expect(item.value).to.be.lte(UINT16MAX);
        value += 1;
      }
    });
  });
});
