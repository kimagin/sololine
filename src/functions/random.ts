// TODO: Add step option

export interface Options {
  float?: boolean
  percision?: number
  min?: number
  mirror?: boolean
}
/**
 *
 * ---
 * **Description:**
 * *Generates a random number within a specified range, with options for output type and mirroring.*
 *
 * **Example usage:**
 * ```js
 * // Random integer between -300 and 300
 * console.log(random(300, { mirror: true }));
 *
 * // Random integer between 50 and 300
 * console.log(random(300, { min: 50 }));
 *
 * // Random float between 0 and 300
 * console.log(random(300, { output: 'float' }));
 * ```
 * ---
 *
 * @param {number} max *input: the maximum value for the random number range.*
 * @param {Options} [options] **Options :**
 * - **min:** The minimum value for the random number range.
 * - **mirror:** Whether to mirror the max value to create a range from -max to max.
 * - **float:** Whether the output should be a floating-point number.
 * - **percision:** The number of decimal places for the floating-point output.
 *
 * @returns {number} - The generated random number.
 */
export function random(max: number, options: Options = {}): number {
  const { min = 0, float = false, mirror = false, percision = 10 } = options

  const effectiveMin = mirror ? -max : min
  const range = max - effectiveMin

  if (!float) {
    return Math.floor(Math.random() * range + effectiveMin)
  } else {
    return parseFloat((Math.random() * range + effectiveMin).toFixed(percision))
  }
}
