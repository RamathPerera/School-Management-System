import api from '../api';

// Service to handle course-related CRUD operations
const courseService = {
    getAllCourses: async () => {
        const response = await api.get('/courses', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,  // Add token from localStorage
            }
        });
        return response.data;
    },
    addCourse: async (course) => {
        const response = await api.post('/courses', course, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,  // Add token from localStorage
            }
        });
        return response.data;
    },
    updateCourse: async (courseId, updatedData) => {
        const response = await api.put(`/courses/${courseId}`, updatedData, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,  // Add token from localStorage
            }
        });
        return response.data;
    },
    deleteCourse: async (courseId) => {
        const response = await api.delete(`/courses/${courseId}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,  // Add token from localStorage
            }
        });
        return response.data;
    }
};

export default courseService;
