import { Student } from '../models/index.js';

// Create a new student
export const createStudent = async (req, res) => {
    try {
        const studentData = {
            ...req.body,
            birth_certificate: req.file ? `images/${req.file.filename}` : null // Store the file path
        };

        const student = await Student.create(studentData);
        // Include the full URL for the image if necessary
        student.birth_certificate = `${req.protocol}://${req.get('host')}/${student.birth_certificate}`;
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all students
export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a student by ID
export const getStudentById = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ error: 'Student not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a student
// Controller functions remain the same but ensure the following for update logic
export const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (student) {
            // Handle file upload for updating
            const updatedData = {
                ...req.body,
                birth_certificate: req.file ? `images/${req.file.filename}` : student.birth_certificate // retain old path if no new file
            };
            await student.update(updatedData);
            res.status(200).json(student);
        } else {
            res.status(404).json({ error: 'Student not found' });
        }
    } catch (error) {
        console.error(error); // Log the error
        res.status(400).json({ error: error.message });
    }
};

// Delete a student
export const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (student) {
            await student.destroy();
            res.status(204).send(); // No content
        } else {
            res.status(404).json({ error: 'Student not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
