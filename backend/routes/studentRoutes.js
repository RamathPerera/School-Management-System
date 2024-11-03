import express from 'express';
import { createStudent, getAllStudents, getStudentById, updateStudent, deleteStudent } from '../controllers/studentController.js';
import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { isAuthorize } from '../middlewares/auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = path.join(__dirname, '../uploads/images');
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

const studentRoutes = express.Router();

studentRoutes.post('/', isAuthorize, upload.single('birth_certificate'), createStudent);
studentRoutes.get('/', isAuthorize, getAllStudents);
studentRoutes.get('/:id', isAuthorize, getStudentById);
studentRoutes.put('/:id', isAuthorize, upload.single('birth_certificate'), updateStudent);
studentRoutes.delete('/:id', isAuthorize, deleteStudent);

export default studentRoutes;
