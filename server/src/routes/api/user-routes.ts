import express from 'express';
import type { Request, Response} from 'express';
import { User } from '../../models/index.js';

const router = express.Router();

// GET /feedback - Get all feedback
router.get('/', async (_req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export { router as userRouter };