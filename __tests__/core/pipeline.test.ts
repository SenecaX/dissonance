import { analyzeString } from '../../core/pipeline';

describe('analyzeString', () => {
  test('correctly analyzes string with repeated tokens', () => {
    expect(analyzeString('Alpha-Beta Alpha'))
      .toEqual({ alph: 2 });
  });

  test('handles empty string', () => {
    expect(analyzeString('')).toEqual({});
  });

  test('handles string with no consonant-terminated tokens', () => {
    expect(analyzeString('aeiou')).toEqual({});
  });

  test('handles string with special characters and numbers', () => {
    expect(analyzeString('Hello123World! Hello123World!'))
      .toEqual({ hell: 2, world: 2 });
  });
});