import { Router } from 'express';
import authRoutes from './Authentication/routes/auth.routes';

const router = Router();
router.use('/auth', authRoutes);

export default router; 