import React, { useState, useEffect } from 'react';
import enrollmentService from '../services/enrollmentService';
import studentService from '../services/studentService';

function StudentEnrollments() {
    const [students, setStudents] = useState([]);
    const [selectedStudentId, setSelectedStudentId] = useState('');
    const [studentCourses, setStudentCourses] = useState(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const data = await studentService.getAllStudents();
                setStudents(data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };
        fetchStudents();
    }, []);

    const fetchStudentCourses = async () => {
        if (selectedStudentId) {
            const data = await enrollmentService.getStudentEnrollments(selectedStudentId);
            setStudentCourses(data);
        }
    };

    return (
        <div>
            <h3 className="text-xl font-semibold mb-4">View Enrollments for a Student</h3>
            <div className="flex items-center mb-4">
                <label className="mr-2 font-medium">Student:</label>
                <select
                    className="border border-gray-300 rounded px-2 py-1"
                    onChange={(e) => setSelectedStudentId(e.target.value)}
                    value={selectedStudentId}
                >
                    <option value="">Select Student</option>
                    {students.map(student => (
                        <option key={student.id} value={student.id}>
                            {`${student.name} (ID: ${student.id})`}
                        </option>
                    ))}
                </select>
                <button
                    onClick={fetchStudentCourses}
                    className="ml-4 bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
                >
                    View Enrollments
                </button>
            </div>
            {studentCourses && (
                <div className="mt-4">
                    <h4 className="font-semibold">Courses for {studentCourses.student.name}</h4>
                    <ul className="list-disc list-inside mt-2">
                        {studentCourses.student.Courses.map(course => (
                            <li key={course.id} className="text-gray-700">{course.course_name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default StudentEnrollments;
