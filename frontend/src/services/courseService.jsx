import api from '../api';

// Service to handle course-related CRUD operations
const courseService = {
    getAllCourses: async () => {
        const response = await api.get('/courses');
        return response.data;
    },
    addCourse: async (course) => {
        const response = await api.post('/courses', course);
        return response.data;
    },
    updateCourse: async (courseId, updatedData) => {
        const response = await api.put(`/courses/${courseId}`, updatedData);
        return response.data;
    },
    deleteCourse: async (courseId) => {
        const response = await api.delete(`/courses/${courseId}`);
        return response.data;
    }
};

export default courseService;
