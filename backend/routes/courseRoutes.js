import express from 'express';
import { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse, assignLecturerToCourse } from '../controllers/courseController.js';

const courseRoutes = express.Router();

courseRoutes.post('/', createCourse);
courseRoutes.get('/', getAllCourses);
courseRoutes.get('/:id', getCourseById);
courseRoutes.put('/:id', updateCourse);
courseRoutes.delete('/:id', deleteCourse);

courseRoutes.post('/assign-lecturer', assignLecturerToCourse);

export default courseRoutes;
