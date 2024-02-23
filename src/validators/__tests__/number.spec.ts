import {
  isBetween,
  isBetweenInclusive,
  isDecimals,
  isGreaterThan,
  isGreaterThanOrEqualTo,
  isLessThan,
  isLessThanOrEqualTo,
} from '../number';

describe('validators(number)', () => {
  describe('fn(isDecimals)', () => {
    it('should return nothing if the number of decimals is equal to the expected count', () => {
      expect(isDecimals(2)(10.12)).toEqual(undefined);
    });

    it('should return nothing if the number of decimals is less than the expected count', () => {
      expect(isDecimals(2)(10.1)).toEqual(undefined);
    });

    it('should return a reason if the number of decimals is greater than the expected count', () => {
      expect(isDecimals(2)(10.123)).toEqual('exceeds decimal count of "2"');
    });

    it.each([undefined, null])('should return nothing if the value is %s', (value) => {
      expect(isDecimals(5)(value)).toEqual(undefined);
    });
  });

  describe('fn(isBetween)', () => {
    it('should return nothing if the number is greater than the minimum and less than the maximum', () => {
      expect(isBetween(0, 5)(1)).toEqual(undefined);
    });

    it('should return a reason if the number is equal to the minimum', () => {
      expect(isBetween(0, 5)(0)).toEqual('is equal to "0"');
    });

    it('should return a reason if the number is equal to the maximum', () => {
      expect(isBetween(0, 5)(5)).toEqual('is equal to "5"');
    });

    it('should return a reason if the number is less than the minimum', () => {
      expect(isBetween(0, 5)(-1)).toEqual('is less than "0"');
    });

    it('should return a reason if the number is less than the minimum', () => {
      expect(isBetween(0, 5)(6)).toEqual('is greater than "5"');
    });

    it.each([undefined, null])('should return nothing if the value is %s', (value) => {
      expect(isBetween(0, 5)(value)).toEqual(undefined);
    });
  });

  describe('fn(isBetweenInclusive)', () => {
    it('should return nothing if the number is greater than the minimum and less than the maximum', () => {
      expect(isBetweenInclusive(0, 5)(1)).toEqual(undefined);
    });

    it('should return nothing if the number is equal to the minimum', () => {
      expect(isBetweenInclusive(0, 5)(0)).toEqual(undefined);
    });

    it('should return nothing if the number is equal to the maximum', () => {
      expect(isBetweenInclusive(0, 5)(5)).toEqual(undefined);
    });

    it('should return a reason if the number is less than the minimum', () => {
      expect(isBetweenInclusive(0, 5)(-1)).toEqual('is less than "0"');
    });

    it('should return a reason if the number is less than the minimum', () => {
      expect(isBetweenInclusive(0, 5)(6)).toEqual('is greater than "5"');
    });

    it.each([undefined, null])('should return nothing if the value is %s', (value) => {
      expect(isBetweenInclusive(0, 5)(value)).toEqual(undefined);
    });
  });

  describe('fn(isGreaterThan)', () => {
    it('should return nothing if the number is greater than the minimum', () => {
      expect(isGreaterThan(0)(1)).toEqual(undefined);
    });

    it('should return a reason if the number is equal to the minimum', () => {
      expect(isGreaterThan(0)(0)).toEqual('is equal to "0"');
    });

    it('should return a reason if the number is less than the minimum', () => {
      expect(isGreaterThan(0)(-1)).toEqual('is less than "0"');
    });

    it.each([undefined, null])('should return nothing if the value is %s', (value) => {
      expect(isGreaterThan(0)(value)).toEqual(undefined);
    });
  });

  describe('fn(isLessThan)', () => {
    it('should return nothing if the number is less than the maximum', () => {
      expect(isLessThan(0)(-1)).toEqual(undefined);
    });

    it('should return a reason if the number is equal to the maximum', () => {
      expect(isLessThan(0)(0)).toEqual('is equal to "0"');
    });

    it('should return a reason if the number is greater than the maximum', () => {
      expect(isLessThan(0)(1)).toEqual('is greater than "0"');
    });

    it.each([undefined, null])('should return nothing if the value is %s', (value) => {
      expect(isLessThan(0)(value)).toEqual(undefined);
    });
  });

  describe('fn(isGreaterThanOrEqualTo)', () => {
    it('should return nothing if the number is greater than the minimum', () => {
      expect(isGreaterThanOrEqualTo(0)(1)).toEqual(undefined);
    });

    it('should return nothing if the number is equal to the minimum', () => {
      expect(isGreaterThanOrEqualTo(0)(0)).toEqual(undefined);
    });

    it('should return a reason if the number is less than the minimum', () => {
      expect(isGreaterThanOrEqualTo(0)(-1)).toEqual('is less than "0"');
    });

    it.each([undefined, null])('should return nothing if the value is %s', (value) => {
      expect(isGreaterThanOrEqualTo(0)(value)).toEqual(undefined);
    });
  });

  describe('fn(isLessThanOrEqualTo)', () => {
    it('should return nothing if the number is less than the maximum', () => {
      expect(isLessThanOrEqualTo(0)(-1)).toEqual(undefined);
    });

    it('should return nothing if the number is equal to the maximum', () => {
      expect(isLessThanOrEqualTo(0)(0)).toEqual(undefined);
    });

    it('should return a reason if the number is greater than the maximum', () => {
      expect(isLessThanOrEqualTo(0)(1)).toEqual('is greater than "0"');
    });

    it.each([undefined, null])('should return nothing if the value is %s', (value) => {
      expect(isLessThanOrEqualTo(0)(value)).toEqual(undefined);
    });
  });
});
