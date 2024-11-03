import api from '../api';

const studentService = {
    getAllStudents: async () => {
        const response = await api.get('/students', {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,  
            }
        });
        return response.data;
    },
    addStudent: async (student) => {
        const formData = new FormData();
        for (const key in student) {
            formData.append(key, student[key]);
        }
        const response = await api.post('/students', formData, {
            headers: {
                'Content-Type': 'multipart/form-data', 
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    },
    updateStudent: async (studentId, updatedData) => {
        const formData = new FormData();
        for (const key in updatedData) {
            formData.append(key, updatedData[key]);
        }
        const response = await api.put(`/students/${studentId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    },
    deleteStudent: async (studentId) => {
        const response = await api.delete(`/students/${studentId}`, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    }
};

export default studentService;
