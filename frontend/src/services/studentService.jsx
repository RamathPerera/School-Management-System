import api from '../api';

const studentService = {
    getAllStudents: async () => {
        const response = await api.get('/students');
        return response.data;
    },
    addStudent: async (student) => {
        const formData = new FormData();
        for (const key in student) {
            formData.append(key, student[key]); // Append each field to FormData
        }
        const response = await api.post('/students', formData, {
            headers: {
                'Content-Type': 'multipart/form-data' // Set content type for file upload
            }
        });
        return response.data;
    },
    updateStudent: async (studentId, updatedData) => {
        const formData = new FormData();
        for (const key in updatedData) {
            formData.append(key, updatedData[key]); // Append each field to FormData
        }
        const response = await api.put(`/students/${studentId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data' // Set content type for file upload
            }
        });
        return response.data;
    },
    deleteStudent: async (studentId) => {
        const response = await api.delete(`/students/${studentId}`);
        return response.data;
    }
};

export default studentService;
