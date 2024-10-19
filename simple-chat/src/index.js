import './index.css';
import {createMainChats} from "./main-chats/main-chats";
import {createHeaderChats} from "./header-chats/header-chats";
import {chatsMocks} from "./chats-mocks/chat-mocks";
import {createNewChatButton} from "./new-button-chat/new-button-chat";


if (localStorage.length === 0) {
    chatsMocks.forEach(chat => {
        localStorage.setItem(`myMessage-${chat.id}`, JSON.stringify(chat.messages))
    });
}

const root = document.getElementById('root');
root.appendChild(createHeaderChats());
const mainChatsElement = createMainChats();
root.appendChild(mainChatsElement);
const newChatButton = createNewChatButton();
root.appendChild(newChatButton);

export const getMessagesFromLocalStorage =
    (chatId) => JSON.parse(localStorage.getItem(`myMessage-${chatId}`) || '[]');

const renderMessage = (message) => {
    const listMessage = document.getElementById('list-message');
    const messageItem = document.createElement('div');
    messageItem.className = 'message-item';

    const authorSpan = document.createElement('span');
    authorSpan.className = 'message-author';
    authorSpan.textContent = message.author;

    const messageTextSpan = document.createElement('span');
    messageTextSpan.className = 'message-text';
    messageTextSpan.textContent = message.message;

    const timestampSpan = document.createElement('span');
    timestampSpan.className = 'message-timestamp';
    timestampSpan.textContent = message.timestamp;
    messageItem.appendChild(authorSpan);
    messageItem.appendChild(messageTextSpan);
    messageItem.appendChild(timestampSpan);
    listMessage.appendChild(messageItem);

    messageItem.scrollIntoView();
}

export const saveMessageToLocalStorages = (chatId) => {
    let messages = getMessagesFromLocalStorage(chatId);
    const input = document.getElementById('input-id');
    let newMessage = {
        message: input.value,
        timestamp: new Date().toLocaleTimeString().slice(0, -3),
        author: 'Автор',
        chatOwner: messages[0].chatOwner
    };
    messages.push(newMessage);

    localStorage.setItem(`myMessage-${chatId}`, JSON.stringify(messages));
    renderMessage(newMessage);
}
