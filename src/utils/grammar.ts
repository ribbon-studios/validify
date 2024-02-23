export class Grammar {
  static or(...values: any[]): string {
    if (values.length === 1) return values[0];
    else if (values.length === 2) return `${values[0]} or ${values[1]}`;
    return `${values.slice(0, values.length - 1).join(', ')}, or ${values.slice(values.length - 1)}`;
  }

  static and(...values: any[]): string {
    if (values.length === 1) return values[0];
    else if (values.length === 2) return `${values[0]} and ${values[1]}`;
    return `${values.slice(0, values.length - 1).join(', ')}, and ${values.slice(values.length - 1)}`;
  }
}
