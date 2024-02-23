import { isAlpha, isAlphaNumeric, isNumeric, isPostalCode } from '../string';

describe('String Validators', () => {
  describe('fn(isAlpha)', () => {
    it('should return nothing if the value contains only alphabetical characters', () => {
      expect(isAlpha('hello')).toEqual(undefined);
    });

    it('should return a reason if the value contains numbers', () => {
      expect(isAlpha('12345')).toEqual('includes non alpha characters');
    });

    it('should return a reason if the value contains symbols', () => {
      expect(isAlpha('!@#%$')).toEqual('includes non alpha characters');
    });

    it.each([undefined, null])('should return nothing if the value is %s', (value) => {
      expect(isAlpha(value)).toEqual(undefined);
    });
  });

  describe('fn(isNumeric)', () => {
    it('should return nothing if the value is only numbers', () => {
      expect(isNumeric('12345')).toEqual(undefined);
    });

    it('should return a reason if the value contains alphabetical characters', () => {
      expect(isNumeric('hello')).toEqual('includes non numeric characters');
    });

    it('should return a reason if the value contains symbols', () => {
      expect(isNumeric('!@#%$')).toEqual('includes non numeric characters');
    });

    it.each([undefined, null])('should return nothing if the value is %s', (value) => {
      expect(isNumeric(value)).toEqual(undefined);
    });
  });

  describe('fn(isAlphaNumeric)', () => {
    it('should return nothing if the value contains only alpha-numeric characters', () => {
      expect(isAlphaNumeric('hello12345')).toEqual(undefined);
    });

    it('should return a reason if the value contains symbols', () => {
      expect(isAlphaNumeric('!@#%$')).toEqual('includes non alpha-numeric characters');
    });

    it.each([undefined, null])('should return nothing if the value is %s', (value) => {
      expect(isAlphaNumeric(value)).toEqual(undefined);
    });
  });

  describe('fn(isPostalCode)', () => {
    it('should return nothing if the value is a valid us postal code', () => {
      expect(isPostalCode('US')('32937')).toEqual(undefined);
    });

    it('should return nothing if the value is a valid canada postal code', () => {
      expect(isPostalCode('CA')('E4X 0V3')).toEqual(undefined);
    });

    it('should return nothing if the value is a valid canada postal code', () => {
      expect(isPostalCode('US')('E4X 0V3')).toEqual('is an invalid postal code for "US"');
    });

    it.each([undefined, null])('should return nothing if the value is %s', (value) => {
      expect(isPostalCode('US')(value)).toEqual(undefined);
    });
  });
});
