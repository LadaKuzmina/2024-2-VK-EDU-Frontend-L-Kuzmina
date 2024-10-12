import {createElement} from "../utils/createElement";

export const correspondence = () => {
    const messageItemInterlocutor = createElement('div', 'message-item-interlocutor');
    const messageAuthor = createElement('span', 'message-author');
    const messageText = createElement('span', 'message-text');
    const messageTimestamp = createElement('span', 'message-timestamp');
    messageItemInterlocutor.append(messageAuthor, messageText, messageTimestamp);
}