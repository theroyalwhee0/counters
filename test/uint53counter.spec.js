/**
 * @theroyalwhee0/counters:test/uint53Counter.spec.js
 */

/**
 * Imports.
 */
const { describe, it, expect } = require('./testing');
const { uint53Counter, UINT53MIN, UINT53MAX } = require('../src/index');

/**
 * Tests.
 */
describe('@theroyalwhee0/counter', () => {
  describe('uint53Counter', () => {
    it('should be a function', () => {
      expect(uint53Counter).to.be.a('function');
      expect(uint53Counter.length).to.equal(1);
    });
    it('should be create an iterable', () => {
      const iter = uint53Counter();
      expect(typeof iter).to.equal('object');
      expect(iter[Symbol.iterator]).to.be.a('function');
    });
    it('should generate a UINT53', () => {
      const iter = uint53Counter();
      const item1 = iter.next();
      expect(item1.value).to.equal(1);
      expect(item1.value).to.equal(UINT53MIN);
      expect(item1.done).to.equal(false);
      const item2 = iter.next();
      expect(item2.value).to.equal(2);
      expect(item2.done).to.equal(false);
    });
    it('should allow setting initial value', () => {
      const iter = uint53Counter({ initial: 1000 });
      const item1 = iter.next();
      expect(item1.value).to.equal(1000);
      expect(item1.done).to.equal(false);
      const item2 = iter.next();
      expect(item2.value).to.equal(1001);
      expect(item2.done).to.equal(false);
    });
    it('should accept numeric initial value', () => {
      const iter = uint53Counter(2000);
      const item1 = iter.next();
      expect(item1.value).to.equal(2000);
      expect(item1.done).to.equal(false);
    });
    it('should wrap at boundry', () => {
      const iter = uint53Counter({ initial: UINT53MAX });
      const item1 = iter.next();
      expect(item1.value).to.equal(UINT53MAX);
      expect(item1.done).to.equal(false);
      const item2 = iter.next();
      expect(item2.value).to.equal(UINT53MIN);
      expect(item2.done).to.equal(false);
    });
    it('should generate a series of values', () => {
      const iter = uint53Counter();
      let value = 0;
      for(let idx=0; idx < 10000; idx++) {
        const item = iter.next();
        expect(item.value).to.equal(value+1);
        expect(item.done).to.equal(false);
        expect(item.value).to.be.gte(UINT53MIN);
        expect(item.value).to.be.lte(UINT53MAX);
        value += 1;
      }
    });
  });
});
