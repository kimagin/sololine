/**
 * Slugifies a given string by converting it to lowercase,
 * replacing spaces with hyphens (-), removing non-word characters,
 * and trimming leading/trailing hyphens.
 *
 * Example usage:
 * ```js
 * const originalText = "Hello World";
 * const slugifiedText = slugify(originalText);
 * console.log(slugifiedText); // Output: "hello-world"
 * ```
 *
 * @param {string} text The input string to be slugified.
 * @returns {string} The slugified string.
 */
export function slugify(text: string): string {
  return text
    .toString() // Ensure the input is a string
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, '-') // Replace spaces with hyphens (-)
    .replace(/[^\w-]+/g, '') // Remove non-word characters (including special chars and digits)
    .replace(/\-\-+/g, '-') // Replace multiple hyphens (-) with a single one
    .replace(/^[-_]+/, '') // Trim leading hyphens or underscores
    .replace(/[-_]+$/, '') // Trim trailing hyphens or underscores
}
