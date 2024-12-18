import api from '../api';

const lecturerService = {
    getAllLecturers: async () => {
        const response = await api.get('/lecturers', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    },
    addLecturer: async (lecturer) => {
        const response = await api.post('/lecturers', lecturer, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    },
    updateLecturer: async (lecturerId, updatedData) => {
        const response = await api.put(`/lecturers/${lecturerId}`, updatedData, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    },
    deleteLecturer: async (lecturerId) => {
        const response = await api.delete(`/lecturers/${lecturerId}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    }
};

export default lecturerService;
