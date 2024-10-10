import { Request, Response } from 'express';
import { JournalEntry } from '../models/journalEntry';
import { User } from '../models/user';

// GET /api/journal-entries-allusers
export const getAllJournalEntriesAllUsers = async (req: Request, res: Response) => {
    try {
        const journalEntries = await JournalEntry.findAll({
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: { exclude: ['password'] },  
                },                                          
            ],
        });
        res.json(journalEntries);
    }
    catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

// GET /api/journal-entries
export const getAllJournalEntries = async (req: Request, res: Response) => {
    const { userId } = req.body;
    try {
        const journalEntries = await JournalEntry.findAll({
            where: {
                userId: userId,                             // should get entries only from user requesting it
            },
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: { exclude: ['password'] },  
                },                                          
            ],
        });
        res.json(journalEntries);
    }
    catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

// GET /api/journal-entries/:id
export const getJournalEntryById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const journalEntry = await JournalEntry.findByPk(id, {
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: { exclude: ['password'] },
                },
            ],
        });
        if (journalEntry) {
            res.json(journalEntry);
        }
        else {
            res.status(404).json({ message: 'Journal entry not found' });
        }
    }
    catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

// POST /api/journal-entries
export const createJournalEntry = async (req: Request, res: Response) => {
    const { title, mood, triggers, content, userId } = req.body;
    try {
        const newJournalEntry = await JournalEntry.create({ title, mood, triggers, content, userId });
        res.status(201).json(newJournalEntry);
    }
    catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

// PUT /api/journal-entries/:id
export const updateJournalEntry = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, mood, triggers, content, userId } = req.body;
    try {
        const journalEntry = await JournalEntry.findByPk(id);
        if (journalEntry) {
            journalEntry.title = title;
            journalEntry.content = content;
            // journalEntry.userId = userId;
            await journalEntry.save();
            res.json(journalEntry);
        }
        else {
            res.status(404).json({ message: 'Journal entry not found' });
        }
    }
    catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

// DELETE /api/journal-entries/:id
export const deleteJournalEntry = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const journalEntry = await JournalEntry.findByPk(id);
        if (journalEntry) {
            await journalEntry.destroy();
            res.json({ message: 'Journal entry deleted' });
        }
        else {
            res.status(404).json({ message: 'Journal entry not found' });
        }
    }
    catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}