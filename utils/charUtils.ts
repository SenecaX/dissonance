/**
 * Checks if a character is a consonant (non-vowel letter).
 * @param char A single character to check
 * @returns true if the character is a consonant, false otherwise
 */
export function isConsonant(char: string): boolean {
  // Ensure input is a single character
  if (char.length !== 1) return false;
  
  // Check if character is alphabetic and not a vowel
  return /^[a-z]$/i.test(char) && !/[aeiou]/i.test(char);
}

// Test cases
const testCases = [
  { input: 'b', expected: true },
  { input: 'a', expected: false }
];

testCases.forEach(({ input, expected }) => {
  const result = isConsonant(input);
  console.assert(
    result === expected,
    `Test failed for '${input}'! Expected ${expected} but got ${result}`
  );
});