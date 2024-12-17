import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import './NewButtonChat.css';

const NewChatButton = () => {
  return (
    <div className="new-chat-button">
      <span className="icon"><EditIcon /></span>
    </div>
  );
};

export default NewChatButton;
