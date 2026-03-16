import axios from 'axios';

const API = axios.create({ baseURL: '/api' });

export const paymentService = {
    createPayment: (data) => API.post('/payments', data),
    getPayments: () => API.get('/payments')
};

