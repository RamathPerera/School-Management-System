import api from '../api';

const authService = {
    login: async (user_name, password) => {
        try {
            const response = await api.post('/api/login', {
                user_name,
                password
            });
            const { token } = response.data;

            if (token) {
                localStorage.setItem('token', token);
            }

            return response.data;
        } catch (error) {
            console.error('Error logging in:', error);
            throw error.response ? error.response.data : new Error('Login failed');
        }
    },

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

    logout: () => {
        localStorage.removeItem('token');
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    }
};

export default authService;