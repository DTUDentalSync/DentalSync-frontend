import axios from 'axios';

const API = axios.create({ baseURL: '/api' });

export const reviewService = {
    create: (data) => API.post('/reviews', data),
    getByDoctor: (doctorId) => API.get(`/reviews/doctor/${doctorId}`)
};

