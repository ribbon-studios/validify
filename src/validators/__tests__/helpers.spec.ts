import { isPostalCode } from '..';
import { Countries } from '../../utils/postal-codes';
import { coerceNumber, or } from '../helpers';
import { isGreaterThan } from '../number';

describe('validators(helpers)', () => {
  describe('fn(coerceNumber)', () => {
    it('should support coercing strings to numbers', () => {
      expect(coerceNumber(isGreaterThan(0))('1')).toEqual(undefined);
    });

    it('should support passing through numbers', () => {
      expect(coerceNumber(isGreaterThan(0))(1)).toEqual(undefined);
    });
  });

  describe('fn(or)', () => {
    it('should return nothing if one of the validators passes', () => {
      expect(or(isPostalCode(Countries.US), isPostalCode(Countries.CA))('E4X 0V3')).toEqual(undefined);
    });

    it('should return all of the reasons', () => {
      expect(or(isPostalCode(Countries.US), isPostalCode(Countries.CA))('1')).toEqual(
        'is an invalid postal code for "US" and is an invalid postal code for "CA"'
      );
    });
  });
});
