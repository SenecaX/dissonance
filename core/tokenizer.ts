import { isConsonant } from '../utils/charUtils';

/**
 * Splits a string into tokens where each token ends with a consonant.
 * Ignores non-alphabetic characters and converts output to lowercase.
 * 
 * @param input - The string to tokenize
 * @returns An array of lowercase tokens ending with consonants
 */
export function tokenizeByConsonant(input: string): string[] {
  // Convert to lowercase and filter out non-alphabetic characters
  const cleanInput = input.toLowerCase().replace(/[^a-z]/g, '');
  
  const tokens: string[] = [];
  let currentToken = '';
  
  for (const char of cleanInput) {
    currentToken += char;
    
    // If current character is a consonant, add current token to results
    if (isConsonant(char)) {
      tokens.push(currentToken);
      currentToken = '';
    }
  }
  
  return tokens;
}