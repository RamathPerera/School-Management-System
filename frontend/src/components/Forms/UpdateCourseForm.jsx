import React, { useState } from 'react';

const UpdateCourseForm = ({ initialData, onSubmit, onClose, existingLecturerIds }) => {
    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-purple-700 mb-4">Update Course</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        name="course_code" 
                        value={formData.course_code} 
                        onChange={handleChange} 
                        required 
                        className="w-full mb-2 p-2 border" 
                        placeholder="Course Code"
                    />
                    <input 
                        name="course_name" 
                        value={formData.course_name} 
                        onChange={handleChange} 
                        required 
                        className="w-full mb-2 p-2 border" 
                        placeholder="Course Name"
                    />
                    <textarea 
                        name="course_description" 
                        value={formData.course_description} 
                        onChange={handleChange} 
                        required 
                        className="w-full mb-2 p-2 border" 
                        placeholder="Description"
                    />
                    <select 
                        name="lecturerId" 
                        onChange={handleChange} 
                        className="w-full mb-4 p-2 border"
                        required 
                        value={formData.lecturerId}
                    >
                        <option value="">Select Lecturer (Optional)</option>
                        {existingLecturerIds.map((lecturer) => (
                            <option key={lecturer.id} value={lecturer.id}>
                                {lecturer.name} (ID: {lecturer.id})
                            </option>
                        ))}
                    </select>
                    <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">Update Course</button>
                    <button onClick={onClose} className="ml-4 text-gray-500">Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCourseForm;
