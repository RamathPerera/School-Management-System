import React from 'react';
import EnrollmentForm from '../components/EnrollmentForm';
import StudentEnrollments from '../components/StudentEnrollments';
import CourseEnrollments from '../components/CourseEnrollments';
import LogoutButton from '../components/LogoutButton';

const EnrollmentPage = () => {
    return (
        <div className="p-6">
            <div className='flex justify-between items-center w-3/4'>
                <h2 className="text-3xl font-bold mb-6">Enrollment Management</h2>
                <LogoutButton />
            </div>
            <EnrollmentForm onEnrollmentSuccess={() => { /* Trigger any necessary refresh */ }} />
            <div className="mt-6">
                <StudentEnrollments />
            </div>
            <div className="mt-6">
                <CourseEnrollments />
            </div>
        </div>
    );
};

export default EnrollmentPage;
