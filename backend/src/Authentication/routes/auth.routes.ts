import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

const router = Router();

// Authentication routes
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/reset-password', AuthController.resetPassword);
router.post('/refresh', AuthController.refreshSession);

export default router; 