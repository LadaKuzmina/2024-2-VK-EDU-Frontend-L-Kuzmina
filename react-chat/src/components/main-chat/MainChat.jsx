import React from 'react';
import PropTypes from 'prop-types';
import './MainChat.css';

const MainChat = ({ messages }) => {
  return (
    <main>
      <div id="list-message">
        {[...messages].reverse().map((message, index) => (
          <div
            key={index}
            className={message.author === 'Автор' ? 'message-item' : 'message-item-interlocutor'}
          >
            <span className="message-author">{message.author}</span>
            <span className="message-text">{message.text}</span>
            <span className="message-timestamp">{message.timestamp}</span>
          </div>
        ))}
      </div>
    </main>
  );
};

// Добавление проверки типов пропсов
MainChat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
  })).isRequired,
};

export default MainChat;
