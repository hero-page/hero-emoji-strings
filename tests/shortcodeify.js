/* eslint-disable */ 


        const {shortcodeify} = require("../functions/shortcodeify"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Tests the shortcodeify function
 */
function testShortcodeify() {
    const name_of_function = "shortcodeify";

    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;

    try {
        const inputString = "Hello 😄!";
        const expectedResult = "Hello :smile:!";
        const result = shortcodeify(inputString);
        if (result === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const inputString = "No emojis here.";
        const expectedResult = "No emojis here.";
        const result = shortcodeify(inputString);
        if (result === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const inputString = "🌟Mixed 😃 characters ✨";
        const expectedResult = ":star:Mixed :smiley: characters :sparkles:";
        const result = shortcodeify(inputString);
        if (result === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const inputString = "😄🌸".repeat(5000);
        const expectedResult = ":smile::cherry_blossom:".repeat(5000);
        const result = shortcodeify(inputString);
        if (result === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const inputString = "¿¡Special 😃 characters?!";
        const expectedResult = "¿¡Special :smiley: characters?!";
        const result = shortcodeify(inputString);
        if (result === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testShortcodeify
};