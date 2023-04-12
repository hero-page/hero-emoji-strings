/* eslint-disable */ 


        const {getContainedEmojis} = require("../functions/getContainedEmojis"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test for the getContainedEmojis function
 */
function testGetContainedEmojis() {
    let numberOfTestsPassed = 0;
    let numberOfTestsFailed = 0;
    const nameOfFunction = "getContainedEmojis";

    try {
        const input = "Hello! 😃 Have a nice day! 🌞";
        const result = getContainedEmojis(input);
        if (JSON.stringify(result) === JSON.stringify(["😃", "🌞"])) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const input = "No emojis here!";
        const result = getContainedEmojis(input);
        if (JSON.stringify(result) === JSON.stringify([])) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const input = "😃😃😃";
        const result = getContainedEmojis(input);
        if (JSON.stringify(result) === JSON.stringify(["😃"])) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const input = "🌞🌧⛄";
        const result = getContainedEmojis(input);
        if (JSON.stringify(result) === JSON.stringify(["🌞", "🌧", "⛄"])) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const input = "🌞!@#$%^&*()😃";
        const result = getContainedEmojis(input);
        if (JSON.stringify(result) === JSON.stringify(["🌞", "😃"])) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const input = "abc123😃🌞!@#";
        const result = getContainedEmojis(input);
        if (JSON.stringify(result) === JSON.stringify(["😃", "🌞"])) {
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
    testGetContainedEmojis
};