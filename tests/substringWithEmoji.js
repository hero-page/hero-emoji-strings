/* eslint-disable */ 


        const {substringWithEmoji} = require("../functions/substringWithEmoji"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test for "substringWithEmoji" function for various situations.
 */
function testSubstringWithEmoji() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "substringWithEmoji";

    try {
        const result = substringWithEmoji("Hell🌍 Worl😀", 0, 19);
        if (result === "Hell🌍 Worl😀") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = substringWithEmoji("Emojis:🙂🙃😉", 4, 8);
        if (result === "🙂🙃😉") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = substringWithEmoji("No emojis here!", 0, 7);
        if (result === "No emoj") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = substringWithEmoji(
            "🔠Some special chars!@#%&*🔡",
            1,
            24
        );
        if (result === "Some special chars!@#%&*") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = substringWithEmoji(
            "Large String ௵ 🌌End",
            5,
            19
        );
        if (result === "String ௵ 🌌") {
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
    testSubstringWithEmoji
};