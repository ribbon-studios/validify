import {isAlpha, isAlphaNumeric, isNumeric} from '../string';

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
  });

  describe('fn(isAlphaNumeric)', () => {
    it('should return nothing if the value contains only alpha-numeric characters', () => {
      expect(isAlphaNumeric('hello12345')).toEqual(undefined);
    });

    it('should return a reason if the value contains symbols', () => {
      expect(isAlphaNumeric('!@#%$')).toEqual('includes non alpha-numeric characters');
    });
  });
});
