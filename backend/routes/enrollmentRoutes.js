import express from 'express';
import { enrollStudentInCourse, getStudentEnrollments, getCourseEnrollments } from '../controllers/enrollmentController.js';
import { isAuthorize } from '../middlewares/auth.js';

const enrollmentRoutes = express.Router();

enrollmentRoutes.post('/enroll', isAuthorize, enrollStudentInCourse);
enrollmentRoutes.get('/student/:studentId', isAuthorize, getStudentEnrollments);
enrollmentRoutes.get('/course/:courseId', isAuthorize, getCourseEnrollments);

export default enrollmentRoutes;
