import React, { useState } from 'react';
import AttachmentIcon from '@mui/icons-material/Attachment';
import './FooterChat.css';

const FooterChat = ({ chatId, saveMessage }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (message.trim() !== '') {
            saveMessage(chatId, message);
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

export default FooterChat;
