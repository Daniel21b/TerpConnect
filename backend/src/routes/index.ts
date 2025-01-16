import { Router } from 'express';
import userRoutes from './user.routes';
// import other route files here, e.g. groupRoutes

const router = Router();

router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

router.use('/users', userRoutes);
// router.use('/groups', groupRoutes);

export default router;
