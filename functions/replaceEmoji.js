/* eslint-disable */ 

/**
 * Replaces all occurrences of a specific emoji in a string with another string (could be another emoji).
 *
 * @param {string} inputStr - The string in which to replace the emojis.
 * @param {string} originalEmoji - The emoji to replace.
 * @param {string} newEmoji - The new emoji or string to replace the original emoji with.
 * @return {string} The string with all occurrences of the original emoji replaced with the new emoji.
 *
 * @example
 * // Replaces all occurrences of 🥳 with 🎉:
 * const result = replaceEmoji("🥳 Party time! 🥳🥳", "🥳", "🎉");
 * console.log(result); // "🎉 Party time! 🎉🎉"
 */
function replaceEmoji(inputStr, originalEmoji, newEmoji) {
    const regex = new RegExp(escapeRegExp(originalEmoji), 'g');
    return inputStr.replace(regex, newEmoji);

    function escapeRegExp(s) {
        return s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
}

module.exports = {
    replaceEmoji
};