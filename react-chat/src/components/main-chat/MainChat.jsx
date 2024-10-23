import React from 'react';
import './MainChat.css';

const MainChat = ({ messages }) => {
    return (
        <main>
            <div id="list-message">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={message.author === 'Автор' ? 'message-item' : 'message-item-interlocutor'}
                    >
                        <span className="message-author">{message.author}</span>
                        <span className="message-text">{message.message}</span>
                        <span className="message-timestamp">{message.timestamp}</span>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default MainChat;
