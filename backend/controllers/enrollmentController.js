import { Enrollment, Student, Course } from '../models/index.js';

export const enrollStudentInCourse = async (req, res) => {
    const { studentId, courseId } = req.body;

    try {
        const student = await Student.findByPk(studentId);
        const course = await Course.findByPk(courseId);

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        const enrollment = await Enrollment.create({ studentId, courseId });
        res.status(201).json({ message: 'Student enrolled in course successfully', enrollment });
    } catch (error) {
        console.error('Error enrolling student in course:', error);
        res.status(500).json({ message: 'Failed to enroll student in course' });
    }
};

export const getStudentEnrollments = async (req, res) => {
    const { studentId } = req.params;

    try {
        const student = await Student.findByPk(studentId, {
            include: {
                model: Course,
                through: { attributes: [] }
            }
        });

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.status(200).json({ student });
    } catch (error) {
        console.error('Error fetching student enrollments:', error);
        res.status(500).json({ message: 'Failed to fetch student enrollments' });
    }
};

export const getCourseEnrollments = async (req, res) => {
    const { courseId } = req.params;

    try {
        const course = await Course.findByPk(courseId, {
            include: {
                model: Student,
                through: { attributes: [] }
            }
        });

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        res.status(200).json({ course });
    } catch (error) {
        console.error('Error fetching course enrollments:', error);
        res.status(500).json({ message: 'Failed to fetch course enrollments' });
    }
};
