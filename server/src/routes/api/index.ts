import { userRouter } from './user-routes.js';
import { journalRouter } from './journal-routes.js';
import express from 'express';
const router = express.Router();

router.use('/users', userRouter);
router.use('/journal', journalRouter);

export default router;