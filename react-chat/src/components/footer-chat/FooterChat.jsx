import React, { useState } from 'react';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { LocationOn } from "@mui/icons-material";
import './FooterChat.css';

const FooterChat = ({ chatId, saveMessage }) => {
    const [message, setMessage] = useState('');
    const [isSendingLocation, setIsSendingLocation] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (message.trim() !== '') {
            saveMessage({ text: message });
            setMessage('');
        }
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                saveMessage({ image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                saveMessage({ image: reader.result }); // изображение как Base64
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const sendLocation = () => {
        if (!navigator.geolocation) {
            alert("Геолокация не поддерживается вашим браузером.");
            return;
        }

        setIsSendingLocation(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                const locationMessage = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
                saveMessage({ text: locationMessage });
                setIsSendingLocation(false);
            },
            (error) => {
                console.error('Ошибка при получении координат:', error);
                setIsSendingLocation(false);
            }
        );
    };

    return (
        <footer className="footer" onDrop={handleDrop} onDragOver={handleDragOver}>
            <form className="form" onSubmit={handleSubmit}>
                <div className="message-footer">
                    <input
                        type="text"
                        placeholder="Сообщение"
                        className="form-input"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="file-input"
                        onChange={handleFileUpload}
                    />
                    <label htmlFor="file-input">
                        <AttachmentIcon style={{ cursor: 'pointer' }} />
                    </label>
                    <LocationOn
                        onClick={sendLocation}
                        style={{ cursor: 'pointer', color: isSendingLocation ? 'gray' : 'inherit' }}
                    />
                </div>
            </form>
        </footer>
    );
};

export default FooterChat;
