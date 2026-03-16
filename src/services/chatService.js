import axios from 'axios';

const API = axios.create({ baseURL: '/api' });

export const chatService = {
    sendMessage: (message) => API.post('/chat/message', { message }),
    getHistory: () => API.get('/chat/history')
};

