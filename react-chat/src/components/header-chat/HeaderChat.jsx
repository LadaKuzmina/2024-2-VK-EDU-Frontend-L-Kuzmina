import React from 'react';
import PropTypes from 'prop-types';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './HeaderChat.css';
import {useNavigate} from 'react-router-dom';

const HeaderChat = ({ interlocutorName }) => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <span id="arrow-back" className="icon" onClick={() => {
        navigate('/');
      }}>
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

// Добавление проверки типов пропсов
HeaderChat.propTypes = {
  interlocutorName: PropTypes.string.isRequired,
};

export default HeaderChat;
