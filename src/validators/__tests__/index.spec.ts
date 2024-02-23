import { isAny, isDefined, isEqualTo, isLength, isNotEqualTo, isNotLength, isWithinLength } from '..';

describe('Basic Validators', () => {
  describe('fn(isLength)', () => {
    it('should return nothing if the strings length is equal to the expected length', () => {
      expect(isLength(5)('hello')).toEqual(undefined);
    });

    it('should return nothing if the arrays length is equal to the expected length', () => {
      expect(isLength(0)([])).toEqual(undefined);
    });

    it('should return a reason if the values length is not equal to the expected length', () => {
      expect(isLength(0)('hello')).toEqual('has length not equal to "0"');
    });
  });

  describe('fn(isNotLength)', () => {
    it('should return nothing if the strings length is not equal to the expected length', () => {
      expect(isNotLength(4)('hello')).toEqual(undefined);
    });

    it('should return nothing if the arrays length is not equal to the expected length', () => {
      expect(isNotLength(1)([])).toEqual(undefined);
    });

    it('should return a reason if the values length is equal to the expected length', () => {
      expect(isNotLength(5)('hello')).toEqual('has length equal to "5"');
    });
  });

  describe('fn(isWithinLength)', () => {
    it('should return nothing if the values length is equal to the expected length', () => {
      expect(isWithinLength(5)('hello')).toEqual(undefined);
    });

    it('should return nothing if the values length is less than the expected length', () => {
      expect(isWithinLength(5)('hel')).toEqual(undefined);
    });

    it('should return a reason if the values length is greater than the expected length', () => {
      expect(isWithinLength(4)('hello')).toEqual('exceeds max length of "4"');
    });
  });

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
