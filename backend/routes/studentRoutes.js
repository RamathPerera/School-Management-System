import express from 'express';
import { createStudent, getAllStudents, getStudentById, updateStudent, deleteStudent } from '../controllers/studentController.js';
import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Setup storage for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = path.join(__dirname, '../uploads/images');
        // Ensure directory exists
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

// File filter for allowed file types
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

// Initialize multer with storage and file filter
const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

const studentRoutes = express.Router();

// Serve static files from the uploads/images directory
studentRoutes.use('/images', express.static(path.join(__dirname, '../uploads/images')));

// Route to create a new student, includes file upload
studentRoutes.post('/', upload.single('birth_certificate'), createStudent);

// Other routes for student management
studentRoutes.get('/', getAllStudents);
studentRoutes.get('/:id', getStudentById);
studentRoutes.put('/:id', updateStudent);
studentRoutes.delete('/:id', deleteStudent);

// Export the student routes
export default studentRoutes;
