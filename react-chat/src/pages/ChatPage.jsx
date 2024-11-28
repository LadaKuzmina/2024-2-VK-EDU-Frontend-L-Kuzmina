import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import HeaderChat from '../components/header-chat/HeaderChat';
import MainChat from '../components/main-chat/MainChat';
import FooterChat from '../components/footer-chat/FooterChat';
import { getMessages, sendMessage } from '../api/messages';

const ChatPage = () => {
    const { id } = useParams(); // Chat ID
    const [messages, setMessages] = useState([]);
    const [interlocutorName, setInterlocutorName] = useState('Unknown');

    const fetchMessages = useCallback(async () => {
        try {
            const data = await getMessages(id);
            setMessages(data.results);
            if (data.results.length > 0) {
                setInterlocutorName(data.results[0].sender.first_name || 'Unknown');
            }
        } catch (error) {
            console.error('Failed to fetch messages:', error);
        }
    }, [id]);

    // Функция для сохранения нового сообщения
    const saveMessageToBackend = async (messageText) => {
        try {
            const newMessage = await sendMessage({ chat: id, text: messageText });
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        } catch (error) {
            console.error('Failed to send message:', error);
        }
    };

    // Поллинг: периодическое обновление сообщений
    useEffect(() => {
        fetchMessages();

        const interval = setInterval(() => {
            fetchMessages();
        }, 5000);

        return () => clearInterval(interval); // Очищаем интервал при размонтировании
    }, [fetchMessages]);

    return (
        <>
            <HeaderChat interlocutorName={interlocutorName} />
            <MainChat messages={messages} />
            <FooterChat chatId={id} saveMessage={saveMessageToBackend} />
        </>
    );
};

export default ChatPage;
