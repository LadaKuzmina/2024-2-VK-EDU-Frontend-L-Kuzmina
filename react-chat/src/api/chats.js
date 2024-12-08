import axiosInstance from "./apiService";

export const getChats = async ({ search = '', page = 1, page_size = 10 }) => {
    const params = { search, page, page_size };
    const response = await axiosInstance.get('/chats/', { params });
    return response.data; // { count, next, previous, results }
};

export const getChatById = async (chatId) => {
    const response = await axiosInstance.get(`/chat/${chatId}/`);
    return response.data; // { id, title, members, ... }
};


export const createChat = async (chatData) => {
    const response = await axiosInstance.post('/chats/', chatData);
    return response.data; // { id, title, ... }
};
