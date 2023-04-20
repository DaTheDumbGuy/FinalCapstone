import axios from 'axios';

const API_URL = 'http://localhost:1000';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchReviews = () => {
    return api.get('/auth/api/get');
};