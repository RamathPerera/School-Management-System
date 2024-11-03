import React from 'react';
import EnrollmentForm from '../components/EnrollmentForm';
import StudentEnrollments from '../components/StudentEnrollments';
import CourseEnrollments from '../components/CourseEnrollments';
import LogoutButton from '../components/LogoutButton';
import BackButton from '../components/BackButton';

function EnrollmentPage() {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="flex justify-between items-center w-full md:w-3/4 mx-auto mb-6">
                <BackButton />
                <h2 className="text-3xl font-bold text-gray-800">Enrollment Management</h2>
                <LogoutButton />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-3/4 mx-auto mb-8">
                <EnrollmentForm onEnrollmentSuccess={() => { /* Trigger any necessary refresh */ }} />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-3/4 mx-auto mb-8">
                <StudentEnrollments />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-3/4 mx-auto">
                <CourseEnrollments />
            </div>
        </div>
    );
}

export default EnrollmentPage;
