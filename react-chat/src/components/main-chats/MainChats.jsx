import React from 'react';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckIcon from '@mui/icons-material/Check';
import './MainChats.css';
import MainChat from '../main-chat/MainChat';
import FooterChat from '../footer-chat/FooterChat';
import HeaderChat from '../header-chat/HeaderChat';

const MainChats = ({ chats, saveMessage, selectedChat, setSelectedChat }) => {
    const navigate = useNavigate();

    if (selectedChat) {
        return (
            <>
                <HeaderChat interlocutorName={selectedChat.messages[0]?.chatOwner} />
                <MainChat messages={selectedChat.messages} />
                <FooterChat chatId={selectedChat.id} saveMessage={saveMessage} />
            </>
        );
    }

    return (
        <div className="list-chats">
            {chats.map(chat => (
                <div
                    key={chat.id}
                    className="chat-item"
                    onClick={() => {
                        setSelectedChat(chat);
                        navigate(`/chat/${chat.id}`);
                    }}
                >
                    <div className="info-left-side">
                        <span className="icon"><AccountCircleIcon /></span>
                        <div className="user-info-interlocutor">
                            <span className="name-interlocutor">{chat.messages[0]?.chatOwner}</span>
                            <span className="message">{chat.messages[chat.messages.length - 1]?.message}</span>
                        </div>
                    </div>
                    <div className="info-right-side">
                        <span className="message-timestamp">{chat.messages[chat.messages.length - 1]?.timestamp}</span>
                        <span id="check-icon" className="icon"><CheckIcon /></span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MainChats;
