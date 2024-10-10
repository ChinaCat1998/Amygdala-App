import { Router } from 'express';
// import api/maybe auth routes here
import apiRoutes from './api/index';

const router = Router();

// router.use('/auth', authRoutes); maybe...
router.use('/api', apiRoutes);

export default router;