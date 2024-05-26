/**
 * Pauses the execution of your code for a specified amount of time.
 *
 * @param {number} ms - The time to wait in milliseconds.
 * @returns {Promise<void>} A promise that resolves after the specified delay.
 *
 * **Example Usage:**
 *
 * Suppose you want to simulate a delay between two API requests. You can use the `pause` function to pause the execution of your code for a certain amount of time.
 *
 * ```javascript
 * import { pause } from './pause';
 *
 * async function makeApiRequests() {
 *   try {
 *     // Make first API request
 *     const response1 = await fetch('https://api.example.com/data1');
 *     console.log(response1);
 *
 *     // Pause for 2 seconds before making the second request
 *     await pause(2000); // 2000 milliseconds = 2 seconds
 *
 *     // Make second API request
 *     const response2 = await fetch('https://api.example.com/data2');
 *     console.log(response2);
 *   } catch (error) {
 *     console.error(error);
 *   }
 * }
 *
 * makeApiRequests();
 * ```
 */
export function pause(ms: number): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve()
      } catch (error) {
        reject(error)
      }
    }, ms)
  })
}
