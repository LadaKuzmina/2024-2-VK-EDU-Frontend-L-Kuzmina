import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import '../header-chat/HeaderChat.css';

const HeaderChats = () => {
  return (
    <header className="header">
      <span className="icon"><MenuIcon /></span>
      <h1>Messenger</h1>
      <span className="icon"><SearchIcon /></span>
    </header>
  );
};

export default HeaderChats;
