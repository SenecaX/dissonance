import { formatFrequencyReport } from '../../presentation/reportFormatter';

describe('formatFrequencyReport', () => {
  it('formats frequency record with descending counts', () => {
    const input = { alph: 2, beta: 5, foo: 3 };
    const expected = 'beta: 5\nfoo: 3\nalph: 2';
    expect(formatFrequencyReport(input)).toBe(expected);
  });

  it('handles empty record', () => {
    expect(formatFrequencyReport({})).toBe('');
  });

  it('handles single entry', () => {
    expect(formatFrequencyReport({ single: 1 })).toBe('single: 1');
  });

  it('maintains order for equal frequencies', () => {
    const input = { a: 2, b: 2, c: 2 };
    const result = formatFrequencyReport(input).split('\n');
    expect(result).toHaveLength(3);
    result.forEach(line => {
      expect(line).toMatch(/[abc]: 2/);
    });
  });
});