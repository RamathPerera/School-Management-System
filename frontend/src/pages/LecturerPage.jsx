import React, { useState, useEffect } from 'react';
import TableHeader from '../components/Tables/TableHeader';
import TableRow from '../components/Tables/TableRow';
import AddButton from '../components/Tables/AddButton';
import AddLecturerForm from '../components/Forms/AddLecturerForm';
import UpdateLecturerForm from '../components/Forms/UpdateLecturerForm';
import Swal from 'sweetalert2';
import lecturerService from '../services/lecturerService';
import LogoutButton from '../components/LogoutButton';
import BackButton from '../components/BackButton';

function LecturerPage() {
    const headers = ['ID', 'Name', 'Age', 'Address', 'Gender', 'Actions'];
    const [lecturers, setLecturers] = useState([]);
    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
    const [selectedLecturer, setSelectedLecturer] = useState(null);

    useEffect(() => {
        const fetchLecturers = async () => {
            try {
                const data = await lecturerService.getAllLecturers();
                setLecturers(data);
            } catch (error) {
                console.error('Error fetching lecturers:', error);
            }
        };
        fetchLecturers();
    }, []);

    const handleAddLecturer = async (newLecturer) => {
        try {
            console.log(newLecturer);
            const addedLecturer = await lecturerService.addLecturer(newLecturer);
            setLecturers([...lecturers, addedLecturer]);
            setAddModalOpen(false);
            await Swal.fire('Success!', 'Lecturer added successfully!', 'success');
        } catch (error) {
            console.error('Error adding lecturer:', error);
        }
    };

    const handleUpdateLecturer = async (updatedLecturer) => {
        try {
            const updatedData = await lecturerService.updateLecturer(selectedLecturer.id, updatedLecturer);
            setLecturers(
                lecturers.map(lecturer =>
                    lecturer.id === selectedLecturer.id ? updatedData : lecturer
                )
            );
            setUpdateModalOpen(false);
            await Swal.fire('Success!', 'Lecturer updated successfully!', 'success');
        } catch (error) {
            console.error('Error updating lecturer:', error);
        }
    };

    const handleDeleteLecturer = async (id) => {
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
                await lecturerService.deleteLecturer(id);
                setLecturers(lecturers.filter(lecturer => lecturer.id !== id));
                await Swal.fire('Deleted!', 'Lecturer has been deleted.', 'success');
            } catch (error) {
                console.error('Error deleting lecturer:', error);
            }
        }
    };

    return (
        <div className="min-h-screen bg-purple-50 p-4 flex flex-col items-center">
            <div className='flex justify-between items-center w-3/4'>
                <BackButton />
                <h2 className="text-3xl font-bold text-purple-700 mb-6">Lecturers</h2>
                <LogoutButton />
            </div>
            <table className="w-full max-w-4xl bg-white rounded-lg shadow-lg">
                <TableHeader headers={headers} />
                <tbody>
                    {lecturers.map(lecturer => (
                        <TableRow
                            key={lecturer.id}
                            row={{
                                id: lecturer.id,
                                name: lecturer.name,
                                age: lecturer.age,
                                address: lecturer.address,
                                gender: lecturer.gender
                            }}
                            onEdit={() => {
                                setSelectedLecturer(lecturer);
                                setUpdateModalOpen(true);
                            }}
                            onDelete={() => handleDeleteLecturer(lecturer.id)}
                        />
                    ))}
                </tbody>
            </table>
            <AddButton onClick={() => setAddModalOpen(true)} label="Add New Lecturer" />

            {isAddModalOpen && (
                <AddLecturerForm onSubmit={handleAddLecturer} onClose={() => setAddModalOpen(false)} />
            )}
            {isUpdateModalOpen && selectedLecturer && (
                <UpdateLecturerForm 
                    initialData={selectedLecturer} 
                    onSubmit={handleUpdateLecturer} 
                    onClose={() => setUpdateModalOpen(false)} 
                />
            )}
        </div>
    );
};

export default LecturerPage;
