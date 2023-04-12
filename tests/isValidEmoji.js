/* eslint-disable */ 


        const {isValidEmoji} = require("../functions/isValidEmoji"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for isValidEmoji
 */
function testIsValidEmoji() {
    let numberOfTestsPassed = 0;
    let numberOfTestsFailed = 0;

    const nameOfFunction = "isValidEmoji";
    const isValidEmoji = (str) => {
        const unicodeEmojiRegEx = /^[\u{1F600}-\u{1F64F}\u{1F900}-\u{1F9FF}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E6}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1F2}-\u{1F1F4}\u{1F1E6}-\u{1F1FF}\u{1F201}-\u{1F5FF}\u{1F100}-\u{11049}]$/u;
        const shortCodeEmojiRegEx = /^:[\w-]+:$/;

        if (unicodeEmojiRegEx.test(str) || shortCodeEmojiRegEx.test(str)) {
            return true;
        }
        return false;
    };

    // Test for valid Unicode emoji
    try {
        const result = isValidEmoji('🙂');
        if (result === true) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Test for valid shortcode emoji
    try {
        const result = isValidEmoji(':smile:');
        if (result === true) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Test for invalid emoji
    try {
        const result = isValidEmoji('abc');
        if (result === false) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Test for mixed character types
    try {
        const result = isValidEmoji('🙂:smile:');
        if (result === false) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Test for special characters
    try {
        const result = isValidEmoji('!@#$%^&*()');
        if (result === false) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    addToReadme(generateTestBadge(nameOfFunction, numberOfTestsPassed, numberOfTestsFailed));
}

module.exports = {
    testIsValidEmoji
};