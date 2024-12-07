import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckIcon from '@mui/icons-material/Check';
import './MainChats.css';
import MainChat from '../main-chat/MainChat';
import FooterChat from '../footer-chat/FooterChat';
import HeaderChat from '../header-chat/HeaderChat';

const MainChats = ({ chats, selectedChat, setSelectedChat }) => {
    const navigate = useNavigate();

    if (selectedChat) {
        return (
            <>
                <HeaderChat interlocutorName={selectedChat.title} />
                <MainChat messages={selectedChat.messages} />
                <FooterChat chatId={selectedChat.id} />
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
                            <span className="name-interlocutor">{chat.title}</span>
                            <span className="message">
                                {chat.last_message ? chat.last_message.text : 'Нет сообщений'}
                            </span>
                        </div>
                    </div>
                    <div className="info-right-side">
                        <span className="message-timestamp">
                            {chat.updated_at && new Date(chat.updated_at).toLocaleString()}
                        </span>
                        <span id="check-icon" className="icon"><CheckIcon /></span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MainChats;
