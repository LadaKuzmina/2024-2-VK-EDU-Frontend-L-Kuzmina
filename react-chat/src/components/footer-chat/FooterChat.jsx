import React, { useState } from 'react';
import AttachmentIcon from '@mui/icons-material/Attachment';
import './FooterChat.css';
import {sendMessageToBackend} from "../../api/apiService";

const FooterChat = ({ chatId, saveMessage }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (message.trim() !== '') {
            try {
                // Отправка сообщения на сервер
                const response = await sendMessageToBackend(chatId, message);
                // Сохранение сообщения локально для мгновенного отображения
                saveMessage({
                    id: response.id,
                    text: response.text,
                    author: 'Автор',
                    timestamp: new Date(response.created_at).toLocaleTimeString().slice(0, -3),
                });
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
