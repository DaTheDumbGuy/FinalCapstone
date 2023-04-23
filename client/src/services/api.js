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
export const login = async (credentials) => {
    console.log('Calling login function with credentials:', credentials);
    try {
        const response = await axios.post('/auth/login', credentials);
        console.log('Login successful with response data:', response.data);
        return response;
    } catch (error) {
        console.error('Error in login:', error);
        throw error;
    }
};


