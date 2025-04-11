import axios from 'axios';
import { getToken, removeToken } from '../utils/auth';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' }
});

// Add token to headers
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle expired token or unauthorized access
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const currentPath = window.location.pathname;
    if (error.response?.status === 401 && currentPath !== '/') {
      removeToken();
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default api;
