import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import studentRoutes from './routes/studentRoutes.js';
import lecturerRoutes from './routes/lecturerRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import enrollmentRoutes from './routes/enrollmentRoutes.js'
import { syncDatabase } from './models/index.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/api', authRoutes);
app.use('/students', studentRoutes);
app.use('/lecturers', lecturerRoutes);
app.use('/courses', courseRoutes);
app.use('/enrollments', enrollmentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await syncDatabase();
});