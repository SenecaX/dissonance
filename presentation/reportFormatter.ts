/**
 * Formats a frequency record into a human-readable string report.
 * Each token-count pair is formatted as "token: count" and joined with newlines.
 * The output is sorted by descending frequency.
 *
 * @param frequencies - Record mapping tokens to their frequency counts
 * @returns Formatted string with each token-count pair on a new line
 */
export function formatFrequencyReport(frequencies: Record<string, number>): string {
  return Object.entries(frequencies)
    .sort(([, a], [, b]) => b - a)
    .map(([token, count]) => `${token}: ${count}`)
    .join('\n');
}