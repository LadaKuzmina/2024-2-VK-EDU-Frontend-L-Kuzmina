import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import HeaderChat from '../components/header-chat/HeaderChat';
import MainChat from '../components/main-chat/MainChat';
import FooterChat from '../components/footer-chat/FooterChat';
import { Centrifuge } from 'centrifuge';
import {getMessagesFromBackend, sendMessageToBackend} from "../api/apiService";

const ChatPage = () => {
    const { id } = useParams(); // Chat ID
    const [messages, setMessages] = useState([]);
    const [interlocutorName, setInterlocutorName] = useState('Unknown');
    const centrifugeRef = React.useRef(null);

    // Fetch messages from the backend
    const fetchMessages = useCallback(async () => {
        try {
            const data = await getMessagesFromBackend(id);
            setMessages(data.results);
            if (data.results.length > 0) {
                setInterlocutorName(data.results[0].sender.first_name || 'Unknown');
            }
        } catch (error) {
            console.error('Failed to fetch messages:', error);
        }
    }, [id]);

    // Save message to the backend
    const saveMessageToBackend = async (messageText) => {
        try {
            const newMessage = await sendMessageToBackend({ chat: id, text: messageText });
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        } catch (error) {
            console.error('Failed to send message:', error);
        }
    };

    // Set up WebSocket connection with Centrifugo
    useEffect(() => {
        const setupCentrifugo = async () => {
            const tokenResponse = await fetch('/api/centrifugo/connect/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });
            const { token } = await tokenResponse.json();

            const centrifuge = new Centrifuge('wss://vkedu-fullstack-div2.ru/connection/websocket', {
                token,
            });

            const subscription = centrifuge.newSubscription(id, {
                getToken: async (ctx) => {
                    const subTokenResponse = await fetch('/api/centrifugo/subscribe/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                        },
                        body: JSON.stringify(ctx),
                    });
                    const { token: subToken } = await subTokenResponse.json();
                    return subToken;
                },
            });

            subscription.on('publication', (ctx) => {
                setMessages((prevMessages) => [...prevMessages, ctx.data]);
            });

            subscription.subscribe();
            centrifuge.connect();

            centrifugeRef.current = centrifuge;

            return () => {
                centrifuge.disconnect();
                subscription.unsubscribe();
            };
        };

        setupCentrifugo();
    }, [id]);

    // Fetch messages when the component mounts or chat ID changes
    useEffect(() => {
        fetchMessages();
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
