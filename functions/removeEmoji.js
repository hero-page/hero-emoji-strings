/* eslint-disable */ 

/**
 * Removes all emojis from a given string.
 *
 * @param {string} input - The input string with emojis.
 * @return {string} The input string with emojis removed.
 *
 * @example
 * const stringWithoutEmojis = removeEmoji("Hello 😃 World 🌍");
 * console.log(stringWithoutEmojis); // Output: "Hello  World "
 */
function removeEmoji(input) {
    const emojiRegEx = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|[\u2122-\u2139]|\ud83c\udc04|[\u2600-\u26E1]|[\u2700-\u27b0]|[\u2b05-\u2b07]|\u2b1b|\u2b1c|\u2b50|\u2b55]|[\ud83d\udebb-\ud83b]|\ud83c[\udf80-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeaf])/g;
    return input.replace(emojiRegEx, '');
}

module.exports = {
    removeEmoji
};