import React, { useState } from 'react';

const UpdateStudentForm = ({ initialData, onSubmit, onClose }) => {
    const [formData, setFormData] = useState(initialData);
    const [file, setFile] = useState(null); // To hold the file input

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            setFile(files[0]); // Store the new file
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSubmit = { ...formData, birth_certificate: file }; // Include the file
        onSubmit(dataToSubmit);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-purple-700 mb-4">Update Student</h2>
                <form onSubmit={handleSubmit}>
                    <input name="name" value={formData.name} onChange={handleChange} required className="w-full mb-2 p-2 border" />
                    <input name="age" type="number" value={formData.age} onChange={handleChange} required className="w-full mb-2 p-2 border" />
                    <input name="address" value={formData.address} onChange={handleChange} required className="w-full mb-2 p-2 border" />
                    <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full mb-2 p-2 border">
                        <option value="">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <input type="file" name="birth_certificate" accept="image/*" onChange={handleChange} className="w-full mb-4 p-2 border" />
                    <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">Update Student</button>
                    <button type="button" onClick={onClose} className="ml-4 text-gray-500">Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateStudentForm;
