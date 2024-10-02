import './index.css';

const form = document.querySelector('form');
const input = document.getElementById('input-id');
const listMessage = document.getElementById('list-message');
const keyCodeEnter = 13;
let result =  "";

const getMessageFromLocalStorages = () => JSON.parse(localStorage.getItem('myMessage') || '[]');
function loadMessageFromStorages (){
    let myMessage = getMessageFromLocalStorages();
    listMessage.innerHTML = myMessage.map(message => `
        <div class="message-item">
            <span class="message-author">${message.author}</span>
            <span class="message-text">${message.message}</span>
            <span class="message-timestamp">${message.timestamp}</span>
        </div>
    `).join('');
}
function saveMessageToLocalStorages() {
    let myMessage = getMessageFromLocalStorages();
    myMessage.push({
        message: input.value,
        timestamp: new Date().toLocaleTimeString().slice(0, -3),
        author: 'Автор'
    });
    localStorage.setItem('myMessage', JSON.stringify(myMessage));
    result = listMessage.innerHTML = myMessage.map(message => `
        <div class="message-item">
            <span class="message-author">${message.author}</span>
            <span class="message-text">${message.message}</span>
            <span class="message-timestamp">${message.timestamp}</span>
        </div>
    `).join('');
    listMessage.innerHTML = result;
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
document.addEventListener("DOMContentLoaded", loadMessageFromStorages);