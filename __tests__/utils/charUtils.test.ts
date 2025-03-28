import { isConsonant } from '../../utils/charUtils';

describe('isConsonant', () => {
  test('should return true for consonants', () => {
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    consonants.forEach(char => {
      expect(isConsonant(char)).toBe(true);
      expect(isConsonant(char.toUpperCase())).toBe(true);
    });
  });

  test('should return false for vowels', () => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    vowels.forEach(char => {
      expect(isConsonant(char)).toBe(false);
      expect(isConsonant(char.toUpperCase())).toBe(false);
    });
  });

  test('should return false for non-alphabetic characters', () => {
    const nonAlphabetic = ['1', '@', ' ', '', '\n', 'bb', 'abc'];
    nonAlphabetic.forEach(char => {
      expect(isConsonant(char)).toBe(false);
    });
  });
})