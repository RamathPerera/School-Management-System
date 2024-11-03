import api from '../api';

// Service for enrollment-related operations
const enrollmentService = {
    enrollStudent: async (studentId, courseId) => {
        const response = await api.post('/enrollments/enroll', { studentId, courseId });
        return response.data;
    },
    getStudentEnrollments: async (studentId) => {
        const response = await api.get(`/enrollments/student/${studentId}`);
        return response.data;
    },
    getCourseEnrollments: async (courseId) => {
        const response = await api.get(`/enrollments/course/${courseId}`);
        return response.data;
    }
};

export default enrollmentService;
