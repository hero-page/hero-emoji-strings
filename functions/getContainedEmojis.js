/* eslint-disable */ 

/**
 * Returns an array of distinct emojis contained in a given string.
 *
 * @param {string} str - The input string to search for emojis.
 * @return {string[]} An array of distinct emojis found in the input string.
 *
 * @example
 * const input = "Hello! 😃 Have a nice day! 🌞";
 * const result = getContainedEmojis(input);
 * console.log(result); // ["😃", "🌞"]
 */
function getContainedEmojis(str) {
    const regex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E6}-\u{1F1FF}\u{2600}-\u{26FF}]+/gu;
    const matches = new Set(str.match(regex));

    return Array.from(matches);
}

module.exports = {
    getContainedEmojis
};