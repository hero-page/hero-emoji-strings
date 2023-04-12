/* eslint-disable */ 

/**
 * Converts a string with emojis to a string with shortcodes.
 *
 * @param {string} inputString - The string containing emojis.
 * @return {string} A string with the emojis replaced by their corresponding shortcodes.
 *
 * @example
 * // returns "Hello :smile:!"
 * shortcodeify("Hello 😄!");
 */
function shortcodeify(inputString) {
    const emojiRegex = /([\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}])/gu;
    const emojiMap = {
        "😀": ":grinning:",
        "😃": ":smiley:",
        "😄": ":smile:",
        // Add the rest of the emoji-shortcode mappings here
    };

    const shortcodeString = inputString.replace(emojiRegex, (match) => {
        return emojiMap[match] ? emojiMap[match] : match;
    });

    return shortcodeString;
}

module.exports = {
    shortcodeify
};