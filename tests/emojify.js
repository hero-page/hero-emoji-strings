/* eslint-disable */ 


        const {emojify} = require("../functions/emojify"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for emojify.
 */
function testEmojify() {
    let numberOfTestsPassed = 0;
    let numberOfTestsFailed = 0;
    const nameOfFunction = "emojify";

    const inputString1 = "Hello :smile:";
    const expectedOutput1 = "Hello 😄";
    try {
        const result1 = emojify(inputString1);
        if (result1 === expectedOutput1) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    const inputString2 = "No shortcodes here!";
    const expectedOutput2 = "No shortcodes here!";
    try {
        const result2 = emojify(inputString2);
        if (result2 === expectedOutput2) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    const inputString3 = "Mix :laughing: of :wink: and :blush: types";
    const expectedOutput3 = "Mix 😆 of 😉 and 😊 types";
    try {
        const result3 = emojify(inputString3);
        if (result3 === expectedOutput3) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    const inputString4 = ":anger:.com/:thumbsdown:?utm=:thumbsup:";
    const expectedOutput4 = "😠.com/👎?utm=👍";
    try {
        const result4 = emojify(inputString4);
        if (result4 === expectedOutput4) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    const inputString5 = "💥:sob:💢:scream:\n💨:heart_eyes:";
    const expectedOutput5 = "💥😭💢😱\n💨😍";
    try {
        const result5 = emojify(inputString5);
        if (result5 === expectedOutput5) {
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
    testEmojify
};