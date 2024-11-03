import React from 'react';
import { Link } from 'react-router-dom';

function DashboardCard({ name, icon, link }) {
    return (
        <Link to={link} className="block bg-white rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105">
            <i className={`fa ${icon} fa-3x text-purple-600 mb-4`} aria-hidden="true"></i>
            <h2 className="text-xl font-semibold text-purple-700">{name}</h2>
        </Link>
    );
};

export default DashboardCard;
