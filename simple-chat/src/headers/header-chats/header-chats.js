import {createElement} from "../../utils/createElement";
import './header-chats.css';

export const createChatsPageHeader = () => {
    const header = createElement('header', 'header-chats');
    const headerTitle = createElement('h1', 'header-chats-title', 'Messenger');
    const searchIcon = createElement('span', 'material-symbols-outlined', 'search');
    const menuIcon = createElement('span', 'material-symbols-outlined', 'menu');

    header.append(menuIcon, headerTitle, searchIcon);

    return header;
};