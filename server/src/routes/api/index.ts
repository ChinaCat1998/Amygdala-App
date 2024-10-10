import { Router } from 'express';
//imports for /api/routes here: user, journalEntry, maybe auth
import { userRouter } from './user-routes';
import { journalEntryRouter } from './journal-entry-routes';
// import { authRouter } from middleware

const router = Router();

router.use('/users', userRouter); 
// authenticate token for just journalEnry routes? maybe...
// router.use('/journal-entries', authenticateToken, journalEntryRouter);
router.use('/journal-entries', journalEntryRouter);

export default router;