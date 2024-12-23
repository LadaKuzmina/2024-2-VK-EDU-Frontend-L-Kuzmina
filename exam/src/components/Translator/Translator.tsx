import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addTranslation } from "../../redux/translationSlice";
import './translatorStyles.css';
import { History } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { languageOptions } from "../../languages/const";

const Translator: React.FC = () => {
    const [text, setText] = useState("");
    const [sourceLang, setSourceLang] = useState("auto");
    const [targetLang, setTargetLang] = useState("ru");
    const [translatedText, setTranslatedText] = useState("");
    const [detectedLang, setDetectedLang] = useState<string | null>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleTranslate = async () => {
        if (!text.trim()) {
            console.error("Please enter text to translate.");
            return;
        }

        try {
            const langpair = `${sourceLang === "auto" ? "" : sourceLang}|${targetLang}`;
            const response = await axios.get("https://api.mymemory.translated.net/get", {
                params: {
                    q: text,
                    langpair,
                },
            });

            const translation = response.data.responseData.translatedText;
            const detectedLanguage = response.data.responseData.detectedSourceLanguage;

            if (sourceLang === "auto" && detectedLanguage) {
                setDetectedLang(detectedLanguage);
            }

            if (response.data.responseStatus !== 200) {
                console.error("Translation API error:", response.data);
                setTranslatedText("Translation failed. Please try again.");
                return;
            }

            setTranslatedText(translation);

            dispatch(
                addTranslation({
                    sourceLang: detectedLanguage || sourceLang,
                    targetLang,
                    originalText: text,
                    translatedText: translation,
                })
            );
        } catch (error) {
            console.error("Translation error:", error);
            setTranslatedText("An error occurred while translating. Please try again.");
        }
    };


    return (
        <div className="container-translator">
            <div className="header-translator">
                <div className="header-text">VK Translate</div>
                <History className="history-icon" onClick={() => navigate('/history')} />
            </div>
            <textarea
                className="text-area"
                placeholder="Enter text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div className="language-selector-container">
                <select
                    className="select"
                    value={sourceLang}
                    onChange={(e) => setSourceLang(e.target.value)}
                >
                    <option value="auto">Auto Detect</option>
                    {Object.entries(languageOptions).map(([label, code]) => (
                        <option key={code} value={code}>{label}</option>
                    ))}
                </select>
                <span className="arrow">&#8594;</span>
                <select
                    className="select"
                    value={targetLang}
                    onChange={(e) => setTargetLang(e.target.value)}
                >
                    {Object.entries(languageOptions).map(([label, code]) => (
                        <option key={code} value={code}>{label}</option>
                    ))}
                </select>
            </div>
            <button className="button" onClick={handleTranslate}>Translate</button>
            {translatedText && (
                <div className="result-box">
                    <strong>Result:</strong> {translatedText}
                    {detectedLang && sourceLang === "auto" && (
                        <p className="detected-lang">Detected Language: {detectedLang}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Translator;
