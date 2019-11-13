import axios from 'axios';

export const axiosWithAuth = () => {
    const token = sessionStorage.getItem('token');

    return axios.create({
        headers: {
            baseURL: 'http://localhost:5000',
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        },
    });
};