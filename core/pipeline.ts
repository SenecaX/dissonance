import { tokenizeByConsonant } from './tokenizer';
import { countTokenFrequencies } from './frequencyMap';

/**
 * Analyzes a string by tokenizing it and counting token frequencies.
 * First splits the input into consonant-terminated tokens,
 * then counts the frequency of each token.
 * 
 * @param input - The string to analyze
 * @returns Record mapping each unique token to its frequency count
 */
export function analyzeString(input: string): Record<string, number> {
  const tokens = tokenizeByConsonant(input);
  return countTokenFrequencies(tokens);
}