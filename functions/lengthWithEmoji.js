/* eslint-disable */ 

/**
 * Returns the length of the given string treating emojis as single characters.
 *
 * @param {string} str - The input string to process.
 * @return {number} The length of the string with emojis treated as single characters.
 * 
 * @example:
 * lengthWithEmoji("hello 😊 world 🌍") // returns 13
 */
function lengthWithEmoji(str) {
    const emojiRegEx = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{200D}]/gu;
    const emojiRemovedString = str.replace(emojiRegEx, "");
    const emojisCount = [...str.matchAll(emojiRegEx)].length;
    return emojiRemovedString.length + emojisCount;
}

module.exports = {
    lengthWithEmoji
};