import express from 'express';
import {
    getAllJournalEntries, getJournalEntryById, getJournalEntryByDate, createJournalEntry, updateJournalEntry, 
    deleteJournalEntry, getAllJournalEntriesAllUsers,
} from '../../controllers/journal-entry-controller';

const journalEntryRouter = express.Router();

// GET /api/journal-entries/all - gets all journal entries from ALL USERS -- UNUSED BY CLIENTUI
journalEntryRouter.get('/all', getAllJournalEntriesAllUsers);

// GET /api/journal-entries - gets all journal entries -- UNUSED BY CLIENT UI
journalEntryRouter.get('/', getAllJournalEntries);

// GET /api/journal-entries/date with date query parameter
journalEntryRouter.get('/date', getJournalEntryByDate);

// GET /api/journal-entries/:id - gets a single journal-entry by id
journalEntryRouter.get('/:id', getJournalEntryById);

// POST /api/journal-entries - creates a new journal-entry
journalEntryRouter.post('/', createJournalEntry);

// PUT /api/journal-entries/:id - updates a journal-entry by id
journalEntryRouter.put('/:id', updateJournalEntry);

// DELETE /api/journal-entries/:id - deletes a journal-entry by id
journalEntryRouter.delete('/:id', deleteJournalEntry);

export { journalEntryRouter };