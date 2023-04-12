/* eslint-disable */ 


        const {splitByEmoji} = require("../functions/splitByEmoji"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for splitByEmoji
 */
function testSplitByEmoji() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "splitByEmoji";
    
    function addToReadme(str) {
        // This function will be provided
    }
    
    function generateTestBadge(name, passed, failed) {
        // This function will be provided
    }

    try {
        const result = splitByEmoji("Hello👋, how are you?🤔");
        if (JSON.stringify(result) === JSON.stringify(["Hello", "👋", ", how are you?", "🤔"])) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = splitByEmoji("No emojis in this string");
        if (JSON.stringify(result) === JSON.stringify(["No emojis in this string"])) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = splitByEmoji("👍Getting mixed emojis🎉in this string😄");
        if (JSON.stringify(result) === JSON.stringify(["", "👍", "Getting mixed emojis", "🎉", "in this string", "😄"])) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = splitByEmoji("😃😄😅😆😇😈");
        if (JSON.stringify(result) === JSON.stringify(["", "😃", "", "😄", "", "😅", "", "😆", "", "😇", "", "😈"])) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = splitByEmoji("Special chars!@#$%^&*()🤓with emoji");
        if (JSON.stringify(result) === JSON.stringify(["Special chars!@#$%^&*()", "🤓", "with emoji"])) {
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
    testSplitByEmoji
};