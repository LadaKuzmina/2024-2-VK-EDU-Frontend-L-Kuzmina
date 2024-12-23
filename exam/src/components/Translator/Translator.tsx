import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addTranslation } from "../../redux/translationSlice";
import './translatorStyles.css'
import { History } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {languageOptions} from "../../languages/const";


const Translator: React.FC = () => {
    const [text, setText] = useState("");
    const [sourceLang, setSourceLang] = useState("auto");
    const [targetLang, setTargetLang] = useState("ru");
    const [translatedText, setTranslatedText] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleTranslate = async () => {
        try {
            const response = await axios.get("https://api.mymemory.translated.net/get", {
                params: {
                    q: text,
                    langpair: `${sourceLang}|${targetLang}`,
                },
            });
            const translation = response.data.responseData.translatedText;
            setTranslatedText(translation);

            dispatch(
                addTranslation({
                    sourceLang,
                    targetLang,
                    originalText: text,
                    translatedText: translation,
                })
            );
        } catch (error) {
            console.error("Translation error:", error);
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
                </div>
            )}
        </div>
    );
};

export default Translator;
