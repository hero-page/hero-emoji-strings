/* eslint-disable */ 

/**
 * Splits a string by emojis, returning an array of substrings.
 *
 * @param {string} str - The string to be split by emojis.
 * @return {string[]} An array of strings after splitting by emojis.
 *
 * @example
 *    const result = splitByEmoji("Hello👋, how are you?🤔");
 *    console.log(result); // ["Hello", "👋", ", how are you?", "🤔"]
 */
function splitByEmoji(str) {
    const emojiRegex = /[\u{1F300}-\u{1F5FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{00a9}\u{00ae}\u{2000}-\u{3300}\u{E0020}-\u{E007F}\u{FE00}-\u{FE0F}\u{FE20}-\u{FE2F}]+/gu;
    return str.split(emojiRegex).reduce((arr, chunk) => {
        let match;
        while ((match = emojiRegex.exec(str)) !== null) {
            const emoji = match[0];
            const index = match.index;
            if (str.slice(0, index) === chunk) {
                arr.push(chunk);
                arr.push(emoji);
                str = str.slice(index + emoji.length);
                break;
            }
        }
        return arr;
    }, []);
}

module.exports = {
    splitByEmoji
};