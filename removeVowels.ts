/**
 * A pure function that removes all vowels from a given string.
 * @param input The input string to process
 * @returns A new string with all vowels removed
 */
export function removeVowels(input: string): string {
  // Using regex to match all vowels (case-insensitive)
  // This approach is chosen for:
  // 1. Clarity - the pattern clearly shows what we're matching
  // 2. Efficiency - single pass through the string
  // 3. Immutability - creates a new string without modifying input
  return input.replace(/[aeiou]/gi, '');
}

// Test case
const testInput = "Hello World";
const result = removeVowels(testInput);
const expected = "Hll Wrld";

console.assert(
  result === expected,
  `Test failed! Expected "${expected}" but got "${result}"`
);

// Example usage
console.log(removeVowels("Hello World")); // Outputs: "Hll Wrld"