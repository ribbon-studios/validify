import {Validator} from '..';

export function isGreaterThan(min: number): Validator.Fn<number> {
  return (value: number): string => {
    if (value === min) return `is equal to ${min}`;
    if (value < min) return `is less than ${min}`;
  };
}

export function isGreaterThanOrEqualTo(min: number): Validator.Fn<number> {
  return (value: number): string => {
    if (value < min) return `is less than ${min}`;
  };
}

export function isLessThan(max: number): Validator.Fn<number> {
  return (value: number): string => {
    if (value === max) return `is equal to ${max}`;
    if (value > max) return `is greater than ${max}`;
  };
}

export function isLessThanOrEqualTo(max: number): Validator.Fn<number> {
  return (value: number): string => {
    if (value > max) return `is greater than ${max}`;
  };
}
