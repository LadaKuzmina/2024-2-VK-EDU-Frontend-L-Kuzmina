/*
For the input of your function, you will be given one sentence.
You have to return a corrected version,
that starts with a capital letter and ends with a period (dot).

Example:

input (string): "hey, friend"
output (string): "Hey, friend."

Updated first 'h' to 'H', added '.'.

More examples:

correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."
 */

export default function correctSentence(text) {
    if (typeof text !== 'string') {
        return false;
    }
    const replacements = {
        '&quot;': '"',
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
    };

    if (text === '') {
        return '';
    }

    text = text.replace(/&amp;|&quot;|&lt;|&gt;/g, match => replacements[match]);

    let first_index = 0;
    for (let i = 0; i < text.length; i++) {
        if (!(Object.values(replacements).includes(text.charAt(i)))) {
            first_index = i;
            break;
        }
    }

    if (text.charAt(text.length - 1) !== '.') {
        text = text + '.';
    }

    return text.slice(0, first_index) +
        text.charAt(first_index).toUpperCase() +
        text.slice(first_index + 1);
}
