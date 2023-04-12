/* eslint-disable */ 


        const {indexOfEmoji} = require("../functions/indexOfEmoji"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Tests the indexOfEmoji function using various test cases.
 */
function testIndexOfEmoji() {
    // Store test results
    const name_of_function = "indexOfEmoji";
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;

    // Test 1: Strings with single emoji
    try {
        const result = indexOfEmoji("Hello, 😀! How are you?", "😀");
        if (result === 7) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test 2: Strings with multiple emojis
    try {
        const result = indexOfEmoji("I love 🍕 and 🍔.", "🍔");
        if (result === 14) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test 3: Strings with no emojis
    try {
        const result = indexOfEmoji("No emojis here.", "😃");
        if (result === -1) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test 4: Mixed character types
    try {
        const result = indexOfEmoji("Numbers, letters, and 😺! 123ABC", "😺");
        if (result === 26) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test 5: Large strings
    try {
        const largeString = "A".repeat(10000) + "😀";
        const result = indexOfEmoji(largeString, "😀");
        if (result === 10000) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test 6: Special characters
    try {
        const result = indexOfEmoji("Special characters: !@#%^&*()_+-={}[]|;:'\"<>?,./`~£€§😂", "😂");
        if (result === 43) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Update the README with test badge
    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testIndexOfEmoji
};