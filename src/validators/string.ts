export function isAlpha(thing: string): string {
  if (!/[A-z ]+/.test(thing)) return 'includes non alpha characters';
}

export function isAlphaNumeric(thing: string): string {
  if (!/[A-z \d]+/.test(thing)) return 'includes non alpha-numeric characters';
}

export function isNumeric(thing: string): string {
  if (!/\d+/.test(thing)) return 'includes non numeric characters';
}
