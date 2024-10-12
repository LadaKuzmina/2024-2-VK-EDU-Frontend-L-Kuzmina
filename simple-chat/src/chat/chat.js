import {createElement} from "../utils/createElement";

export const createChatMessage = () => {
    const listChats = createElement('div', 'list-chats');
    const avatar = createElement('img', 'image-interlocutor');
    const userInfo = createElement('div', 'user-info-interlocutor');
    const nameInterlocutor = createElement('span', 'name-interlocutor');
    const messageInterlocutor = createElement('span', 'message');
    const messageTimestamp = createElement('span', 'message-timestamp');

    userInfo.append(nameInterlocutor, messageInterlocutor);
    listChats.append(avatar, userInfo, messageTimestamp);

    return listChats;
}