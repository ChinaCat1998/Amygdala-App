import express from 'express';
import {
    getAllJournalEntries, getJournalEntryById, createJournalEntry, updateJournalEntry, deleteJournalEntry, getAllJournalEntriesAllUsers,
} from '../../controllers/journal-entry-controller';

const journalEntryRouter = express.Router();

// GET /api/journal-entries/all - gets all journal entries from ALL USERS
journalEntryRouter.get('/all', getAllJournalEntriesAllUsers);

// GET /api/journal-entries - gets all journal entries
journalEntryRouter.get('/', getAllJournalEntries);

// GET /api/journal-entries/:id - gets a single journal-entry by id
journalEntryRouter.get('/:id', getJournalEntryById);

// POST /api/journal-entries - creates a new journal-entry
journalEntryRouter.post('/', createJournalEntry);

// PUT /api/journal-entries/:id - updates a journal-entry by id
journalEntryRouter.put('/:id', updateJournalEntry);

// DELETE /api/journal-entries/:id - deletes a journal-entry by id
journalEntryRouter.delete('/:id', deleteJournalEntry);

export { journalEntryRouter };