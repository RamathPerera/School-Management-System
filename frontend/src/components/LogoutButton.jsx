// src/components/LogoutButton.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authServices';

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        authService.logout();
        navigate('/');
        window.location.reload(); // Optional: Force page reload if needed
    };

    return (
        <button
            onClick={handleLogout}
            className="text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded"
        >
            Logout
        </button>
    );
};

export default LogoutButton;
