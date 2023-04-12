const {testEmojiCount} = require('./tests/emojiCount.js');
const {testEmojify} = require('./tests/emojify.js');
const {testGetContainedEmojis} = require('./tests/getContainedEmojis.js');
const {testIndexOfEmoji} = require('./tests/indexOfEmoji.js');
const {testIsValidEmoji} = require('./tests/isValidEmoji.js');
const {testLengthWithEmoji} = require('./tests/lengthWithEmoji.js');
const {testRemoveEmoji} = require('./tests/removeEmoji.js');
const {testReplaceEmoji} = require('./tests/replaceEmoji.js');
const {testShortcodeify} = require('./tests/shortcodeify.js');
const {testSplitByEmoji} = require('./tests/splitByEmoji.js');
const {testSubstringWithEmoji} = require('./tests/substringWithEmoji.js');

testEmojiCount();
testEmojify();
testGetContainedEmojis();
testIndexOfEmoji();
testIsValidEmoji();
testLengthWithEmoji();
testRemoveEmoji();
testReplaceEmoji();
testShortcodeify();
testSplitByEmoji();
testSubstringWithEmoji();