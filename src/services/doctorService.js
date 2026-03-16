import axios from 'axios';

const API = axios.create({ baseURL: '/api' });

export const doctorService = {
    getAll: (params) => API.get('/doctors', { params }),
    getById: (id) => API.get(`/doctors/${id}`)
};

