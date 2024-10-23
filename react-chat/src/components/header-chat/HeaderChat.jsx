import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './HeaderChat.css';

const HeaderChat = ({ interlocutorName, onBack }) => {
    return (
        <header className="header">
            <span id="arrow-back" className="icon" onClick={onBack}>
                <ArrowBackIcon />
            </span>
            <div className="interlocutor">
                <AccountCircleIcon id="default-icon" className="icon"/>
                <div className="info-interlocutor">
                    <h1 className="name-interlocutor">{interlocutorName}</h1>
                    <span className="time-interlocutor">был в сети 2 часа назад</span>
                </div>
            </div>
            <div className="symbols">
                <SearchIcon className="icon"/>
                <MoreVertIcon id="more-vert" className="icon"/>
            </div>
        </header>
    );
};

export default HeaderChat;
