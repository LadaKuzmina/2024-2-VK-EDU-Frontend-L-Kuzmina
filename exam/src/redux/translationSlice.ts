import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Translation {
    sourceLang: string;
    targetLang: string;
    originalText: string;
    translatedText: string;
}

interface TranslationState {
    translations: Translation[];
}

const initialState: TranslationState = {
    translations: [],
};

const translationSlice = createSlice({
    name: "translation",
    initialState,
    reducers: {
        addTranslation: (state, action: PayloadAction<Translation>) => {
            state.translations.push(action.payload);
            localStorage.setItem("translations", JSON.stringify(state.translations));
        },
        loadTranslations: (state) => {
            const storedTranslations = localStorage.getItem("translations");
            if (storedTranslations) {
                state.translations = JSON.parse(storedTranslations);
            }
        },
        clearHistory: (state) => {
            state.translations = [];
            localStorage.removeItem("translations");
        },
    },
});

export const { addTranslation, loadTranslations, clearHistory } =
    translationSlice.actions;

export default translationSlice.reducer;
