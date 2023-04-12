/* eslint-disable */ 

/**
 * Converts a string with shortcodes to a string with actual emojis.
 *
 * @param {string} inputString - The input string containing shortcodes.
 * @return {string} The input string with shortcodes replaced by actual emojis.
 *
 * @example
 *  emojify("Hello :smile:") will return "Hello 😄"
 */
function emojify(inputString) {
    const emojiMap = {
        ":smile:": "😄",
        ":laughing:": "😆",
        ":blush:": "😊",
        ":wink:": "😉",
        ":heart_eyes:": "😍",
        ":sob:": "😭",
        ":scream:": "😱",
        ":anger:": "😠",
        ":thumbsup:": "👍",
        ":thumbsdown:": "👎",
    };

    let result = inputString;

    for (const shortcode in emojiMap) {
        result = result.replace(new RegExp(shortcode, "g"), emojiMap[shortcode]);
    }

    return result;
}

module.exports = {
    emojify
};