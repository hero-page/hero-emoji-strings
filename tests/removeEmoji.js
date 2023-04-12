/* eslint-disable */ 


        const {removeEmoji} = require("../functions/removeEmoji"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for removeEmoji
 */
function testRemoveEmoji() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "removeEmoji";

    try {
        const input = "Hello 😃 World 🌍";
        const expectedResult = "Hello  World ";
        if (removeEmoji(input) === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const input = "💯🔥😄";
        const expectedResult = "";
        if (removeEmoji(input) === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const input = "Hello World";
        const expectedResult = "Hello World";
        if (removeEmoji(input) === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const input = "😃🌍👍💯🔥";
        const expectedResult = "";
        if (removeEmoji(input) === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const input = "Hello 😃 World 🌍! How are you today? 😊";
        const expectedResult = "Hello  World ! How are you today? ";
        if (removeEmoji(input) === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const input = "Hello 😃 World 🌍! 123 💯🔥🍕";
        const expectedResult = "Hello  World ! 123 ";
        if (removeEmoji(input) === expectedResult) {
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
    testRemoveEmoji
};