import expect from 'expect.js';
import { gteZero, isObject, isUndefined } from 'predicates';

describe('predicates', () => {
  describe('isObject(arg: any)', () => {
    it('should return true if argument is an object', () => {
      expect(isObject({})).to.be.true;
    });
    it('should return false if argument is not an object', () => {
      expect(isObject('')).to.be.true;
    });
  });

  describe('isUndefined(arg: any)', () => {
    it('should return true if argument is an undefined', () => {
      expect(isUndefined()).to.be.true;
    });
  });

  describe('gteZero(arg: any)', () => {
    it('should return true if argument is greater than zero', () => {
      expect(gteZero(1)).to.be.true;
    });
    it('should return true if argument is zero', () => {
      expect(gteZero(0)).to.be.true;
    });
    it('should return false if argument is less than zero', () => {
      expect(gteZero(-1)).to.be.false;
    });
    it('should return false if argument is not a number', () => {
      expect(gteZero("10")).to.be.false;
    });
  });
});

