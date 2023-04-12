/* eslint-disable */ 

/**
 * Counts the number of emojis in a given string. Handles Unicode and shortcodes emojis.
 *
 * @param {string} inputString - The string to count emojis in.
 * @return {number} The count of emojis in the inputString.
 *
 * @example
 * // returns 3
 * emojiCount("Hello 😃! Have a great day! :smile: :wink:");
 */
function emojiCount(inputString) {
    const regexEmoji = /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E6}-\u{1F1FF}]|:[a-z_]+:/ug;
    const matches = inputString.match(regexEmoji);
    return matches ? matches.length : 0;
}

module.exports = {
    emojiCount
};