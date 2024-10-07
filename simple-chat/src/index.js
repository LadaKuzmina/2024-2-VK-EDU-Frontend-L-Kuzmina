import './index.css';

const form = document.querySelector('form');
const input = document.getElementById('input-id');
const listMessage = document.getElementById('list-message');
const keyCodeEnter = 13;

const getMessagesFromLocalStorage = () => JSON.parse(localStorage.getItem('myMessage') || '[]');

const renderMessage = (message) => {
    const messageItem = document.createElement('div');
    messageItem.className = 'message-item';

    const authorSpan = document.createElement('span');
    authorSpan.className = 'message-author';
    authorSpan.textContent = message.author;

    const messageTextSpan = document.createElement('span');
    messageTextSpan.className = 'message-text';
    messageTextSpan.textContent = message.message;

    const timestampSpan = document.createElement('span');
    timestampSpan.className = 'message-timestamp';
    timestampSpan.textContent = message.timestamp;
    messageItem.appendChild(authorSpan);
    messageItem.appendChild(messageTextSpan);
    messageItem.appendChild(timestampSpan);
    listMessage.appendChild(messageItem);
}

function renderMessagesFromLocalStorage() {
    let messages = getMessagesFromLocalStorage();

    messages.forEach(message => {
        renderMessage(message);
    });
}

function saveMessageToLocalStorages() {
    let messages = getMessagesFromLocalStorage();
    let newMessage = {
        message: input.value,
        timestamp: new Date().toLocaleTimeString().slice(0, -3),
        author: 'Автор'
    };
    messages.push(newMessage);

    localStorage.setItem('myMessage', JSON.stringify(messages));
    renderMessage(newMessage);
}


function handleSubmit (event) {
    event.preventDefault();
}

function handleKeyPress (event) {
    if (event.keyCode === keyCodeEnter) {
        handleEnterMessage(event);
        form.dispatchEvent(new Event('submit'));
    }
}

function handleEnterMessage (event) {
    if (event.keyCode === keyCodeEnter) {
        if (input.value.trim() !== '') {
            saveMessageToLocalStorages();
            input.value = '';
            input.placeholder = 'Сообщение';
        }
    }
}

form.addEventListener('submit', (e) => handleSubmit(e));
form.addEventListener('keypress', (e) => handleKeyPress(e));
document.addEventListener("DOMContentLoaded", renderMessagesFromLocalStorage);