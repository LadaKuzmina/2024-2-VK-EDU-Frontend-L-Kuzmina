import axiosInstance from "./apiService";

export const loginUser = async (credentials) => {
    const response = await axiosInstance.post('/auth/', credentials);
    return response.data; // { access: '', refresh: '' }
};

// Регистрация пользователя
export const registerUser = async (formData) => {
    const response = await axiosInstance.post('/register/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
};

// Обновление токенов
export const refreshToken = async (refreshToken) => {
    const response = await axiosInstance.post('/auth/refresh/', { refresh: refreshToken });
    return response.data; // { access: '' }
};
