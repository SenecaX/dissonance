import { tokenizeByConsonant } from '../core/tokenizer';

describe('tokenizeByConsonant', () => {
  test('splits on non-alphabetic characters', () => {
    expect(tokenizeByConsonant('Alpha-Beta')).toEqual(['alph', 'bet']);
  });

  test('handles multiple separators', () => {
    expect(tokenizeByConsonant('Alpha! Beta? Gamma')).toEqual(['alph', 'bet', 'gamm']);
  });

  test('ignores single-character buffers', () => {
    expect(tokenizeByConsonant('a b c')).toEqual([]);
  });

  test('handles empty input', () => {
    expect(tokenizeByConsonant('')).toEqual([]);
  });

  test('skips vowel-ending sequences', () => {
    expect(tokenizeByConsonant('betaalpha')).toEqual(['bet']);
  });
});