import {createElement} from "../utils/createElement";
import {createIcons} from "../utils/createIcons";
import '../header-chat/header-chat.css';

export const createHeaderChats = () => {
    const header = createElement('header', 'header');

    const headerTitle = createElement('h1');
    headerTitle.innerText = 'Messenger'

    const searchIcon = createIcons();
    searchIcon.innerText = 'search';

    const menuIcon = createIcons();
    menuIcon.innerText = 'menu';

    header.appendChild(menuIcon);
    header.appendChild(headerTitle);
    header.appendChild(searchIcon);

    return header;
};