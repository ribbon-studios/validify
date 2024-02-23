import { ValidationError, Validator } from '..';
import { isDefined } from '../validators';
import { isAlpha } from '../validators/string';

describe('class(Validator)', () => {
  describe('fn(check)', () => {
    it('should support basic keys', () => {
      type Example = {
        hello: string;
      };

      const validator = new Validator<Example>({
        hello: [isDefined],
      });

      expect(validator.check({})).toEqual(['"hello" is not defined']);
    });

    it('should support objects', () => {
      type Example = {
        messages: {
          hello: string;
        };
      };

      const validator = new Validator<Example>({
        messages: {
          hello: [isDefined],
        },
      });

      expect(
        validator.check({
          messages: {},
        })
      ).toEqual(['"messages.hello" is not defined']);
    });

    it('should support any number of nested objects', () => {
      type Example = {
        i18n: {
          en: {
            hello: string;
          };
        };
      };

      const validator = new Validator<Example>({
        i18n: {
          en: {
            hello: [isDefined],
          },
        },
      });

      expect(
        validator.check({
          i18n: {
            en: {},
          },
        })
      ).toEqual(['"i18n.en.hello" is not defined']);
    });

    it('should ignore validation if a parent object does not exist', () => {
      type Example = {
        i18n: {
          en: {
            hello: string;
          };
        };
      };

      const validator = new Validator<Example>({
        i18n: {
          en: {
            hello: [isDefined],
          },
        },
      });

      expect(validator.check({})).toEqual([]);
    });

    it('should not ignore validation if a parent object does not exist and strict mode is enabled', () => {
      type Example = {
        i18n: {
          en: {
            hello: string;
          };
        };
      };

      const validator = new Validator<Example>(
        {
          i18n: {
            en: {
              hello: [isDefined],
            },
          },
        },
        true
      );

      expect(validator.check({})).toEqual(['"i18n.en.hello" is not defined']);
    });

    it('should support ensuring arrays exist', () => {
      type Example = {
        arr: string[];
      };

      const validator = new Validator<Example>({
        arr: [isDefined],
      });

      expect(validator.check({})).toEqual(['"arr" is not defined']);
    });

    it('should support primitive arrays', () => {
      type Example = {
        names: string[];
      };

      const validator = new Validator<Example>({
        names: [isAlpha],
      });

      expect(
        validator.check({
          names: ['Cecilia Sanare', '012543'],
        })
      ).toEqual(['"names[1]" includes non alpha characters']);
    });

    it('should support complex arrays', () => {
      type Example = {
        names: {
          first: string;
          last: string;
        }[];
      };

      const validator = new Validator<Example>({
        names: {
          first: [isDefined, isAlpha],
          last: [isDefined, isAlpha],
        },
      });

      expect(
        validator.check({
          names: [
            {
              first: 'Cecilia',
              last: 'Sanare',
            },
            {
              first: '345',
              last: '345',
            },
          ],
        })
      ).toEqual(['"names[1].first" includes non alpha characters', '"names[1].last" includes non alpha characters']);
    });

    it('should support empty validators', () => {
      type Example = {
        hello: string;
      };

      const validator = new Validator<Example>({
        hello: [],
      });

      expect(validator.check({})).toEqual([]);
    });

    it('should support optional validators', () => {
      type Example = {
        hello: string;
      };

      const validator = new Validator<Example>({});

      expect(validator.check({})).toEqual([]);
    });
  });

  describe('fn(validate)', () => {
    it('should throw an error if there are any invalid items', () => {
      type Example = {
        hello: string;
      };

      const validator = new Validator<Example>({
        hello: [isDefined],
      });

      expect(() => validator.validate({})).toThrow(ValidationError);
    });

    it('should not throw an error if there are not any invalid items', () => {
      type Example = {
        hello: string;
      };

      const validator = new Validator<Example>({});

      expect(() => validator.validate({})).not.toThrow(ValidationError);
    });
  });

  describe('fn(isValid)', () => {
    it('should return true if the object is valid', () => {
      type Example = {
        hello: string;
      };

      const validator = new Validator<Example>({
        hello: [isDefined],
      });

      expect(
        validator.isValid({
          hello: 'world',
        })
      ).toEqual(true);
    });

    it('should return false if the object is not valid', () => {
      type Example = {
        hello: string;
      };

      const validator = new Validator<Example>({
        hello: [isDefined],
      });

      expect(validator.isValid({})).toEqual(false);
    });
  });

  describe('fn(isInvalid)', () => {
    it('should return false if the object is valid', () => {
      type Example = {
        hello: string;
      };

      const validator = new Validator<Example>({
        hello: [isDefined],
      });

      expect(
        validator.isInvalid({
          hello: 'world',
        })
      ).toEqual(false);
    });

    it('should return true if the object is not valid', () => {
      type Example = {
        hello: string;
      };

      const validator = new Validator<Example>({
        hello: [isDefined],
      });

      expect(validator.isInvalid({})).toEqual(true);
    });
  });
});

describe('class(ValidationError)', () => {
  describe('fn(toString)', () => {
    it('should join all the errors together', () => {
      const errors = ['hello', 'world'];
      const error = new ValidationError(errors);

      expect(error.toString()).toEqual(errors.join('\n'));
    });

    it('should support being thrown', () => {
      const errors = ['hello', 'world'];

      expect(() => {
        throw new ValidationError(errors);
      }).toThrowError('hello\nworld');
    });
  });
});
