import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import HeaderChat from '../components/header-chat/HeaderChat';
import MainChat from '../components/main-chat/MainChat';
import FooterChat from '../components/footer-chat/FooterChat';
import { getMessages, sendMessage } from '../api/messages';
import {getChatById} from "../api/chats";

const ChatPage = () => {
    const {id} = useParams();
    const [messages, setMessages] = useState([]);
    const [interlocutorName, setInterlocutorName] = useState('Unknown');

    const fetchMessages = useCallback(async () => {
        try {
            const data = await getMessages(id);
            setMessages(data);
            if (data.length > 0) {
                const dataChat = await getChatById(id);
                setInterlocutorName(dataChat.title || 'Unknown');
            }
        } catch (error) {
            console.error('Failed to fetch messages:', error);
        }
    }, [id]);


    const saveMessageToBackend = async (messageText) => {
        try {
            const newMessage = await sendMessage({chat: id, text: messageText});
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        } catch (error) {
            console.error('Failed to send message:', error);
        }
    };

    useEffect(() => {
        fetchMessages();

        const interval = setInterval(() => {
            fetchMessages();
        }, 5000);

        return () => clearInterval(interval); // Очищаем интервал при размонтировании
    }, [fetchMessages]);

    return (
        <>
            <HeaderChat interlocutorName={interlocutorName}/>
            <MainChat messages={messages}/>
            <FooterChat chatId={id} saveMessage={saveMessageToBackend}/>
        </>
    );
};

export default ChatPage;
