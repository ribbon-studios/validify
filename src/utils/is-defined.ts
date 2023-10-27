export function isNullOrUndefined<T>(value: T): value is Extract<T, null | undefined> {
  return [undefined, null].includes(value);
}

export function isNotNullOrUndefined<T>(value: T): value is Exclude<T, null | undefined> {
  return !isNullOrUndefined(value);
}
