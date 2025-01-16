import { Router } from 'express';
import * as UserController from '../controllers/user.controller';

const router = Router();

router.post('/', UserController.createProfile);
router.get('/:id', UserController.getProfile);
router.put('/:id', UserController.updateProfile);

export default router;