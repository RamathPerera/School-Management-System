import express from 'express';
import { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse, assignLecturerToCourse } from '../controllers/courseController.js';
import { isAuthorize } from '../middlewares/auth.js';

const courseRoutes = express.Router();

courseRoutes.post('/', isAuthorize, createCourse);
courseRoutes.get('/', isAuthorize, getAllCourses);
courseRoutes.get('/:id', isAuthorize, getCourseById);
courseRoutes.put('/:id', isAuthorize, updateCourse);
courseRoutes.delete('/:id', isAuthorize, deleteCourse);

courseRoutes.post('/assign-lecturer', isAuthorize, assignLecturerToCourse);

export default courseRoutes;
