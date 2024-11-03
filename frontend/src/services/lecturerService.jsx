import api from '../api';

// Service to handle lecturer-related CRUD operations
const lecturerService = {
    getAllLecturers: async () => {
        const response = await api.get('/lecturers');
        return response.data;
    },
    addLecturer: async (lecturer) => {
        const response = await api.post('/lecturers', lecturer);
        return response.data;
    },
    updateLecturer: async (lecturerId, updatedData) => {
        const response = await api.put(`/lecturers/${lecturerId}`, updatedData);
        return response.data;
    },
    deleteLecturer: async (lecturerId) => {
        const response = await api.delete(`/lecturers/${lecturerId}`);
        return response.data;
    }
};

export default lecturerService;
