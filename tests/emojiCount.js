/* eslint-disable */ 


        const {emojiCount} = require("../functions/emojiCount"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for emojiCount function.
 */
function testEmojiCount() {
    let numberOfTestsPassed = 0;
    let numberOfTestsFailed = 0;
    const nameOfFunction = "emojiCount";

    // Test case: single emoji
    try {
        const result = emojiCount("😃");
        if (result === 1) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Test case: string with no emojis
    try {
        const result = emojiCount("Hello, world!");
        if (result === 0) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Test case: strings with mixed emojis
    try {
        const result = emojiCount("Hello 😃! Have a great day! :smile: :wink:");
        if (result === 3) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Test case: long strings with emojis
    try {
        const result = emojiCount("This is a long string with multiple emojis 😃😄😁😆 and shortcodes :smile: :wink: mixed in it.");
        if (result === 6) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Extreme case: strings with special characters
    try {
        const result = emojiCount("!!@@$%%^&*><?#&!😃!^:smile:");
        if (result === 2) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Extreme case: strings with a mixture of letters, numbers, emojis
    try {
        const result = emojiCount("Hello 123! 😃 :wink: 456!");
        if (result === 2) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Add to README
    addToReadme(generateTestBadge(nameOfFunction, numberOfTestsPassed, numberOfTestsFailed));
}

module.exports = {
    testEmojiCount
};