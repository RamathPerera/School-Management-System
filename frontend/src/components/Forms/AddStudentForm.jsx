import React, { useState } from 'react';

const AddStudentForm = ({ onSubmit, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        address: '',
        gender: '',
        birth_certificate: null, // Change to null to hold file
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            setFormData({ ...formData, [name]: files[0] }); // Store the file object
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-purple-700 mb-4">Add New Student</h2>
                <form onSubmit={handleSubmit}>
                    <input name="name" placeholder="Name" onChange={handleChange} required className="w-full mb-2 p-2 border" />
                    <input name="age" type="number" placeholder="Age" onChange={handleChange} required className="w-full mb-2 p-2 border" />
                    <input name="address" placeholder="Address" onChange={handleChange} required className="w-full mb-2 p-2 border" />
                    <select name="gender" onChange={handleChange} required className="w-full mb-2 p-2 border">
                        <option value="">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <input type="file" name="birth_certificate" accept="image/*" onChange={handleChange} required className="w-full mb-4 p-2 border" />
                    <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">Add Student</button>
                    <button type="button" onClick={onClose} className="ml-4 text-gray-500">Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default AddStudentForm;
