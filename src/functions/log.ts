type LogLevel = 'log' | 'info' | 'warn' | 'error'

interface LogOptions {
  label?: string | number | boolean
  level?: LogLevel
  time?: boolean
}

/**
 *
 * ---
 * **Description:**
 * *Logs a message with optional label, level, and timestamp.*
 *
 * **Example usage:**
 * ```js
 * const originalText = "Hello World";
 * const logOptions = { level: 'info', label: '', time: false };
 * log(originalText, logOptions);
 * console.log("hello-world");
 * ```
 * ---
 *
 * @param {string} content *input: the content of the log message.*
 * @param {LogOptions} [options] **Options :**
 * - **label:** A string label for the log message.
 * - **level:** The level of the log message (log, info, warn, or error).
 * - **time:** Whether to include a timestamp in the log message.
 * @returns {void}
 */
export function log(
  content: string | number | boolean,
  options: LogOptions = {}
): void {
  const { level = 'log', label = '', time = false } = options
  const timestamp = time ? new Date().toLocaleTimeString() : ''
  const logMessage = `${timestamp} ${label && `[${label}]`} ${content}`.trim()

  const levels: Record<
    LogLevel,
    { method: (...args: any[]) => void; color: string }
  > = {
    log: { method: console.log, color: '#A9A9A9' },
    info: { method: console.info, color: '#12b85b' },
    warn: { method: console.warn, color: '#FFD700' },
    error: { method: console.error, color: '#FFA07A' },
  }

  const { method, color } = levels[level]
  const style = `color: ${color}; font-weight: bold; font-style: italic;`

  method(`%c${logMessage}`, style)
}
