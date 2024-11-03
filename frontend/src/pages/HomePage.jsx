import React from 'react';
import DashboardCard from '../components/DashboardCard';

const HomePage = () => {
    const cards = [
        { name: 'Students', icon: 'fa-user-graduate', link: '/students' },
        { name: 'Lecturers', icon: 'fa-chalkboard-teacher', link: '/lecturers' },
        { name: 'Courses', icon: 'fa-book', link: '/courses' },
        { name: 'Enrollments', icon: 'fa-cogs', link: '/enrollments' }
    ];

    return (
        <div className="min-h-screen bg-purple-50 flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold text-purple-700 mb-8">School Management System</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                {cards.map((card, index) => (
                    <DashboardCard key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
