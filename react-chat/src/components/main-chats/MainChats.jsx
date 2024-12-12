import React from 'react';
import PropTypes from 'prop-types';
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

// Добавление проверки типов пропсов
MainChats.propTypes = {
    chats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        last_message: PropTypes.shape({
            text: PropTypes.string,
        }),
        updated_at: PropTypes.string,
    })).isRequired,
    selectedChat: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        messages: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            text: PropTypes.string,
            timestamp: PropTypes.string,
        })).isRequired,
    }),
    setSelectedChat: PropTypes.func.isRequired,
};

export default MainChats;
