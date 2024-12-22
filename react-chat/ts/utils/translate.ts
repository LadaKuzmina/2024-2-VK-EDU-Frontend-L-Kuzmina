import { TranslationParams, TranslationResponse } from './types';
import { getFromCache, setToCache, generateCacheKey } from './cache';
import { fetchTranslation } from './api';

export async function translate(params: TranslationParams): Promise<TranslationResponse> {
    const cacheKey = generateCacheKey(params);
    const cachedTranslation = getFromCache(cacheKey);

    if (cachedTranslation) {
        return { translatedText: cachedTranslation };
    }

    const result = await fetchTranslation(params);

    if (!result.error) {
        setToCache(cacheKey, result.translatedText);
    }

    return result;
}
