import React, { useState, useEffect } from 'react';
import TableHeader from '../components/Tables/TableHeader';
import TableRow from '../components/Tables/TableRow';
import AddButton from '../components/Tables/AddButton';
import AddCourseForm from '../components/Forms/AddCourseForm';
import UpdateCourseForm from '../components/Forms/UpdateCourseForm';
import Swal from 'sweetalert2';
import courseService from '../services/courseService';
import lecturerService from '../services/lecturerService';
import LogoutButton from '../components/LogoutButton';

const CoursePage = () => {
    const headers = ['ID', 'Course Code', 'Course Name', 'Description', 'Lecturer ID', 'Actions'];
    const [courses, setCourses] = useState([]);
    const [lecturerIds, setLecturerIds] = useState([]);
    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await courseService.getAllCourses();
                setCourses(data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };
        fetchCourses();
    }, []);

    useEffect(() => {
        const fetchLecturerIds = async () => {
            try {
                const lecturers = await lecturerService.getAllLecturers();
                const lecturerOptions = lecturers.map((lecturer) => ({
                    id: lecturer.id,
                    name: lecturer.name,
                }));
                setLecturerIds(lecturerOptions); // Store lecturer objects with both id and name
            } catch (error) {
                console.error('Error fetching lecturer IDs:', error);
            }
        };
        fetchLecturerIds();
    }, []);    

    const handleAddCourse = async (newCourse) => {
        console.log("Adding courses with data:", newCourse);
        try {
            const addedCourse = await courseService.addCourse(newCourse);
        setCourses([...courses, addedCourse]);
        setAddModalOpen(false);
        await Swal.fire('Success!', 'Course added successfully!', 'success');
        } catch (error) {
            console.error('Error adding course:', error);
        }
    };

    const handleUpdateCourse = async (updatedCourse) => {
        try {
            const updatedData = await courseService.updateCourse(selectedCourse.id, updatedCourse);
            setCourses(courses.map(course => 
                course.id === selectedCourse.id ? updatedData : course
            ));
            setUpdateModalOpen(false);
            await Swal.fire('Success!', 'Course updated successfully!', 'success');
        } catch (error) {
            console.error('Error updating course:', error);
        }
    };

    const handleDeleteCourse = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });
        if (result.isConfirmed) {
            try {
                await courseService.deleteCourse(id);
                setCourses(courses.filter(course => course.id !== id));
                Swal.fire('Deleted!', 'Course has been deleted.', 'success');
            } catch (error) {
                console.error('Error deleting course:', error);
            }
        }
    };

    return (
        <div className="min-h-screen bg-purple-50 p-4 flex flex-col items-center">
            <div className='flex justify-between items-center w-3/4'>
                <h2 className="text-3xl font-bold text-purple-700 mb-6">Courses</h2>
                <LogoutButton />
            </div>
            <table className="w-full max-w-4xl bg-white rounded-lg shadow-lg">
                <TableHeader headers={headers} />
                <tbody>
                    {courses.map(course => (
                        <TableRow
                            key={course.id}
                            row={{id: course.id, course_code: course.course_code, course_name: course.course_name, course_description: course.course_description, lecturerId: course.lecturerId }}
                            onEdit={() => {
                                setSelectedCourse(course);
                                setUpdateModalOpen(true);
                            }}
                            onDelete={() => handleDeleteCourse(course.id)}
                        />
                    ))}
                </tbody>
            </table>
            <AddButton onClick={() => setAddModalOpen(true)} label="Add New Course" />

            {isAddModalOpen && (
                <AddCourseForm onSubmit={handleAddCourse} onClose={() => setAddModalOpen(false)} existingLecturerIds={lecturerIds}/>
            )}
            {isUpdateModalOpen && selectedCourse && (
                <UpdateCourseForm 
                    initialData={selectedCourse} 
                    onSubmit={handleUpdateCourse} 
                    onClose={() => setUpdateModalOpen(false)} 
                    existingLecturerIds={lecturerIds} // Pass lecturer data here
                />
            )}
        </div>
    );
};

export default CoursePage;
