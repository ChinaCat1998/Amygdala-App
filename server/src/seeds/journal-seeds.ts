import { JournalEntry } from '../models/index.js';

export const seedTips = async () => {
  await JournalEntry.bulkCreate([
    {
    title: 'Work is hard',
    userId: 2,
    color: 'Red',
    mood: 'Frustrated',
    anxiety: 3,
    sleep: 5,
    content: 'Had a difficult day at work today.'
    },
    {
    title: 'Work is hard',
    userId: 2,
    color: 'Red',
    mood: 'Frustrated',
    anxiety: 3,
    sleep: 5,
    content: 'Had a difficult day at work today.'
    },
    {
    title: 'Work is hard',
    userId: 2,
    color: 'Red',
    mood: 'Frustrated',
    anxiety: 3,
    sleep: 5,
    content: 'Had a difficult day at work today.'
    },
    {
    title: 'School',
    userId: 2,
    color: 'Green',
    mood: 'Frustrated',
    anxiety: 3,
    sleep: 5,
    content: 'Had a difficult day at work today.'
    }
  ]);
};