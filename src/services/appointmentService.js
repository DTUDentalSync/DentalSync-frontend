import axios from 'axios';

const API = axios.create({ baseURL: '/api' });

export const appointmentService = {
    create: (data) => API.post('/appointments', data),
    getMy: () => API.get('/appointments/my'),
    getByDoctor: (doctorId) => API.get(`/appointments/doctor/${doctorId}`)
};

