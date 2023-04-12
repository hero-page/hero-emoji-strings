/* eslint-disable */ 

/**
 * Checks if a given string is a valid emoji.
 *
 * @param {string} str - The string to validate as an emoji.
 * @return {boolean} True if the string is a valid emoji, false otherwise.
 * @example
 * // Returns true
 * isValidEmoji('🙂')
 * // Returns true
 * isValidEmoji(':smile:')
 * // Returns false
 * isValidEmoji('abc')
 */
function isValidEmoji(str) {
    const unicodeEmojiRegEx = /^[\u{1F600}-\u{1F64F}\u{1F900}-\u{1F9FF}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E6}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1F2}-\u{1F1F4}\u{1F1E6}-\u{1F1FF}\u{1F201}-\u{1F5FF}\u{1F100}-\u{11049}]$/u;
    const shortCodeEmojiRegEx = /^:[\w-]+:$/;

    if (unicodeEmojiRegEx.test(str) || shortCodeEmojiRegEx.test(str)) {
        return true;
    }
    return false;
}

module.exports = {
    isValidEmoji
};