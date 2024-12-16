import {useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../header-chat/HeaderChat.css';
import CheckIcon from '@mui/icons-material/Check';
import React from 'react';

export const HeaderProfile = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <ArrowBackIcon id="arrow-back" className="icon" onClick={() => navigate('/')}/>
      <h1 className="name-interlocutor">{'Edit Profile'}</h1>
      <CheckIcon className="symbols"/>
    </header>
  );
}