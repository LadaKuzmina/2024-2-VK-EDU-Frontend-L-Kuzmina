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