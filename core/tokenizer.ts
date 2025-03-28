import { isConsonant } from '../utils/charUtils';

export function tokenizeByConsonant(input: string): string[] {
  let buffer = '';
  const tokens: string[] = [];

  for (const char of input) {
    const lowerChar = char.toLowerCase();
    
    if (/^[a-z]$/i.test(char)) {
      buffer += lowerChar;

      // Split buffer when encountering vowels preceded by consonants
      if (!isConsonant(lowerChar)) {
        const prevPart = buffer.slice(0, -1);
        if (prevPart.length >= 2 && isConsonant(prevPart.slice(-1))) {
          tokens.push(prevPart);
          buffer = lowerChar;
        }
      }
    } else {
      flushBuffer();
    }
  }
  
  flushBuffer();
  return tokens;

  function flushBuffer() {
    // Check final buffer state for valid token
    const lastConsonantIndex = buffer.split('').reverse().findIndex(c => isConsonant(c));
    if (lastConsonantIndex !== -1 && buffer.length - lastConsonantIndex >= 2) {
      tokens.push(buffer.slice(0, buffer.length - lastConsonantIndex));
    }
    buffer = '';
  }
}