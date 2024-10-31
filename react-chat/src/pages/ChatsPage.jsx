import React, { useEffect, useState } from 'react';
import HeaderChats from "../components/header-chats/HeaderChats";
import MainChats from "../components/main-chats/MainChats";
import { chatsMocks } from '../api/mocks/mocks'; // Импортируем моки чатов

function ChatsPage() {
    const [chats, setChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);

    useEffect(() => {
        if (!localStorage.getItem('myMessage-1')) {
            chatsMocks.forEach(chat => {
                localStorage.setItem(`myMessage-${chat.id}`, JSON.stringify(chat.messages));
            });
            setChats(chatsMocks);
        } else {
            loadChats();
        }
    }, []);

    const loadChats = () => {
        const loadedChats = [];
        Object.keys(localStorage).forEach(localStorageKey => {
            if (localStorageKey.startsWith('myMessage')) {
                const id = localStorageKey.slice(10);
                const messages = JSON.parse(localStorage.getItem(localStorageKey) || '[]');
                loadedChats.push({ id, messages });
            }
        });
        if (loadedChats.length > 0) {
            setChats(loadedChats);
        }
    };

    const saveMessageToLocalStorage = (chatId, messageText) => {
        const messages = JSON.parse(localStorage.getItem(`myMessage-${chatId}`) || '[]');
        const newMessage = {
            message: messageText,
            timestamp: new Date().toLocaleTimeString().slice(0, -3),
            author: 'Автор',
            chatOwner: messages[0]?.chatOwner || 'Unknown',
        };
        const updatedMessages = [...messages, newMessage];
        localStorage.setItem(`myMessage-${chatId}`, JSON.stringify(updatedMessages));

        setChats(chats =>
            chats.map(chat =>
                chat.id === chatId ? { ...chat, messages: updatedMessages } : chat
            )
        );

        setSelectedChat(chat => ({ ...chat, messages: updatedMessages }));
    };

    return (
        <>
            <HeaderChats />
            <MainChats
                chats={chats}
                saveMessage={saveMessageToLocalStorage}
                selectedChat={selectedChat}
                setSelectedChat={setSelectedChat}
            />
        </>
    );
}

export default ChatsPage;
