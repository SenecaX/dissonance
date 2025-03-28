import { isConsonant } from '../utils/charUtils';

describe('isConsonant', () => {
  test('returns true for consonants', () => {
    expect(isConsonant('b')).toBe(true);
    expect(isConsonant('C')).toBe(true);
  });

  test('returns false for vowels', () => {
    expect(isConsonant('a')).toBe(false);
    expect(isConsonant('E')).toBe(false);
  });

  test('returns false for non-letters', () => {
    expect(isConsonant('1')).toBe(false);
    expect(isConsonant(' ')).toBe(false);
    expect(isConsonant('')).toBe(false);
    expect(isConsonant('ab')).toBe(false);
  });
});