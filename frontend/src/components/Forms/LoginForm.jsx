import React, { useState } from 'react';
import authService from '../../services/authServices';
import { useNavigate } from 'react-router-dom';

function LoginForm({ isOpen, onClose }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await authService.login(username, password);
            onClose();
            navigate('/home');
            window.location.reload();
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white rounded-lg shadow-lg z-10 p-6">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block mb-2">Username:</label>
                        <input
                            type="text"
                            className="border rounded w-full p-2"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Password:</label>
                        <input
                            type="password"
                            className="border rounded w-full p-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
                        Login
                    </button>
                </form>
                <button className="mt-4 text-gray-600" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default LoginForm;
