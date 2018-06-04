import expect from 'expect';
import createDebug from '../src/debug';

describe('debug', () => {
  let debug;

  before(() => debug = createDebug('test'));

  it('should be a function', () => {
    expect(debug).toBeInstanceOf(Function);
  });

  it(`should have 'log', 'info', 'warn', and 'error' functions`, () => {
    ['log', 'info', 'warn', 'error'].
      forEach(key => {
        expect(debug).toHaveProperty(key);
        expect(debug[key]).toBeInstanceOf(Function);
      });
  });
});

