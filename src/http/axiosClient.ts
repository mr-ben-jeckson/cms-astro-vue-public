import axios from 'axios';
import type { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const axiosClient = axios.create({
    baseURL: `${import.meta.env.PUBLIC_SERVER_URL}`,
});

// Request interceptor to add the Authorization header
axiosClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const authToken = localStorage.getItem('TOKEN') ?? null;

    if (authToken && config.headers) {
        config.headers['Authorization'] = `Bearer ${authToken}`;
    }

    return config;
});

// Response interceptor to handle errors
axiosClient.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        const errorMessage = (error.response?.data as { message: string })?.message || 'An error occurred';
        if (error.response?.status === 401 && errorMessage === 'Unauthorized') {
            localStorage.removeItem('TOKEN');
            // Redirect to the login page
            window.location.href = '/auth/login';
        }

        return Promise.reject(error);
    }
);

export default axiosClient;
