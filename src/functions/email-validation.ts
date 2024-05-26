// create a type script email validation
/**
 * Validates whether a given string is a valid email address.
 *
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 *
 * **Example Usage:**
 *
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
 *
 * @description This function uses a regular expression to validate whether the given string is in the format of an email address. It checks for the presence of '@', '.', and alphanumeric characters.
 */
export function isEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}
