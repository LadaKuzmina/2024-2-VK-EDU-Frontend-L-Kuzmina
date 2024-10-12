import {createElement} from "../../utils/createElement";
import {createChatMessage} from "../../chat/chat";
import {createNewChatButton} from "../../new-chat-button/new-chat-button";
import {createChatsPageHeader} from "../../headers/header-chats/header-chats";

export const createPageMessages = () => {
    const wrapper = createElement('div', 'wrapper');
    const header = createChatsPageHeader();
    const main = createElement('main');
    const newChatButton = createNewChatButton();

    wrapper.append(header, main, newChatButton);
}