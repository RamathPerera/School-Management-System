import express from 'express';
import { createLecturer, getAllLecturers, getLecturerById, updateLecturer, deleteLecturer } from '../controllers/lecturerController.js';

const lecturerRoutes = express.Router();

lecturerRoutes.post('/', createLecturer);
lecturerRoutes.get('/', getAllLecturers);
lecturerRoutes.get('/:id', getLecturerById);
lecturerRoutes.put('/:id', updateLecturer);
lecturerRoutes.delete('/:id', deleteLecturer);

export default lecturerRoutes;
