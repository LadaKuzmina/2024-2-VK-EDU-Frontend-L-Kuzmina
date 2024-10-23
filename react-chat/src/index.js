import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainChats from './components/main-chats/MainChats';
import HeaderChats from './components/header-chats/HeaderChats';
import NewChatButton from './components/new-button-chat/NewButtonChat';
import { chatsMocks } from './components/chat-mocks/chat-mocks';

const App = () => {
    const [chats, setChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null); // Managing selected chat

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

        // Сохраняем обновленные сообщения в localStorage
        localStorage.setItem(`myMessage-${chatId}`, JSON.stringify(updatedMessages));

        // Обновляем состояние с новым объектом
        setChats(chats =>
            chats.map(chat =>
                chat.id === chatId
                    ? { ...chat, messages: [...chat.messages, newMessage] }
                    : chat
            )
        );
    };

    return (
        <div>
            {!selectedChat && <HeaderChats />}
            <MainChats
                chats={chats}
                saveMessage={saveMessageToLocalStorage}
                selectedChat={selectedChat}
                setSelectedChat={setSelectedChat}
            />
            {!selectedChat && <NewChatButton />}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));