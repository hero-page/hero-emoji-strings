/* eslint-disable */ 


        const {replaceEmoji} = require("../functions/replaceEmoji"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test for replaceEmoji function.
 */
function testReplaceEmoji() {
    let numberOfTestsPassed = 0;
    let numberOfTestsFailed = 0;
    const nameOfFunction = "replaceEmoji";

    try {
        const result = replaceEmoji("🥳 Party time! 🥳🥳", "🥳", "🎉");
        if (result === "🎉 Party time! 🎉🎉") {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const result = replaceEmoji("Hello 🌍! Have a great day! 🌞", "🌞", "💫");
        if (result === "Hello 🌍! Have a great day! 💫") {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const result = replaceEmoji("This is a large string with multiple 🚀 emojis 🎃 and special characters $*=&#@", "🚀", "⭐");
        if (result === "This is a large string with multiple ⭐ emojis 🎃 and special characters $*=&#@") {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const result = replaceEmoji("Replace nonexistent emoji ☃️", "🎄", "💣");
        if (result === "Replace nonexistent emoji ☃️") {
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
    testReplaceEmoji
};