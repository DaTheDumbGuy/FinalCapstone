import axios from 'axios';

const API_URL = 'http://localhost:3000';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,

});

export const fetchReviews = () => {
    return api.get('/auth/api/get');
};
export const login = async (credentials) => {
    console.log('Calling login function with credentials:', credentials);
    try {
        const response = await api.post('/auth/login', credentials);
        console.log('Login successful with response data:', response.data);
        return response;
    } catch (error) {
        console.error('Error in login:', error);
        console.log('Error response: ', error.response);
        throw error;
    }
};

export const register = async (credentials) => {
    console.log('Calling register function with credentials: ', credentials);
    try {
        const response = await api.post('/auth/register', credentials);
        console.log('Register successful with response data: ', response.data);
        return response;
    } catch (error) {
        console.error('Error in registration: ', error);
        throw error;
    }
}

export const checkLoginStatus = async () => {
    try {
        const response = await api.get('/auth/checkLoginStatus');
        console.log('User is logged in:', response.data.member_id);
        return response.data.member_id;
    } catch (error) {
        console.error('Error checking login status:', error);
        throw error;
    }
};

export const logout = () => {
    return api.post('/auth/logout');
}

export const userData = async () => {
    try {
        const response = await api.get('/auth/userData');
        return response.data;
    } catch (error) {
        console.error('User Data not Found:', error);
        throw error;
    }
}

export const updateUser = async (id, userData) => {
    try {
        const response = await api.put(`/auth/update/${id}`, userData);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};