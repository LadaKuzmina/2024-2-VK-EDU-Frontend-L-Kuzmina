import axiosInstance from "./apiService";

export const getMessages = async (chatId) => {
    const response = await axiosInstance.get(`/messages/?chat=${chatId}`);
    return response.data.results.map((msg) => ({
        id: msg.id,
        text: msg.text,
        author: msg.sender.first_name || 'Неизвестный',
        timestamp: new Date(msg.created_at).toLocaleTimeString().slice(0, -3),
    }));
};

export const sendMessage = async (chatId, text) => {
    const body = { chat: chatId, text };
    const response = await axiosInstance.post('/messages/', body);
    return response.data;
};

export const fetchMessages = async (chatId, page = 1, pageSize = 20) => {
    try {
        const response = await axiosInstance.get('/messages/', {
            params: {
                chat: chatId,
                page: page,
                page_size: pageSize,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching messages:', error);
        throw error;
    }
};
