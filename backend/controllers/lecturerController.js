import { Lecturer } from '../models/index.js';

// Create a new lecturer
export const createLecturer = async (req, res) => {
    try {
        const lecturer = await Lecturer.create(req.body);
        res.status(201).json(lecturer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all lecturers
export const getAllLecturers = async (req, res) => {
    try {
        const lecturers = await Lecturer.findAll();
        res.status(200).json(lecturers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a lecturer by ID
export const getLecturerById = async (req, res) => {
    try {
        const lecturer = await Lecturer.findByPk(req.params.id);
        if (lecturer) {
            res.status(200).json(lecturer);
        } else {
            res.status(404).json({ error: 'Lecturer not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a lecturer
export const updateLecturer = async (req, res) => {
    try {
        const lecturer = await Lecturer.findByPk(req.params.id);
        if (lecturer) {
            await lecturer.update(req.body);
            res.status(200).json(lecturer);
        } else {
            res.status(404).json({ error: 'Lecturer not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a lecturer
export const deleteLecturer = async (req, res) => {
    try {
        const lecturer = await Lecturer.findByPk(req.params.id);
        if (lecturer) {
            await lecturer.destroy();
            res.status(204).send(); // No content
        } else {
            res.status(404).json({ error: 'Lecturer not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
