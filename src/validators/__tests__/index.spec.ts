import {isAny, isDefined, isEqualTo, isNotEqualTo} from '..';

describe('Basic Validators', () => {
  describe('fn(isDefined)', () => {
    it('should return nothing if the value is defined', () => {
      expect(isDefined('hello')).toEqual(undefined);
    });

    it.each([undefined, null])('should return a reason if the value is %s', (value) => {
      expect(isDefined(value)).toEqual('is not defined');
    });
  });

  describe('fn(isEqualTo)', () => {
    it('should return nothing if the values are equivalent', () => {
      expect(isEqualTo('hello')('hello')).toEqual(undefined);
    });

    it('should return a reason if the values are not equivalent', () => {
      expect(isEqualTo('hello')('hallo')).toEqual('is not equal to "hello"');
    });
  });

  describe('fn(isNotEqualTo)', () => {
    it('should return nothing if the values are equivalent', () => {
      expect(isNotEqualTo('hello')('hallo')).toEqual(undefined);
    });

    it('should return a reason if the values are not equivalent', () => {
      expect(isNotEqualTo('hello')('hello')).toEqual('is equal to "hello"');
    });
  });

  describe('fn(isAny)', () => {
    it('should return nothing if the values are equivalent', () => {
      expect(isAny('hello', 'hallo')('hallo')).toEqual(undefined);
    });

    it('should return a reason if the values are not equivalent', () => {
      expect(isAny('hello')('hallo')).toEqual('is not equal to "hello"');
    });
  });
});
