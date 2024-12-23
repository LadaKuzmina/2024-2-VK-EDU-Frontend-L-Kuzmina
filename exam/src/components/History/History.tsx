import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {RootState} from "../../redux/store";
import {clearHistory} from "../../redux/translationSlice";
import {ArrowBack} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import './historyStyles.css'

const History: React.FC = () => {
    const translations = useSelector((state: RootState) => state.translation.translations);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <div className="header">
                <h1>История</h1>
                <ArrowBack className="arrow-back" onClick={()=>navigate('/')}/>
            </div>
            <button className="clear-button" onClick={() => dispatch(clearHistory())}>Очистить историю</button>
            {translations.length === 0 ? (
                <p>История пуста</p>
            ) : (
                <ul>
                    {translations.map((item, index) => (
                        <>
                            <hr/>
                            <li key={index}>
                                <p>{item.sourceLang} → {item.targetLang}</p>
                                <p className="original-text">{item.originalText}</p>
                                <p className="translated-text">{item.translatedText}</p>
                            </li>
                        </>
            ))}
        </ul>
    )
}
</div>
)
    ;
};

export default History;
