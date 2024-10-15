import {createElement} from "../utils/createElement";
import {createIcons} from "../utils/createIcons";
import "./footer-chat.css";
import {saveMessageToLocalStorages} from "../index";

const keyCodeEnter = 13;
const handleSubmit = (event) => {
    event.preventDefault();
}
const handleEnterMessage = (event, chatId) => {
    const input = document.getElementById('input-id');
    if (event.keyCode === keyCodeEnter) {
        if (input.value.trim() !== '') {
            saveMessageToLocalStorages(chatId);
            input.value = '';
            input.placeholder = 'Сообщение';
        }
    }
}
const handleKeyPress = (event, chatId) => {
    const form = document.querySelector('form');
    if (event.keyCode === keyCodeEnter) {
        handleEnterMessage(event, chatId);
        form.dispatchEvent(new Event('submit'));
    }
}
export const createFooterChat = (chatId) => {
    const footer = createElement('footer', 'footer');

    const form = createElement('form', 'form');
    form.action = '/';
    form.addEventListener('submit', (e) => handleSubmit(e, chatId));
    form.addEventListener('keypress', (e) => handleKeyPress(e, chatId));

    const messageDiv = createElement('div', 'message');

    const input = createElement('input', 'form-input');
    input.name = 'message-text';
    input.placeholder = 'Сообщение';
    input.type = 'text';
    input.id = 'input-id';

    const attachmentIcon = createIcons();
    attachmentIcon.textContent = 'attachment';

    messageDiv.appendChild(input);
    messageDiv.appendChild(attachmentIcon);
    form.appendChild(messageDiv);
    footer.appendChild(form);

    return footer;
}