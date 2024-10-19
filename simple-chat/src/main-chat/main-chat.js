import {createElement} from "../utils/createElement";
import "./main-chat.css";

export const createMainChat = (messages) => {
    const main = createElement('main');
    const listMessageDiv = createElement('div');
    listMessageDiv.id = 'list-message';

    messages.forEach(message => {
        const messageDiv = message.author === 'Автор'
            ? createElement('div', 'message-item')
            : createElement('div', 'message-item-interlocutor');

        const messageAuthor = createElement('span', 'message-author');
        messageAuthor.textContent = message.author;

        const messageText = createElement('span', 'message-text');
        messageText.textContent = message.message;

        const messageTimestamp = createElement('span', 'message-timestamp');
        messageTimestamp.textContent = message.timestamp;

        messageDiv.appendChild(messageAuthor);
        messageDiv.appendChild(messageText);
        messageDiv.appendChild(messageTimestamp);

        listMessageDiv.appendChild(messageDiv);
    });

    main.appendChild(listMessageDiv);
    return main;
}