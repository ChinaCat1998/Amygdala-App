import { JournalEntry } from '../models/index.js';

export const seedJournalEntries = async () => {
  await JournalEntry.bulkCreate([
    {
    date: '2024-10-10',
    userId: 2,
    mood: 'Frustrated',
    content: 'Had a difficult day at work today.',
    triggers: ['Work']
    },
    {
    date: '2024-10-11',
    userId: 2,
    mood: 'Frustrated',
    content: 'Had a difficult day at school today.',
    triggers: ['Work', 'School']
    },
    {
    date: '2024-10-12',
    userId: 1,
    mood: 'Happy',
    content: 'Hung out with friends and got food.',
    triggers: []
    },
    {
    date: '2024-10-09',
    userId: 3,
    mood: 'Great',
    content: 'Gonna do 1000 push ups and watch Adam Sandler movies.',
    triggers: ['Life']
    },
  ]);
};