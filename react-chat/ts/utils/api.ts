import { TranslationParams, TranslationResponse } from './types';

export async function fetchTranslation(params: TranslationParams): Promise<TranslationResponse> {
    const { text, fromLanguage, toLanguage, guessLanguage } = params;

    const langpair = guessLanguage ? `${'auto'}|${toLanguage}` : `${fromLanguage}|${toLanguage}`;
    const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langpair}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.responseStatus !== 200) {
            throw new Error(data.responseDetails || 'Unknown error');
        }

        return {
            translatedText: data.responseData.translatedText,
            detectedSourceLanguage: data.responseData.matchedLang,
        };
    } catch (error) {
        return { translatedText: '', error: error instanceof Error ? error.message : 'Unknown error' };
    }
}
