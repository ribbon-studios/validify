import { validate } from 'postal-codes-js';
import { Validator } from '..';
import { isNullOrUndefined } from '../utils/is-defined';

/**
 * Passes if string only contains alphabetical characters.
 * @param value the string to validate
 * @returns why the validator failed
 */
export function isAlpha(value: string): string | void {
  if (isNullOrUndefined(value)) return;

  if (!/[A-z ]+/.test(value)) return 'includes non alpha characters';
}

/**
 * Passes if string only contains alphanumeric characters.
 * @param value the string to validate
 * @returns why the validator failed
 */
export function isAlphaNumeric(value: string): string | void {
  if (isNullOrUndefined(value)) return;

  if (!/[A-z \d]+/.test(value)) return 'includes non alpha-numeric characters';
}

/**
 * Passes if string only contains numeric characters.
 * @param value the string to validate
 * @returns why the validator failed
 */
export function isNumeric(value: string): string | void {
  if (isNullOrUndefined(value)) return;

  if (!/\d+/.test(value)) return 'includes non numeric characters';
}

export function isPostalCode(countryCode: string): Validator.Fn<string> {
  return (value: string): string | void => {
    if (isNullOrUndefined(value)) return;

    if (validate(countryCode, value) !== true) return `is an invalid postal code for "${countryCode}"`;
  };
}
