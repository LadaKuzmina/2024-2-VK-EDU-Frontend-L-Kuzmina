import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AttachmentIcon from '@mui/icons-material/Attachment';
import './FooterChat.css';
import {sendMessage} from '../../api/messages';

const FooterChat = ({ chatId }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (message.trim() !== '') {
      try {
        await sendMessage(chatId, message);
      } catch (error) {
        console.error('Ошибка при отправке сообщения:', error);
      }
      setMessage('');
    }
  };

  return (
    <footer className="footer">
      <form className="form" onSubmit={handleSubmit}>
        <div className="message-footer">
          <input
            type="text"
            placeholder="Сообщение"
            className="form-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <AttachmentIcon />
        </div>
      </form>
    </footer>
  );
};

// Добавление проверки типов пропсов
FooterChat.propTypes = {
  chatId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default FooterChat;
