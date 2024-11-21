import axios from 'axios';

const API_BASE_URL = 'https://vkedu-fullstack-div2.ru/api';

export const registerUser = async (formData) => {
    const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
    };
    const response = await axios.post(`${API_BASE_URL}/register/`, formData, config);
    return response.data;
};

export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_BASE_URL}/auth/`, credentials);
    return response.data;
};

export const sendMessageToBackend = async (chatId, text) => {
    const body = {
        chat: chatId,
        text,
    };
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };
    const response = await axios.post(`${API_BASE_URL}/messages/`, body, { headers });
    return response.data;
};

export const getMessagesFromBackend = async (chatId) => {
    const headers = {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };
    const response = await axios.get(`${API_BASE_URL}/messages/?chat=${chatId}`, { headers });
    return response.data.results.map((msg) => ({
        id: msg.id,
        text: msg.text,
        author: msg.sender.first_name || 'Неизвестный',
        timestamp: new Date(msg.created_at).toLocaleTimeString().slice(0, -3),
    }));
};
