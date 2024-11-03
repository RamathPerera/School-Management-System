import React from 'react';

function AddButton ({ onClick, label }) { 
    return (
        <button
            onClick={onClick}
            className="mt-6 bg-purple-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-800 transition duration-300"
        >
            {label}
        </button>
    );
}

export default AddButton;
