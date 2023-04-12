/* eslint-disable */ 


        const {lengthWithEmoji} = require("../functions/lengthWithEmoji"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for lengthWithEmoji
 */
function testLengthWithEmoji() {
    let numberOfTestsPassed = 0;
    let numberOfTestsFailed = 0;
    const nameOfFunction = "lengthWithEmoji";

    // Case 1: String with single emoji
    try {
        const inputStr = "Hello 😊";
        const result = lengthWithEmoji(inputStr);

        if (result === 6) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Case 2: String with multiple emojis
    try {
        const inputStr = "🙂🌍😊";
        const result = lengthWithEmoji(inputStr);

        if (result === 3) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Case 3: String with no emojis
    try {
        const inputStr = "Hello World";
        const result = lengthWithEmoji(inputStr);

        if (result === 11) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Case 4: String with mixed character types
    try {
        const inputStr = "12ab 😊🌍";
        const result = lengthWithEmoji(inputStr);

        if (result === 7) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Case 5: String with special characters
    try {
        const inputStr = "#!*@ 😁 %$^&";
        const result = lengthWithEmoji(inputStr);

        if (result === 9) {
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
    testLengthWithEmoji
};