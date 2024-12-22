import { translate } from "./translate";

export const testTranslate = async () => {
    console.log('Testing translation...');

    const params = {
        text: 'Hello, world!',
        fromLanguage: 'en',
        toLanguage: 'fr',
        guessLanguage: false,
    };

    try {
        const result = await translate(params);

        if (result.error) {
            console.error('Error:', result.error);
        } else {
            console.log('Translation:', result.translatedText);
        }
    } catch (error) {
        console.error('Unexpected Error:', error);
    }
};


testTranslate();
