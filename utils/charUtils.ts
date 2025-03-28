/**
 * Checks if a character is an English consonant
 * @param char - Single character string
 * @returns true if consonant, false otherwise
 */
export function isConsonant(char: string): boolean {
  if (typeof char !== 'string' || char.length !== 1) return false;
  
  const vowelPattern = /^[aeiou]$/i;
  const letterPattern = /^[a-z]$/i;
  
  return letterPattern.test(char) && !vowelPattern.test(char);
}