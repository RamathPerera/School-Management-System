import React, { useState, useEffect } from 'react';
import enrollmentService from '../services/enrollmentService';
import studentService from '../services/studentService';

const StudentEnrollments = () => {
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
            <h3>View Enrollments for a Student</h3>
            <div className="mb-4">
                <label>Student:</label>
                <select
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
                <button onClick={fetchStudentCourses} className="ml-4 bg-purple-700 text-white px-4 py-2 rounded">
                    View Enrollments
                </button>
            </div>
            {studentCourses && (
                <div>
                    <h4>Courses for {studentCourses.student.name}</h4>
                    <ul>
                        {studentCourses.student.Courses.map(course => (
                            <li key={course.id}>{course.course_name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default StudentEnrollments;
