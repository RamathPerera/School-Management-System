import React, { useState, useEffect } from 'react';
import enrollmentService from '../services/enrollmentService';
import studentService from '../services/studentService';
import courseService from '../services/courseService';
import Swal from 'sweetalert2';

function EnrollmentForm({ onEnrollmentSuccess }) {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const studentData = await studentService.getAllStudents();
                const courseData = await courseService.getAllCourses();
                setStudents(studentData);
                setCourses(courseData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleEnrollment = async () => {
        if (!selectedStudent || !selectedCourse) {
            Swal.fire('Error', 'Please select both a student and a course.', 'error');
            return;
        }
        try {
            await enrollmentService.enrollStudent(selectedStudent, selectedCourse);
            Swal.fire('Success', 'Student enrolled in course successfully!', 'success');
            onEnrollmentSuccess();
        } catch (error) {
            console.error('Enrollment error:', error);
            Swal.fire('Error', 'Could not enroll student.', 'error');
        }
    };

    return (
        <div>
            <h3>Enroll Student in Course</h3>
            <div className="mb-4">
                <label>Student:</label>
                <select onChange={(e) => setSelectedStudent(e.target.value)} value={selectedStudent}>
                    <option value="">Select Student</option>
                    {students.map(student => (
                        <option key={student.id} value={student.id}>
                            {`${student.name} (ID: ${student.id})`}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label>Course:</label>
                <select onChange={(e) => setSelectedCourse(e.target.value)} value={selectedCourse}>
                    <option value="">Select Course</option>
                    {courses.map(course => (
                        <option key={course.id} value={course.id}>
                            {`${course.course_name} (ID: ${course.id})`}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={handleEnrollment} className="bg-purple-700 text-white px-4 py-2 rounded">Enroll</button>
        </div>
    );
};

export default EnrollmentForm;
