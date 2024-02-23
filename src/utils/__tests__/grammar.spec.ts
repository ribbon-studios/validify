import { Grammar } from '../grammar';

describe('utils(Grammar)', () => {
  describe('fn(or)', () => {
    it('should support one value', () => {
      expect(Grammar.or('hello')).toEqual('hello');
    });

    it('should support two values', () => {
      expect(Grammar.or('hello', 'world')).toEqual('hello or world');
    });

    it('should support any number of values', () => {
      expect(Grammar.or(...Array(3).fill('hello'))).toEqual('hello, hello, or hello');
    });
  });

  describe('fn(and)', () => {
    it('should support one value', () => {
      expect(Grammar.and('hello')).toEqual('hello');
    });

    it('should support two values', () => {
      expect(Grammar.and('hello', 'world')).toEqual('hello and world');
    });

    it('should support any number of values', () => {
      expect(Grammar.and(...Array(3).fill('hello'))).toEqual('hello, hello, and hello');
    });
  });
});
