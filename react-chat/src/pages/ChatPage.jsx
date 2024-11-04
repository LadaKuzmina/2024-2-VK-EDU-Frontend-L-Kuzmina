import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderChat from '../components/header-chat/HeaderChat';
import MainChat from '../components/main-chat/MainChat';
import FooterChat from '../components/footer-chat/FooterChat';

const ChatPage = () => {
    const { id } = useParams();
    const messages = JSON.parse(localStorage.getItem(`myMessage-${id}`) || '[]');
    const [chat, setChat] = useState({ id, messages });

    const saveMessageToLocalStorage = (messageText) => {
        const messages = JSON.parse(localStorage.getItem(`myMessage-${id}`) || '[]');
        const newMessage = {
            message: messageText,
            timestamp: new Date().toLocaleTimeString().slice(0, -3),
            author: 'Автор',
            chatOwner: messages[0]?.chatOwner || 'Unknown',
        };
        const updatedMessages = [...messages, newMessage];
        localStorage.setItem(`myMessage-${id}`, JSON.stringify(updatedMessages));

        setChat(chat => ({ ...chat, messages: updatedMessages }));
    };

    return (
        <>
            <HeaderChat interlocutorName={chat.messages[0]?.chatOwner} />
            <MainChat messages={chat.messages} />
            <FooterChat chatId={id} saveMessage={saveMessageToLocalStorage} />
        </>
    );
};

export default ChatPage;
