import express from 'express';
import type { Request, Response} from 'express';
import { JournalEntry } from '../../models/index.js';

const router = express.Router();

// GET /feedback - Get all feedback
router.get('/', async (_req: Request, res: Response) => {
  try {
    const entries = await JournalEntry.findAll();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export { router as journalRouter };
