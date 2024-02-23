import { Validator } from '..';
import { isNullOrUndefined } from '../utils/is-defined';

/**
 * Passes if the value is defined.
 * @param thing the thing to validate
 * @returns why the validator failed
 */
export function isDefined(thing: any): string | void {
  if (isNullOrUndefined(thing)) return 'is not defined';
}

/**
 * Passes if the array or string is equal to the length.
 * @param length the length to compare to
 * @returns a validator function matching the criteria
 */
export function isLength(length: number): Validator.Fn<any[] | string | null | undefined> {
  return (value: any[] | string | null | undefined): string | void => {
    if (isNullOrUndefined(value)) return;

    if (value.length !== length) return `has length not equal to "${length}"`;
  };
}

/**
 * Passes if the array or string is not equal to the length.
 * @param length the length to compare to
 * @returns a validator function matching the criteria
 */
export function isNotLength(length: number): Validator.Fn<any[] | string | null | undefined> {
  return (value: any[] | string | null | undefined): string | void => {
    if (isNullOrUndefined(value)) return;

    if (value.length === length) return `has length equal to "${length}"`;
  };
}

/**
 * Passes if the array or string is equal to or less than the maximum length.
 * @param length the maximum length (inclusive)
 * @returns a validator function matching the criteria
 */
export function isWithinLength(length: number): Validator.Fn<any[] | string | null | undefined> {
  return (value: any[] | string | null | undefined): string | void => {
    if (isNullOrUndefined(value)) return;

    if (value.length > length) return `exceeds max length of "${length}"`;
  };
}

/**
 * Passes if the value matches the expected value.
 * @param expectedValue the value to compare to
 * @returns a validator function matching the criteria
 */
export function isEqualTo<T>(expectedValue: T): Validator.Fn<T> {
  return (value: T | null | undefined): string | void => {
    if (isNullOrUndefined(value)) return;

    if (value !== expectedValue) return `is not equal to "${expectedValue}"`;
  };
}

/**
 * Passes if the value does not match the expected value.
 * @param expectedValue the value to compare to
 * @returns a validator function matching the criteria
 */
export function isNotEqualTo<T>(expectedValue: T): Validator.Fn<T> {
  return (value: T | null | undefined): string | void => {
    if (isNullOrUndefined(value)) return;

    if (value === expectedValue) return `is equal to "${expectedValue}"`;
  };
}

/**
 * Passes if the value matches any of the expected values.
 * @param expectedValues the values to compare to
 * @returns a validator function matching the criteria
 */
export function isAny<T>(...expectedValues: T[]): Validator.Fn<T> {
  return (value: T | null | undefined): string | void => {
    if (isNullOrUndefined(value)) return;

    if (!expectedValues.includes(value)) return `is not equal to "${expectedValues.join(', ')}"`;
  };
}

export * from './number';
export * from './string';
export * from './helpers';
