import { Validator } from '..';
import { isNotEqualTo } from './index';

/**
 * A helper validator to coerce strings to numbers before running a subsequent validator
 * @param validator the number validator to execute
 * @returns the reason for the number validator failing
 */
export function coerceNumber(validator: Validator.Fn<number>): Validator.Fn<string | number> {
  return (value: string | number) => {
    return validator(typeof value === 'string' ? Number(value) : value);
  };
}

/**
 * Passes if the value is between or equal to the range values.
 * @param min The minimum range value
 * @param max The maximum range value
 * @returns a validator function matching the criteria
 */
export function isBetweenInclusive(min: number, max: number): Validator.Fn<number> {
  return (value: number): string => {
    return isGreaterThanOrEqualTo(min)(value) ?? isLessThanOrEqualTo(max)(value);
  };
}

/**
 * Passes if the value is between the range values.
 * @param min The minimum range value
 * @param max The maximum range value
 * @returns a validator function matching the criteria
 */
export function isBetween(min: number, max: number): Validator.Fn<number> {
  return (value: number): string => {
    return isGreaterThan(min)(value) ?? isLessThan(max)(value);
  };
}

/**
 * Passes if the value is greater than or equal to the minimum value.
 * @param min The minimum value
 * @returns a validator function matching the criteria
 */
export function isGreaterThanOrEqualTo(min: number): Validator.Fn<number> {
  return (value: number): string => {
    if (value < min) return `is less than "${min}"`;
  };
}

/**
 * Passes if the value is greater than the minimum value.
 * @param min The minimum value
 * @returns a validator function matching the criteria
 */
export function isGreaterThan(min: number): Validator.Fn<number> {
  return (value: number): string => {
    return isNotEqualTo(min)(value) ?? isGreaterThanOrEqualTo(min)(value);
  };
}

/**
 * Passes if the value is less than or equal to the maximum value.
 * @param max The maximum value
 * @returns a validator function matching the criteria
 */
export function isLessThanOrEqualTo(max: number): Validator.Fn<number> {
  return (value: number): string => {
    if (value > max) return `is greater than "${max}"`;
  };
}

/**
 * Passes if the value is less than the maximum value.
 * @param max The maximum value
 * @returns a validator function matching the criteria
 */
export function isLessThan(max: number): Validator.Fn<number> {
  return (value: number): string => {
    return isNotEqualTo(max)(value) ?? isLessThanOrEqualTo(max)(value);
  };
}
