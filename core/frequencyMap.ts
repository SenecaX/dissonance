/**
 * Counts the frequency of each token in an array of strings.
 * 
 * @param tokens - Array of strings to count frequencies for
 * @returns Record mapping each unique token to its frequency count
 */
export function countTokenFrequencies(tokens: string[]): Record<string, number> {
  return tokens.reduce((frequencies: Record<string, number>, token: string) => {
    frequencies[token] = (frequencies[token] || 0) + 1;
    return frequencies;
  }, {});
}