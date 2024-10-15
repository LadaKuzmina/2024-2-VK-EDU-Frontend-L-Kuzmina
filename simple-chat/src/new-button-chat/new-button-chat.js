import {createElement} from "../utils/createElement";
import {createIcons} from "../utils/createIcons";
import './new-chat-button.css';

export const createNewChatButton = () => {
    const newChatButton = createElement('div', 'new-chat-button');
    const newChatButtonIcon = createIcons();
    newChatButtonIcon.innerText = 'edit';

    newChatButton.append(newChatButtonIcon);

    return newChatButton;
};