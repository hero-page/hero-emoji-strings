
_This entire repository was created completely with **AI**, using the [hero-ai-package-creator](https://github.com/hero-page/hero-ai-package-creator), which is **open-source**, uses **GPT-4**, and is written & maintained by [**Sam Chahine**](https://hero.page/samir)_ ❣️🧞‍♀️ 



# hero-emoji-strings

A library to manage strings with emojis, making it easier to manipulate, count and sanitize strings that contain emojis.

## Functions

### emojiCount

Counts the number of emojis in a given string. Handles Unicode and shortcodes emojis.
Test cases: single emojis, strings with no emojis, strings with mixed emojis, and long strings with emojis.
Extreme cases: strings with special characters, strings with a mixture of letters, numbers, and emojis.
Ignored cases: malformed shortcodes.

### replaceEmoji

Replaces all occurrences of a specific emoji in a string with another string (could be another emoji).
Test cases: strings with single emoji, multiple emojis, and mixed character types.
Extreme cases: large strings and special characters.
Ignored cases: invalid input emoji.

### splitByEmoji

Splits a string into an array of strings divided by emojis.
Test cases: single emojis, strings with no emojis, strings with mixed emojis, and strings with various delimiters.
Extreme cases: strings with special characters and long strings with emojis.
Ignored cases: malformed shortcodes.

### emojiPositions

Returns an array of positions where emojis are found in a string.
Test cases: single emojis, strings with no emojis, strings with mixed emojis, and long strings with emojis.
Extreme cases: strings with special characters and strings with a mixture of letters, numbers, and emojis.
Ignored cases: malformed shortcodes.

### removeEmoji

Removes all emojis from a given string.
Test cases: single emojis, strings with no emojis, strings with mixed emojis, and long strings with emojis.
Extreme cases: strings with special characters and strings with a mixture of letters, numbers, and emojis.
Ignored cases: malformed shortcodes.

### emojify

Converts a string with shortcodes to a string with actual emojis.
Test cases: strings with shortcodes, no shortcodes, and mixed character types.
Extreme cases: large strings and special characters.
Ignored cases: malformed shortcodes.

### shortcodeify

Converts a string with emojis to a string with shortcodes.
Test cases: strings with emojis, no emojis, and mixed character types.
Extreme cases: large strings and special characters.
Ignored cases: unrecognizable emoji shortcodes.

### isValidEmoji

Checks if a given string is a valid emoji.
Test cases: valid Unicode and shortcode emojis, invalid emojis, and mixed character types.
Extreme cases: special characters.
Ignored cases: malformed shortcodes.

### getContainedEmojis

Returns an array of distinct emojis contained in a given string.
Test cases: single emojis, strings with no emojis, strings with mixed emojis, and long strings with emojis.
Extreme cases: strings with special characters, strings with a mixture of letters, numbers, and emojis.
Ignored cases: malformed shortcodes.

### substringWithEmoji

Returns a substring of the given string while treating emojis as single characters.
Test cases: strings with single emojis, multiple emojis, no emojis, and mixed character types.
Extreme cases: large strings and special characters.
Ignored cases: invalid indices.

### lengthWithEmoji

Returns the length of the given string treating emojis as single characters.
Test cases: strings with single emojis, multiple emojis, no emojis, and mixed character types.
Extreme cases: large strings and special characters.
Ignored cases: malformed shortcodes.

### indexOfEmoji

Returns the index of the first occurrence of the emoji in the given string or -1 if not present.
Test cases: strings with single emojis, multiple emojis, no emojis, and mixed character types.
Extreme cases: large strings and special characters.
Ignored cases: invalid input emoji.

## Author

[Sam Chahine](https://github.com/kingmeers), at [Hero](https://hero.page)
                

### Tests for emojiCount

![emojiCount](https://img.shields.io/badge/emojiCount()-6%20passed%2C%200%20failed.-13b285)

### Tests for emojify

![emojify](https://img.shields.io/badge/emojify()-5%20passed%2C%200%20failed.-13b285)

### Tests for lengthWithEmoji

![lengthWithEmoji](https://img.shields.io/badge/lengthWithEmoji()-3%20passed%2C%202%20failed.-ff69b4)

### Tests for removeEmoji

![removeEmoji](https://img.shields.io/badge/removeEmoji()-0%20passed%2C%206%20failed.-ff69b4)

### Tests for replaceEmoji

![replaceEmoji](https://img.shields.io/badge/replaceEmoji()-4%20passed%2C%200%20failed.-13b285)

### Tests for shortcodeify

![shortcodeify](https://img.shields.io/badge/shortcodeify()-3%20passed%2C%202%20failed.-ff69b4)

### Tests for substringWithEmoji

![substringWithEmoji](https://img.shields.io/badge/substringWithEmoji()-2%20passed%2C%203%20failed.-ff69b4)

### Tests for indexOfEmoji

![indexOfEmoji](https://img.shields.io/badge/indexOfEmoji()-4%20passed%2C%202%20failed.-ff69b4)

### Tests for isValidEmoji

![isValidEmoji](https://img.shields.io/badge/isValidEmoji()-0%20passed%2C%205%20failed.-ff69b4)

### Tests for getContainedEmojis

![getContainedEmojis](https://img.shields.io/badge/getContainedEmojis()-3%20passed%2C%203%20failed.-ff69b4)