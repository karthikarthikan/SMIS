import express from 'express';
import { login } from '../controllers/loginController.js';
import { register } from '../controllers/registerController.js';

const router = express.Router();

router.post('/login', login);
router.post('/register', register); // 👈 Add this

export default router;
