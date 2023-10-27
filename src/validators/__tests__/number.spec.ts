import {isGreaterThan, isGreaterThanOrEqualTo, isLessThan, isLessThanOrEqualTo} from '../number';

describe('String Validators', () => {
  describe('fn(isGreaterThan)', () => {
    it('should return nothing if the number is greater than the minimum', () => {
      expect(isGreaterThan(0)(1)).toEqual(undefined);
    });

    it('should return a reason if the number is equal to the minimum', () => {
      expect(isGreaterThan(0)(0)).toEqual('is equal to 0');
    });

    it('should return a reason if the number is less than the minimum', () => {
      expect(isGreaterThan(0)(-1)).toEqual('is less than 0');
    });
  });

  describe('fn(isLessThan)', () => {
    it('should return nothing if the number is less than the maximum', () => {
      expect(isLessThan(0)(-1)).toEqual(undefined);
    });

    it('should return a reason if the number is equal to the maximum', () => {
      expect(isLessThan(0)(0)).toEqual('is equal to 0');
    });

    it('should return a reason if the number is greater than the maximum', () => {
      expect(isLessThan(0)(1)).toEqual('is greater than 0');
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
      expect(isGreaterThanOrEqualTo(0)(-1)).toEqual('is less than 0');
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
      expect(isLessThanOrEqualTo(0)(1)).toEqual('is greater than 0');
    });
  });
});
