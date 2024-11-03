import React from 'react';

function Button({ label, onClick }) {
    return (
        <button
            onClick={onClick}
            className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
        >
            {label}
        </button>
    );
};

export default Button;
