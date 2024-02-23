import { Validator } from '..';
import { Grammar } from '../utils/grammar';

/**
 * A helper validator to coerce strings to numbers before running a subsequent validator
 * @param validator the number validator to execute
 * @returns the reason for the number validator failing
 */
export function coerceNumber(validator: Validator.Fn<number>): Validator.Fn<string | number | null | undefined> {
  return (value: string | number | null | undefined): string | void => {
    return validator(typeof value === 'string' ? Number(value) : value);
  };
}

export function or<T>(...validators: Validator.Fn<T>[]): Validator.Fn<T> {
  return (value: T): string | void => {
    const errors: string[] = [];

    for (const validator of validators) {
      const response = validator(value);

      if (!response) return;

      errors.push(response);
    }

    return Grammar.and(...errors);
  };
}
