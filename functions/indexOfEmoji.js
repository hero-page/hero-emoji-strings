/* eslint-disable */ 

/**
 * Returns the index of the first occurrence of the emoji in the given string or -1 if not present.
 *
 * @param {string} str - The input string to search in.
 * @param {string} emoji - The emoji to find in the string.
 * @return {number} The index of the first occurrence of the emoji in the given string or -1 if not present.
 * @example
 * indexOfEmoji("Hello, 😀! How are you?", "😀"); // 7
 * indexOfEmoji("I love 🍕 and 🍔.", "🍔"); // 14
 * indexOfEmoji("No emojis here.", "😃"); // -1
 */
function indexOfEmoji(str, emoji) {
    for (let i = 0; i < str.length; i++) {
        if (str.codePointAt(i) === emoji.codePointAt(0)) {
            return i;
        }
    }
    return -1;
}

module.exports = {
    indexOfEmoji
};