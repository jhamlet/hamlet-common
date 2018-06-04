import expect from 'expect';
import { keys } from 'ramda';
import * as projections from '../src/projections';

describe('projections', () => {
  describe('emptyObject()', () => {
    it('should return an empty object', () => {
      const result = projections.emptyObject();
      expect(result).toBeInstanceOf(Object);
      expect(keys(result).length).toEqual(0);
    });
  });

  describe('emptyArray()', () => {
    it('should return an empty array', () => {
      const result = projections.emptyArray();
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toEqual(0);
    });
  });

  describe('defaultToEmptyArray(arg: null | undefined)', () => {
    it('should return an empty array', () => {
      [undefined, null].
        map(projections.defaultToEmptyArray).
        forEach(a =>
          expect(a).toBeInstanceOf(Array) && expect(a.length).toEqual(0)
        );
    });
  });

  describe('defaultToArray(arg: any)', () => {
    it('should return an array if given an array', () => {
      const expected = ['foo'];
      expect(projections.defaultToArray(expected)).toEqual(expected);
    });

    it('should return the value wrapped in array if not given an array', () => {
      ['foo', 5, {}, true, false].
        forEach(v => {
          const result = projections.defaultToArray(v);
          expect(result).toBeInstanceOf(Array);
          expect(result[0]).toEqual(v);
        });
    });

    it('should return an empty array if given undefined or null', () => {
      [undefined, null].
        forEach(v => {
          const result = projections.defaultToArray(v);
          expect(result).toBeInstanceOf(Array);
          expect(result.length).toEqual(0);
        });
    });
  });

  describe('upFirst(arg: string)', () => {
    it('should uppercase the first letter of a string', () => {
      expect(projections.upFirst('foo')).toEqual('Foo');
    });
  });

  describe('splitOnCapital(arg: string)', () => {
    it('should split Captial separated string into an array', () => {
      expect(projections.splitOnCapital('fooBar')).toEqual(['foo', 'Bar']);
    });
  });

  describe('splitOnDash(arg: string)', () => {
    it('should split dash separated string into an array', () => {
      expect(projections.splitOnDash('foo-bar')).toEqual(['foo', 'bar']);
    });
  });

  describe('splitOnUnderscore(arg: string)', () => {
    it('should split underscore separated string into an array', () => {
      expect(projections.splitOnUnderscore('foo_bar')).toEqual(['foo', 'bar']);
    });
  });

  describe('joinWithEmpty(arg: string)', () => {
    it(`should join an array with an empty separator`, () => {
      expect(projections.joinWithEmpty(['foo', 'Bar'])).toEqual('fooBar');
    });
  });

  describe('joinWithDash(arg: string)', () => {
    it('should join an array with a dash separator', () => {
      expect(projections.joinWithDash(['foo', 'bar'])).toEqual('foo-bar');
    });
  });

  describe('joinWithUnderscore(arg: string)', () => {
    it('should join an array with a underscore separator', () => {
      expect(projections.joinWithUnderscore(['foo', 'bar'])).toEqual('foo_bar');
    });
  });

  describe('allLower(list: string[])', () => {
    it('should lower case all elements', () => {
      expect(projections.allLower(['FOO', 'Bar'])).toEqual(['foo', 'bar']);
    });
  });

  describe('allToUpFirst(list: string[])', () => {
    it('should lower case all elements', () => {
      expect(projections.allToUpFirst(['foo', 'bar'])).toEqual(['Foo', 'Bar']);
    });
  });

  describe('camelToKabob(arg: string)', () => {
    it('should convert camelCase to kabob-case', () => {
      expect(projections.camelToKabob('fooBar')).toEqual('foo-bar');
    });
  });

  describe('camelToSnake(arg: string)', () => {
    it('should convert camelCase to snake_case', () => {
      expect(projections.camelToSnake('fooBar')).toEqual('foo_bar');
    });
  });

  describe('kabobToCamel(arg: string)', () => {
    it('should convert kabob-case to camelCase', () => {
      expect(projections.kabobToCamel('foo-bar')).toEqual('fooBar');
    });
  });

  describe('snakeToCamel(arg: string)', () => {
    it('should convert snake_case to camelCase', () => {
      expect(projections.snakeToCamel('foo_bar')).toEqual('fooBar');
    });
  });
});

