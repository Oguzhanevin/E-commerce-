import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://workintech-fe-ecommerce.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
instance.interceptors.request.use(
    (config) => {
        // Token kontrolü ve başlığa eklenmesi
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log('Request:', config);
        return config;
    },
    (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor
instance.interceptors.response.use(
    (response) => {
        console.log('Response:', response);
        return response;
    },
    (error) => {
        if (error.response) {
            // Sunucudan gelen hata mesajını göster
            console.error('Response error:', error.response);
        } else if (error.request) {
            // Sunucuya hiç cevap alınamadığında
            console.error('No response received:', error.request);
        } else {
            // İstek yapılandırmasında bir hata varsa
            console.error('Error setting up the request:', error.message);
        }
        return Promise.reject(error);
    }
);

export default instance;
