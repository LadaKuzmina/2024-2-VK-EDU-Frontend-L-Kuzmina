export interface TranslationParams {
    text: string;
    fromLanguage: string;
    toLanguage: string;
    guessLanguage?: boolean;
}

export interface TranslationResponse {
    translatedText: string;
    detectedSourceLanguage?: string;
    error?: string;
}
