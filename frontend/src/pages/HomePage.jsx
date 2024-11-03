import React from 'react';
import DashboardCard from '../components/DashboardCard';
import LogoutButton from '../components/LogoutButton';

function HomePage() {
    const cards = [
        { name: 'Students', icon: 'fa-user-graduate', link: '/students' },
        { name: 'Lecturers', icon: 'fa-chalkboard-teacher', link: '/lecturers' },
        { name: 'Courses', icon: 'fa-book', link: '/courses' },
        { name: 'Enrollments', icon: 'fa-cogs', link: '/enrollments' }
    ];

    return (
        <div className="min-h-screen bg-purple-50 p-4">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold text-purple-700">School Management System</h1>
                <LogoutButton />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mx-auto">
                {cards.map((card, index) => (
                    <DashboardCard key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
