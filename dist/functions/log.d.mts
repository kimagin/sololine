type LogLevel = 'log' | 'info' | 'warn' | 'error';
interface LogOptions {
    label?: string | number | boolean;
    level?: LogLevel;
    time?: boolean;
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
declare function log(content: string | number | boolean, options?: LogOptions): void;

export { log };
