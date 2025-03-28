import { tokenizeByConsonant } from '../../core/tokenizer';

describe('tokenizeByConsonant', () => {
  test('splits string into tokens ending with consonants', () => {
    expect(tokenizeByConsonant('Alpha-Beta')).toEqual(['alph', 'bet']);
  });

  test('handles empty string', () => {
    expect(tokenizeByConsonant('')).toEqual([]);
  });

  test('handles string with no consonants', () => {
    expect(tokenizeByConsonant('aeiou')).toEqual([]);
  });

  test('handles multiple consecutive consonants', () => {
    expect(tokenizeByConsonant('staff')).toEqual(['staff']);
  });

  test('ignores non-alphabetic characters', () => {
    expect(tokenizeByConsonant('Hello123World!')).toEqual(['hell', 'world']);
  });

  test('handles mixed case input', () => {
    expect(tokenizeByConsonant('CamelCase')).toEqual(['cam', 'melc', 'cas']);
  });
});