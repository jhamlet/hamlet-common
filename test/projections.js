import expect from 'expect.js';
import { keys } from 'ramda';
import * as projections from 'projections';

describe('projections', () => {
  describe('emptyObject()', () => {
    it('should return an empty object', () => {
      const result = projections.emptyObject();
      expect(result).to.be.an.object;
      expect(result).to.eql({});
      expect(keys(result).length).to.equal(0);
    });
  });

  describe('emptyArray()', () => {
    it('should return an empty array', () => {
      const result = projections.emptyArray();
      expect(result).to.be.an.array;
      expect(result).to.eql([]);
      expect(result.length).to.equal(0);
    });
  });

  describe('defaultToEmptyArray(arg: null | undefined)', () => {
    it('should return an empty array', () => {
      [undefined, null].
        map(projections.defaultToEmptyArray).
        forEach(a =>
          expect(a).to.be.an.array && expect(a.length).to.equal(0)
        );
    });
  });

  describe('defaultToArray(arg: any)', () => {
    it('should return an array if given an array', () => {
      const expected = ['foo'];
      expect(projections.defaultToArray(expected)).to.equal(expected);
    });

    it('should return the value wrapped in array if not given an array', () => {
      ['foo', 5, {}, true, false].
        forEach(v => {
          const result = projections.defaultToArray(v);
          expect(result).to.be.an.array;
          expect(result[0]).to.equal(v);
        });
    });

    it('should return an empty array if given undefined or null', () => {
      [undefined, null].
        forEach(v => {
          const result = projections.defaultToArray(v);
          expect(result).to.be.an.array;
          expect(result.length).to.equal(0);
        });
    });
  });

  describe('upFirst(arg: string)', () => {
    it('should uppercase the first letter of a string', () => {
      expect(projections.upFirst('foo')).to.equal('Foo');
    });
  });

  describe('splitOnCapital(arg: string)', () => {
    it('should split Captial separated string into an array', () => {
      expect(projections.splitOnCapital('fooBar')).to.eql(['foo', 'Bar']);
    });
  });

  describe('splitOnDash(arg: string)', () => {
    it('should split dash separated string into an array', () => {
      expect(projections.splitOnDash('foo-bar')).to.eql(['foo', 'bar']);
    });
  });

  describe('splitOnUnderscore(arg: string)', () => {
    it('should split underscore separated string into an array', () => {
      expect(projections.splitOnUnderscore('foo_bar')).to.eql(['foo', 'bar']);
    });
  });

  describe('joinWithEmpty(arg: string)', () => {
    it(`should join an array with an empty separator`, () => {
      expect(projections.joinWithEmpty(['foo', 'Bar'])).to.eql('fooBar');
    });
  });

  describe('joinWithDash(arg: string)', () => {
    it('should join an array with a dash separator', () => {
      expect(projections.joinWithDash(['foo', 'bar'])).to.eql('foo-bar');
    });
  });

  describe('joinWithUnderscore(arg: string)', () => {
    it('should join an array with a underscore separator', () => {
      expect(projections.joinWithUnderscore(['foo', 'bar'])).to.eql('foo_bar');
    });
  });

  describe('allLower(list: string[])', () => {
    it('should lower case all elements', () => {
      expect(projections.allLower(['FOO', 'Bar'])).to.eql(['foo', 'bar']);
    });
  });

  describe('allToUpFirst(list: string[])', () => {
    it('should lower case all elements', () => {
      expect(projections.allToUpFirst(['foo', 'bar'])).to.eql(['Foo', 'Bar']);
    });
  });

  describe('camelToKabob(arg: string)', () => {
    it('should convert camelCase to kabob-case', () => {
      expect(projections.camelToKabob('fooBar')).to.equal('foo-bar');
    });
  });

  describe('camelToSnake(arg: string)', () => {
    it('should convert camelCase to snake_case', () => {
      expect(projections.camelToSnake('fooBar')).to.equal('foo_bar');
    });
  });

  describe('kabobToCamel(arg: string)', () => {
    it('should convert kabob-case to camelCase', () => {
      expect(projections.kabobToCamel('foo-bar')).to.equal('fooBar');
    });
  });

  describe('snakeToCamel(arg: string)', () => {
    it('should convert snake_case to camelCase', () => {
      expect(projections.snakeToCamel('foo_bar')).to.equal('fooBar');
    });
  });
});

