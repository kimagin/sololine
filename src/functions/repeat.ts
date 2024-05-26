interface RepeatOptions {
  timeout?: number
  interval?: number
  exitFunction?: () => void
}

/**
 *
 * ---
 * **Description:**
 * *Executes a function repeatedly at a specified interval using requestAnimationFrame by default, with options to control the timeout, interval, and exit function.*
 *
 * **Example usage:**
 * ```js
 * // Repeat the function every 1000ms (1 second)
 * await repeat(myFunction, { interval: 1000 });
 *
 * // Repeat the function every 500ms (0.5 second) with a timeout of 5000ms (5 seconds)
 * await repeat(myFunction, { interval: 500, timeout: 5000 });
 *
 * // Repeat the function with a custom exit function
 * await repeat(myFunction, {
 *   interval: 100,
 *   exitFunction: () => console.log("Exiting repeat function")
 * });
 * ```
 * ---
 *
 * @param {Function} repeatingFunction *input: The function to be executed repeatedly.*
 * @param {Object} [options] **Options :**
 * - **timeout:** The timeout duration in milliseconds before stopping the repetition.
 * - **interval:** The interval duration in milliseconds between function calls.
 * - **exitFunction:** A function to execute when the repetition stops.
 * @returns {Promise<void>} A promise that resolves when the repetition is stopped.
 */
export async function repeat(
  repeatingFunction: Function,
  options: RepeatOptions = {}
): Promise<void> {
  const { timeout, interval = 1, exitFunction } = options

  return new Promise<void>((resolve) => {
    let startTime = performance.now()
    let requestId: number

    const execute = (timestamp: number) => {
      const elapsedTime = timestamp - startTime
      if (elapsedTime >= interval) {
        repeatingFunction()
        startTime = timestamp - (elapsedTime % interval)
      }
      requestId = requestAnimationFrame(execute)
    }

    const stop = () => {
      cancelAnimationFrame(requestId)
      if (exitFunction) exitFunction()
      resolve()
    }

    if (timeout) setTimeout(stop, timeout)

    requestId = requestAnimationFrame(execute)
  })
}
