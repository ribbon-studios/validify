import { isNotNullOrUndefined, isNullOrUndefined } from '../is-defined';

describe('utils(isDefined)', () => {
  describe('fn(isNullOrUndefined)', () => {
    it.each([undefined, null])('should return true if the value is %s', (value) => {
      expect(isNullOrUndefined(value)).toEqual(true);
    });

    it('should return false if the value is defined', () => {
      expect(isNullOrUndefined('hello')).toEqual(false);
    });
  });

  describe('fn(isNotNullOrUndefined)', () => {
    it.each([undefined, null])('should return false if the value is %s', (value) => {
      expect(isNotNullOrUndefined(value)).toEqual(false);
    });

    it('should return true if the value is defined', () => {
      expect(isNotNullOrUndefined('hello')).toEqual(true);
    });
  });
});
