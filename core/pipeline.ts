import { tokenizeByConsonant } from './tokenizer';
import { countTokenFrequencies } from './frequencyMap';

/**
 * Analyzes a string by tokenizing it and counting token frequencies.
 * First splits the input into consonant-terminated tokens,
 * then counts the frequency of each token,
 * finally filters out tokens that appear less than twice.
 * 
 * @param input - The string to analyze
 * @returns Record mapping each token to its frequency count (only for tokens appearing ≥ 2 times)
 */
export function analyzeString(input: string): Record<string, number> {
  const tokens = tokenizeByConsonant(input);
  const frequencies = countTokenFrequencies(tokens);
  return Object.fromEntries(
    Object.entries(frequencies).filter(([_, count]) => count >= 2)
  );
}