/**
 *
 * ---
 * **Description:**
 * Slugifies a given string by converting it to lowercase,
 * replacing spaces with hyphens (-), removing non-word characters,
 * and trimming leading/trailing hyphens.
 * ---
 * **Example usage:**
 * ```js
 * const originalText = "Hello World";
 * const slugifiedText = slugify(originalText);
 * console.log(slugifiedText); // Output: "hello-world"
 * ```
 *
 * @param {string} text The input string to be slugified.
 * @returns {string} The slugified string.
 */
declare function slugify(text: string): string;

export { slugify };
