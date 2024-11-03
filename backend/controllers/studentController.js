import { Student } from '../models/index.js';

export const createStudent = async (req, res) => {
    try {
        const studentData = {
            ...req.body,
            birth_certificate: req.file ? `images/${req.file.filename}` : null
        };
        const student = await Student.create(studentData);
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

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

export const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (student) {
            const updatedData = {
                ...req.body,
                birth_certificate: req.file ? `images/${req.file.filename}` : student.birth_certificate
            };
            await student.update(updatedData);
            res.status(200).json(student);
        } else {
            res.status(404).json({ error: 'Student not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

export const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (student) {
            await student.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Student not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
