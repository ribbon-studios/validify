import { validate } from 'postal-codes-js';
import { Validator } from '..';

/**
 * Passes if string only contains alphabetical characters.
 * @param thing the string to validate
 * @returns why the validator failed
 */
export function isAlpha(thing: string): string | void {
  if (!/[A-z ]+/.test(thing)) return 'includes non alpha characters';
}

/**
 * Passes if string only contains alphanumeric characters.
 * @param thing the string to validate
 * @returns why the validator failed
 */
export function isAlphaNumeric(thing: string): string | void {
  if (!/[A-z \d]+/.test(thing)) return 'includes non alpha-numeric characters';
}

/**
 * Passes if string only contains numeric characters.
 * @param thing the string to validate
 * @returns why the validator failed
 */
export function isNumeric(thing: string): string | void {
  if (!/\d+/.test(thing)) return 'includes non numeric characters';
}

export function isPostalCode(countryCode: string): Validator.Fn<string> {
  return (value: string): string | void => {
    if (validate(countryCode, value) !== true) return `is an invalid postal code for "${countryCode}"`;
  };
}
