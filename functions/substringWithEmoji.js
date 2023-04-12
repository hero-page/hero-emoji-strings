/* eslint-disable */ 

  /**
   * Returns a substring of the given string while treating emojis as single characters.
   *
   * @param {string} str - The input string.
   * @param {number} startIndex - The starting index of the substring.
   * @param {number} endIndex - The ending index of the substring.
   * @return {string} The substring with emojis treated as single characters.
   *
   * @example
   * // returns "Hell🌍 Worl😀"
   * substringWithEmoji("Hell🌍 Worl😀", 0, 19)
   */
  function substringWithEmoji(str, startIndex, endIndex) {
      const emojiRegex = /[\u{1F600}-\u{1F64F}]/gu;
      let emojiCount = 0;
      let emojiIndexPosition = [];
      let match;
      while ((match = emojiRegex.exec(str)) !== null) {
          emojiCount++;
          emojiIndexPosition.push({
              start: match.index,
              end: match.index + 1
          });
      }
      
      const correctedIndexPosition = (index) => {
          for (const position of emojiIndexPosition) {
              if (index >= position.start) {
                  index++;
              } else {
                  break;
              }
          }
          return index;
      };
      
      const correctedStartIndex = correctedIndexPosition(startIndex);
      const correctedEndIndex = correctedIndexPosition(endIndex);
      
      return str.substring(correctedStartIndex, correctedEndIndex);
  }
  
  module.exports = {
      substringWithEmoji
  };