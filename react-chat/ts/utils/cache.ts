import {TranslationParams} from "./types";

const cache = new Map<string, string>();

export function getFromCache(key: string): string | undefined {
    return cache.get(key);
}

export function setToCache(key: string, value: string): void {
    cache.set(key, value);
}

export function generateCacheKey(params: TranslationParams): string {
    return `${params.text}-${params.fromLanguage}-${params.toLanguage}`;
}
