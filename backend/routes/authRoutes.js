import express from 'express';
import { register, login } from '../controllers/authController.js';

const authRoutes = express.Router(); // Create a new router instance

// Define routes with associated middlewares and controller functions
authRoutes.post('/register', register);
authRoutes.post('/login', login);

export default authRoutes;