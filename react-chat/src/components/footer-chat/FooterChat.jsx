import React, { useState } from 'react';
import AttachmentIcon from '@mui/icons-material/Attachment';
import './FooterChat.css';
import {sendMessage} from "../../api/messages";


const FooterChat = ({ chatId, saveMessage }) => {
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

export default FooterChat;
