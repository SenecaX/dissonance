import { countTokenFrequencies } from '../../core/frequencyMap';

describe('countTokenFrequencies', () => {
  test('counts frequencies of tokens correctly', () => {
    expect(countTokenFrequencies(['alph', 'bet', 'alph', 'bet', 'bet']))
      .toEqual({ alph: 2, bet: 3 });
  });

  test('handles empty array', () => {
    expect(countTokenFrequencies([])).toEqual({});
  });

  test('handles array with single token', () => {
    expect(countTokenFrequencies(['test'])).toEqual({ test: 1 });
  });

  test('preserves case sensitivity', () => {
    expect(countTokenFrequencies(['Test', 'test', 'TEST']))
      .toEqual({ Test: 1, test: 1, TEST: 1 });
  });
});