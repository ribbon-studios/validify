import {Validator} from '..';
import {isDefined} from '../validators';
import {isAlpha} from '../validators/string';

describe('fn(validate)', () => {
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
      }
    };

    const validator = new Validator<Example>({
      messages: {
        hello: [isDefined],
      }
    });

    expect(validator.check({})).toEqual(['"messages.hello" is not defined']);
  });

  it('should support any number of nested objects', () => {
    type Example = {
      i18n: {
        en: {
          hello: string;
        }
      }
    };

    const validator = new Validator<Example>({
      i18n: {
        en: {
          hello: [isDefined],
        }
      }
    });

    expect(validator.check({})).toEqual(['"i18n.en.hello" is not defined']);
  });

  it('should support ensuring arrays exist', () => {
    type Example = {
      arr: string[]
    };

    const validator = new Validator<Example>({
      arr: [isDefined]
    });

    expect(validator.check({})).toEqual(['"arr" is not defined']);
  });

  it('should support primitive arrays', () => {
    type Example = {
      names: string[]
    };

    const validator = new Validator<Example>({
      names: [isAlpha]
    });

    expect(validator.check({
      names: ['Cecilia Sanare', '012543']
    })).toEqual(['"names[1]" includes non alpha characters']);
  });

  it('should support complex arrays', () => {
    type Example = {
      names: {
        first: string;
        last: string;
      }[]
    };

    const validator = new Validator<Example>({
      names: {
        first: [isDefined, isAlpha],
        last: [isDefined, isAlpha],
      }
    });

    expect(validator.check({
      names: [{
        first: 'Cecilia',
        last: 'Sanare',
      }, {
        first: '345',
        last: '345',
      }]
    })).toEqual(['"names[1].first" includes non alpha characters', '"names[1].last" includes non alpha characters']);
  });
});
