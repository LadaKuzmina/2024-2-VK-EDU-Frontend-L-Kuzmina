import {createElement} from "../utils/createElement";
import {createIcons} from "../utils/createIcons";
import "./footer-chat.css";

const inputMessage = () => {
    const input = createElement('input', 'form-input');
    input.name = 'message-text';
    input.placeholder = 'Сообщение';
    input.type = 'text';
    input.id = 'input-id';
    return input;
}

export const createFooterChat = () => {
    const footer = createElement('footer');
    const form = createElement('form', 'form');
    form.action = '/';
    const message = createElement('div', 'message');
    const input = inputMessage();
    const attachment = createIcons();
    attachment.innerText = 'attachment';
}

