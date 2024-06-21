/**
 * ---
 * **Description:**
 * *Validates whether a given string is a valid email address.
 * This function uses a regular expression to validate whether the given string is in the format of an email address. It checks for the presence of '@', '.', and alphanumeric characters.*
 *
 * **Example Usage:**
 * ```javascript
 * import { _isEmail } from './validateEmail';
 *
 * const email = 'user@example.com';
 * if (validateEmail(email)) {
 *   console.log('The email address is valid');
 * } else {
 *   console.log('The email address is invalid');
 * }
 * ```
 * @param {string} email *input: the email address to validate.*
 *
 * @returns {boolean} *True if the email is valid, false otherwise.*
 */
declare function isEmail(email: string): boolean;

export { isEmail };
