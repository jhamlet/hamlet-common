import expect from 'expect';
import { gteZero, isObject, isUndefined } from '../src/predicates';

describe('predicates', () => {
  describe('isObject(arg: any)', () => {
    it('should return true if argument is an object', () => {
      expect(isObject({})).toBe(true);
    });
    it('should return false if argument is not an object', () => {
      expect(isObject('')).toBe(false);
    });
  });

  describe('isUndefined(arg: any)', () => {
    it('should return true if argument is undefined', () => {
      const arg = undefined;
      expect(isUndefined(arg)).toBe(true);
    });
  });

  describe('gteZero(arg: any)', () => {
    it('should return true if argument is greater than zero', () => {
      expect(gteZero(1)).toBe(true);
    });
    it('should return true if argument is zero', () => {
      expect(gteZero(0)).toBe(true);
    });
    it('should return false if argument is less than zero', () => {
      expect(gteZero(-1)).toBe(false);
    });
    it('should return false if argument is not a number', () => {
      expect(gteZero("10")).toBe(false);
    });
  });
});

