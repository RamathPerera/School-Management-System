// src/services/authService.js

import api from '../api';

const authService = {
    // Login function
    login: async (user_name, password) => {
        try {
            const response = await api.post('/api/login', {
                user_name,
                password
            });
            const { token } = response.data;

            if (token) {
                // Store token in localStorage
                localStorage.setItem('token', token);
            }

            return response.data;
        } catch (error) {
            console.error('Error logging in:', error);
            throw error.response ? error.response.data : new Error('Login failed');
        }
    },

    // Register function
    register: async (user_name, password) => {
        try {
            const response = await api.post('/api/register', {
                user_name,
                password
            });
            return response.data;
        } catch (error) {
            console.error('Error registering:', error);
            throw error.response ? error.response.data : new Error('Registration failed');
        }
    },

    // Logout function
    logout: () => {
        // Remove token from localStorage
        localStorage.removeItem('token');
    },

    // Check if the user is authenticated
    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    }
};

export default authService;
