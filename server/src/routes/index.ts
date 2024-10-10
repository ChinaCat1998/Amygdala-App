import { Router } from 'express';
// import api/ auth routes here
import apiRoutes from './api/index';
import authRoutes from './auth-routes';

const router = Router();

router.use('/api', apiRoutes);
router.use('/auth', authRoutes);

export default router;