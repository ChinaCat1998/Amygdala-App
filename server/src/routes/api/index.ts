import { Router } from 'express';
//imports for /api/routes here: user, journalEntry, maybe auth
import { userRouter } from './user-routes';
// import { journalEntryRouter } from './journalEntry-routes';
// import { authRouter } from middleware

const router = Router();

// authenticate token for just journalEnry routes? maybe...
router.use('users', userRouter); 
// router.use('journalEntries', journalEntryRouter);

export default router;