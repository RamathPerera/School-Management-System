import { Lecturer, Course } from '../models/index.js';

export const createCourse = async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.status(201).json(course);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getCourseById = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        if (course) {
            res.status(200).json(course);
        } else {
            res.status(404).json({ error: 'Course not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateCourse = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        if (course) {
            await course.update(req.body);
            res.status(200).json(course);
        } else {
            res.status(404).json({ error: 'Course not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        if (course) {
            await course.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Course not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const assignLecturerToCourse = async (req, res) => {
    const { courseId, lecturerId } = req.body;

    try {
        const course = await Course.findByPk(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        const lecturer = await Lecturer.findByPk(lecturerId);
        if (!lecturer) {
            return res.status(404).json({ message: 'Lecturer not found' });
        }

        course.lecturerId = lecturerId;
        await course.save();

        res.status(200).json({
            message: 'Lecturer assigned to course successfully',
            course
        });
    } catch (error) {
        console.error('Error assigning lecturer to course:', error);
        res.status(500).json({ message: 'Failed to assign lecturer to course' });
    }
};
