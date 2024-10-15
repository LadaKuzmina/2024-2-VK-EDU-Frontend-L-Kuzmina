import {createElement} from "../utils/createElement";
import {createMainChat} from "../main-chat/main-chat";
import {createHeaderChat} from "../header-chat/header-chat";
import {createFooterChat} from "../footer-chat/footer-chat";
import {createIcons} from "../utils/createIcons";
import './main-chats.css';

const renderChatPage = (author, messages, id) => {
    const root = document.getElementById('root');
    root.innerHTML = '';

    root.appendChild(createHeaderChat(author));
    root.appendChild(createMainChat(messages));
    root.appendChild(createFooterChat(id));
};

export const createMainChats = () => {
    const listChats = createElement('div', 'list-chats');

    for (let localStorageKey in localStorage) {
        if (localStorageKey.startsWith('myMessage')) {
            let id = localStorageKey.slice(10);
            let messages = JSON.parse(localStorage.getItem(localStorageKey) || '[]');
            let author = messages[0].chatOwner;

            const chatItem = createElement('div', 'chat-item');
            chatItem.id = id;

            const avatar = createIcons();
            avatar.innerText = 'account_circle';

            const userInfo = createElement('div', 'user-info-interlocutor');

            const nameInterlocutor = createElement('span', 'name-interlocutor');
            nameInterlocutor.innerText = author;

            const lastMessage = messages[messages.length - 1];

            const messageInterlocutor = createElement('span', 'message');
            messageInterlocutor.innerText = lastMessage.message;

            const messageTimestamp = createElement('span', 'message-timestamp');
            messageTimestamp.innerText = lastMessage.timestamp;

            userInfo.append(nameInterlocutor, messageInterlocutor);
            chatItem.append(avatar, userInfo, messageTimestamp);
            chatItem.addEventListener('click', () => renderChatPage(author, messages, id));

            listChats.appendChild(chatItem);
        }
    }

    return listChats;
}