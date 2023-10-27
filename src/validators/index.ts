import {Validator} from '..';

export function isDefined(thing: any): string {
  if ([undefined, null].includes(thing)) return 'is not defined';
}

export function isEqualTo<T>(expectedValue: T): Validator.Fn<T> {
  return (value: T): string => {
    if (value !== expectedValue) return `is not equal to "${expectedValue}"`;
  };
}

export function isAny<T>(...expectedValues: T[]): Validator.Fn<T> {
  return (value: T): string => {
    if (!expectedValues.includes(value)) return `is not equal to "${expectedValues.join(', ')}"`;
  };
}

export function isNotEqualTo<T>(expectedValue: T): Validator.Fn<T> {
  return (value: T): string => {
    if (value === expectedValue) return `is equal to "${expectedValue}"`;
  };
}
