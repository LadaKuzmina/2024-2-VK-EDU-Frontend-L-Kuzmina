import {createElement} from "../../utils/createElement";
import {createIcons} from "../../utils/createIcons";
import './header-chat.css';

const createHeaderChat = () => {
    const header = createElement('header', 'header');
    const arrowBack = createIcons();
    arrowBack.innerText = 'account_circle';
    const interlocutor = createElement('div', 'interlocutor');
    const accountCircle = createIcons();
    accountCircle.innerText = 'account_circle';
    const infoInterlocutor = createElement('div', 'info-interlocutor');
    const nameInterlocutor = createElement('h1','name-interlocutor');
    const timeInterlocutor = createElement('span', 'time-interlocutor');
    const search = createIcons();
    search.innerText = 'search';
    const moreVert = createIcons();
    moreVert.innerText = 'more_vert'
}