import jwt from 'jsonwebtoken';
import { Admin } from '../models/index.js';
const { JWT_SECRET } = process.env;

export const isAuthorize = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer')) {
            return res.status(401).json({
                message: 'Authorization token missing or malformed',
            });
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({
                message: 'Token not provided',
            });
        }
        const decoded = jwt.verify(token, JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({
                message: 'Invalid token',
            });
        }
        const user = await Admin.findByPk(decoded.id);
        if (!user) {
            return res.status(404).json({
                message: 'User not found',
            });
        }
        req.user = user;
        next();

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Server error',
        });
    }
};