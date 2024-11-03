import express from 'express';
import { createLecturer, getAllLecturers, getLecturerById, updateLecturer, deleteLecturer } from '../controllers/lecturerController.js';
import { isAuthorize } from '../middlewares/auth.js';

const lecturerRoutes = express.Router();

lecturerRoutes.post('/', isAuthorize, createLecturer);
lecturerRoutes.get('/', isAuthorize, getAllLecturers);
lecturerRoutes.get('/:id', isAuthorize, getLecturerById);
lecturerRoutes.put('/:id', isAuthorize, updateLecturer);
lecturerRoutes.delete('/:id', isAuthorize, deleteLecturer);

export default lecturerRoutes;
