import React, { useState, useEffect } from 'react';
import enrollmentService from '../services/enrollmentService';
import courseService from '../services/courseService';

function CourseEnrollments() {
    const [courses, setCourses] = useState([]);
    const [selectedCourseId, setSelectedCourseId] = useState('');
    const [courseStudents, setCourseStudents] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await courseService.getAllCourses();
                setCourses(data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };
        fetchCourses();
    }, []);

    const fetchCourseStudents = async () => {
        if (selectedCourseId) {
            const data = await enrollmentService.getCourseEnrollments(selectedCourseId);
            setCourseStudents(data);
        }
    };

    return (
        <div>
            <h3>View Enrollments for a Course</h3>
            <div className="mb-4">
                <label>Course:</label>
                <select
                    onChange={(e) => setSelectedCourseId(e.target.value)}
                    value={selectedCourseId}
                >
                    <option value="">Select Course</option>
                    {courses.map(course => (
                        <option key={course.id} value={course.id}>
                            {`${course.course_name} (ID: ${course.id})`}
                        </option>
                    ))}
                </select>
                <button onClick={fetchCourseStudents} className="ml-4 bg-purple-700 text-white px-4 py-2 rounded">
                    View Enrollments
                </button>
            </div>
            {courseStudents && (
                <div>
                    <h4>Students enrolled in {courseStudents.course.course_name}</h4>
                    <ul>
                        {courseStudents.course.Students.map(student => (
                            <li key={student.id}>{student.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CourseEnrollments;
