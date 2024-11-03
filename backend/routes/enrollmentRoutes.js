import express from 'express';
import { enrollStudentInCourse, getStudentEnrollments, getCourseEnrollments } from '../controllers/enrollmentController.js';

const enrollmentRoutes = express.Router();

enrollmentRoutes.post('/enroll', enrollStudentInCourse);
enrollmentRoutes.get('/student/:studentId', getStudentEnrollments);
enrollmentRoutes.get('/course/:courseId', getCourseEnrollments);

export default enrollmentRoutes;
