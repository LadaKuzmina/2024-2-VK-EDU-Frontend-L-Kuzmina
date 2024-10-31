import {useNavigate} from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import '../header-chat/HeaderChat.css';

export const HeaderProfile = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <ArrowBackIcon  id="arrow-back" className="icon"onClick={() => navigate('/')} />
            <h1 className="name-interlocutor">{'Edit'}</h1>
            <div className="symbols">
                <SearchIcon className="icon"/>
            </div>
        </header>
    );
}