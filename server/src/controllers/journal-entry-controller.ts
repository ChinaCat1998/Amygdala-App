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

// GET /api/journal-entries - FOR ALL ENTRIES FROM A USER
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

// GET /api/journal-entries with date query parameter / for a specific user
export const getJournalEntryByDate = async (req: Request, res: Response) => {
    const { date } = req.query as { date: string };
    const userId  = req.user?.userId;
    if (!userId) {
        res.status(403).json({ message: 'User ID not found' });
    }
    try {
        const journalEntries = await JournalEntry.findAll({
            where: {
                date: date,
                userId: userId,                             
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
    const { date, mood, triggers, content } = req.body;
    const userId  = req.user?.userId as number;
    if (!userId) {
        res.status(403).json({ message: 'User ID not found' });
    }
    try {
        const newJournalEntry = await JournalEntry.create({ date, mood, triggers, content, userId });
        res.status(201).json(newJournalEntry);
    }
    catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

// PUT /api/journal-entries/:id
export const updateJournalEntry = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { date, mood, triggers, content, userId } = req.body;
    try {
        const journalEntry = await JournalEntry.findByPk(id);
        if (journalEntry) {
            journalEntry.date = date;
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