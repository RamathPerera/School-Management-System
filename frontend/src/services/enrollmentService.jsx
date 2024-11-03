import api from '../api';

const enrollmentService = {
    enrollStudent: async (studentId, courseId) => {
        const response = await api.post('/enrollments/enroll', { studentId, courseId }, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    },
    getStudentEnrollments: async (studentId) => {
        const response = await api.get(`/enrollments/student/${studentId}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    },
    getCourseEnrollments: async (courseId) => {
        const response = await api.get(`/enrollments/course/${courseId}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    }
};

export default enrollmentService;
