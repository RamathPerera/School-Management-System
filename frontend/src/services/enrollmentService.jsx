import api from '../api';

// Service for enrollment-related operations
const enrollmentService = {
    enrollStudent: async (studentId, courseId) => {
        const response = await api.post('/enrollments/enroll', { studentId, courseId }, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,  // Add token from localStorage
            }
        });
        return response.data;
    },
    getStudentEnrollments: async (studentId) => {
        const response = await api.get(`/enrollments/student/${studentId}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,  // Add token from localStorage
            }
        });
        return response.data;
    },
    getCourseEnrollments: async (courseId) => {
        const response = await api.get(`/enrollments/course/${courseId}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,  // Add token from localStorage
            }
        });
        return response.data;
    }
};

export default enrollmentService;
