import {createElement} from "../utils/createElement";
import {createIcons} from "../utils/createIcons";
import "./header-chat.css";
import {createHeaderChats} from "../header-chats/header-chats";
import {createMainChats} from "../main-chats/main-chats";
import {createNewChatButton} from "../new-button-chat/new-button-chat";

const renderChatsPage = () => {
    const root = document.getElementById('root');
    root.innerHTML = '';

    root.appendChild(createHeaderChats());
    root.appendChild(createMainChats());
    root.appendChild(createNewChatButton());
}

export const createHeaderChat = (interlocutorName) => {
    const header = createElement('header', 'header');

    const arrowBack = createIcons();
    arrowBack.innerText = 'arrow_back';
    arrowBack.id = 'arrow-back';
    arrowBack.addEventListener('click', renderChatsPage);

    const interlocutor = createElement('div', 'interlocutor');

    const accountCircle = createIcons();
    accountCircle.innerText = 'account_circle';
    accountCircle.id = 'default-icon';

    const infoInterlocutor = createElement('div', 'info-interlocutor');

    const nameInterlocutor = createElement('h1', 'name-interlocutor');
    nameInterlocutor.innerText = interlocutorName;

    const timeInterlocutor = createElement('span', 'time-interlocutor');
    timeInterlocutor.innerText = 'был в сети 2 часа назад'

    infoInterlocutor.appendChild(nameInterlocutor);
    infoInterlocutor.appendChild(timeInterlocutor);

    interlocutor.appendChild(accountCircle);
    interlocutor.append(infoInterlocutor);

    const symbols = createElement('div', 'symbols');

    const search = createIcons();
    search.innerText = 'search';

    const moreVert = createIcons();
    moreVert.innerText = 'more_vert'
    moreVert.id = 'more-vert';

    symbols.appendChild(search);
    symbols.appendChild(moreVert);

    header.appendChild(arrowBack);
    header.appendChild(interlocutor);
    header.appendChild(symbols);

    return header;
}