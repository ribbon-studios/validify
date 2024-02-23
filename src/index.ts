export class Validator<T extends object> {
  private config: Validator.Config<T>;
  constructor(config: Validator.Config<T>) {
    this.config = config;
  }

  check(thing: object): string[] {
    const errors: string[] = [];
    const stack: Validator.StackItem[] = [
      {
        item: thing,
        config: this.config,
      },
    ];

    while (stack.length !== 0) {
      const { parentKey, item, config } = stack.shift() as Validator.StackItem;

      for (const key in config) {
        const configItem = config[key];
        const innerValue = item ? item[key] : null;
        const innerKey = parentKey ? `${parentKey}.${key}` : key;

        if (Array.isArray(configItem)) {
          if (configItem.length === 0) continue;

          for (const validator of configItem) {
            if (Array.isArray(innerValue)) {
              for (let i = 0; i < innerValue.length; i++) {
                const error = validator(innerValue[i]);

                if (!error) continue;

                errors.push(`"${innerKey}[${i}]" ${error}`);
              }
            } else {
              const error = validator(item ? item[key] : null);

              if (!error) continue;

              errors.push(`"${innerKey}" ${error}`);
            }
          }
        } else if (typeof configItem === 'object') {
          if (Array.isArray(innerValue)) {
            for (let i = 0; i < innerValue.length; i++) {
              stack.push({
                parentKey: `${innerKey}[${i}]`,
                item: innerValue[i],
                config: configItem,
              });
            }
          } else if (innerValue) {
            stack.push({
              parentKey: innerKey,
              item: innerValue,
              config: configItem,
            });
          }
        }
      }
    }

    return errors;
  }

  validate(thing: object): asserts thing is T {
    const errors = this.check(thing);

    if (errors.length === 0) return;

    throw new ValidationError(errors);
  }

  isValid(thing: object): thing is T {
    return this.check(thing).length === 0;
  }

  isInvalid<V extends object>(thing: V): thing is Exclude<V, T> {
    return !this.isValid(thing);
  }
}

export namespace Validator {
  export type Fn<T> = (value: T) => string | void;

  export type Config<T extends object> = {
    [key in keyof T]?: T[key] extends Array<object>
      ? Config<T[key][number]>
      : T[key] extends Array<any>
      ? Fn<T[key][number]>[]
      : T[key] extends object
      ? Config<T[key]>
      : Fn<T[key]>[];
  };

  export type StackItem = {
    parentKey?: string;
    item: object;
    config: Config<object>;
  };
}

export class ValidationError extends Error {
  errors: string[];

  constructor(errors: string[]) {
    super(errors.join('\n'));
    this.errors = errors;
  }

  toString() {
    return this.errors.join('\n');
  }
}

export * from './validators';
export * from './utils';
