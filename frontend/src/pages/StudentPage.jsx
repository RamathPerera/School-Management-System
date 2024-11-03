import React, { useState, useEffect } from 'react';
import TableHeader from '../components/Tables/TableHeader';
import TableRowStudents from '../components/Tables/TableRowStudents';
import AddButton from '../components/Tables/AddButton';
import AddStudentForm from '../components/Forms/AddStudentForm';
import UpdateStudentForm from '../components/Forms/UpdateStudentForm';
import Swal from 'sweetalert2';
import studentService from '../services/studentService';
import LogoutButton from '../components/LogoutButton';
import BackButton from '../components/BackButton';

function StudentPage() {
    const headers = ['ID', 'Name', 'Age', 'Address', 'Gender', 'Birth Certificate', 'Actions'];
    const [students, setStudents] = useState([]);
    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

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

    const handleAddStudent = async (newStudent) => {
        try {
            const addedStudent = await studentService.addStudent(newStudent);
            setStudents([...students, addedStudent]);
            setAddModalOpen(false);
            await Swal.fire('Success!', 'Student added successfully!', 'success');
        } catch (error) {
            console.error('Error adding student:', error);
        }
    };
    

    const handleUpdateStudent = async (updatedStudent) => {
        try {
            const updatedData = await studentService.updateStudent(selectedStudent.id, updatedStudent);
            setStudents(students.map(student => (student.id === selectedStudent.id ? updatedData : student)));
            setUpdateModalOpen(false);
            await Swal.fire('Success!', 'Student updated successfully!', 'success');
        } catch (error) {
            console.error('Error updating student:', error);
        }
    };

    const handleDeleteStudent = async (id) => {
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
                await studentService.deleteStudent(id);
                setStudents(students.filter(student => student.id !== id));
                await Swal.fire('Deleted!', 'Student has been deleted.', 'success');
            } catch (error) {
                console.error('Error deleting student:', error);
            }
        }
    };

    return (
        <div className="min-h-screen bg-purple-50 p-4 flex flex-col items-center">
            <div className='flex justify-between items-center w-3/4'>
                <BackButton />
                <h2 className="text-3xl font-bold text-purple-700 mb-6">Students</h2>
                <LogoutButton />
            </div>
            <table className="w-full max-w-4xl bg-white rounded-lg shadow-lg">
                <TableHeader headers={headers} />
                <tbody>
                    {students.map(student => (
                        <TableRowStudents
                            key={student.id}
                            row={{id: student.id, name: student.name, age: student.age, address: student.address, gender: student.gender, birth_certificate: student.birth_certificate}}
                            onEdit={() => {
                                setSelectedStudent(student);
                                setUpdateModalOpen(true);
                            }}
                            onDelete={() => handleDeleteStudent(student.id)}
                        />
                    ))}
                </tbody>
            </table>
            <AddButton onClick={() => setAddModalOpen(true)} label="Add New Student" />

            {isAddModalOpen && (
                <AddStudentForm onSubmit={handleAddStudent} onClose={() => setAddModalOpen(false)} />
            )}
            {isUpdateModalOpen && selectedStudent && (
                <UpdateStudentForm 
                    initialData={selectedStudent} 
                    onSubmit={handleUpdateStudent} 
                    onClose={() => setUpdateModalOpen(false)} 
                />
            )}
        </div>
    );
};

export default StudentPage;
