import bcrypt from 'bcryptjs'; // Update import for bcryptjs
import { Admin } from '../models/index.js';
import jwt from 'jsonwebtoken'; // Update import for jsonwebtoken
const { JWT_SECRET } = process.env; // No change needed here

export const register = async (req, res) => {
    try {
        const userExists = await Admin.findOne({ where: { user_name: req.body.user_name.toLowerCase() } });
        if (userExists) {
            return res.status(409).send({ msg: 'This user_name is already in use!' });
        }

        const hash = await bcrypt.hash(req.body.password, 10);
        const newUser = await Admin.create({
            user_name: req.body.user_name,
            password: hash
        });

        return res.status(201).send({
            msg: 'User registered successfully!',
            userId: newUser.id  // Assuming you want to return the user ID
        });
    } catch (err) {
        return res.status(500).send({ msg: err.message });
    }
};

export const login = async (req, res) => {
    try {
        const user = await Admin.findOne({ where: { user_name: req.body.user_name } });
        if (!user) {
            return res.status(401).send({ msg: 'Email incorrect!' });
        }

        const isValidPassword = await bcrypt.compare(req.body.password, user.password);
        if (!isValidPassword) {
            return res.status(401).send({ msg: 'Password incorrect!' });
        }

        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '3h' });

        return res.status(200).send({
            msg: 'Logged in successfully',
            token,
            user: {
                id: user.id,
                user_name: user.user_name
            }
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ msg: err.message });
    }
}
