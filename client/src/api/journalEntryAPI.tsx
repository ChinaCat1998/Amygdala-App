import { JournalEntryData } from '../interfaces/JournalEntryData';
import { ApiMessage } from '../interfaces/ApiMessage';
import Auth from '../utils/auth';

// function that calls /api/journal-entries endpoint to retrieve all journal entries for a user
const retrieveAllJournalEntries = async() => {
    try {
        const response = await fetch('/api/journal-entries', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Auth.getToken()}`
            }
        })
        const data = await response.json();

        if (!response.ok){
            throw new Error('Invalid API response, check network tab!');
        }

        return data;
    }
    catch (error){
        console.log('Error retrieving all journal entries for user: ', error);
        return Promise.reject('Could not retrieve all journal entries for user');
    }
}

// function that calls /api/journal-entries/:id endpoint to retrieve a journal entry for a user
const retrieveJournalEntry = async(entryId: string): Promise<JournalEntryData> => {
    try {
        const response = await fetch(`/api/journal-entries/${entryId}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Auth.getToken()}`
            }
        })
        const data = await response.json();

        if (!response.ok){
            throw new Error('Invalid API response, check network tab!');
        }
        return data;
    }
    catch (error){
        console.log('Error retrieving journal entry: ', error);
        return Promise.reject('Could not retrieve journal entry');
    }
}

// function that calls /api/journal-entries endpoint with date query to retrieve a journal entry for a user
const retrieveJournalEntryByDate = async(date: string): Promise<JournalEntryData> => {
    try {
        const response = await fetch(`/api/journal-entries?date=${date}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Auth.getToken()}`
            }
        })
        const data = await response.json();

        if (!response.ok){
            throw new Error('Invalid API response, check network tab!');
        }
        return data;
    }
    catch (error){
        console.log('Error retrieving journal entry: ', error);
        return Promise.reject('Could not retrieve journal entry');
    }
}

// function that calls /api/journal-entries endpoint to create a new journal entry
const createJournalEntry = async(body: JournalEntryData) => {
    try {
        const response = await fetch('/api/journal-entries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Auth.getToken()}`
            },
            body: JSON.stringify(body)
        })
        const data = await response.json();

        if (!response.ok){
            throw new Error('Invalid API response, check network tab!')
        }

        return data;
    }
    catch (error){
        console.log('Error creating journal entry: ', error);
        return Promise.reject('Could not create journal entry');
    }
}

// function that calls /api/journal-entries/:id endpoint to update a journal entry
const updateJournalEntry = async(entryId: string, body: JournalEntryData): Promise<JournalEntryData> => {
    try {
        const response = await fetch(`/api/journal-entries/${entryId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Auth.getToken()}`
            },
            body: JSON.stringify(body)
        })
        const data = await response.json();

        if (!response.ok){
            throw new Error('Invalid API response, check network tab!');
        }

        return data;
    }
    catch (error){
        console.error('Update did not work: ', error);
        return Promise.reject('Could not update journal entry');
    }
}

// function that calls /api/journal-entries/:id endpoint to delete a journal entry
const deleteJournalEntry = async(entryId: string): Promise<ApiMessage> => {
    try {
        const response = await fetch(`api/journal-entries/${entryId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Auth.getToken()}`
            }
        })
        const data = await response.json();

        if (!response.ok){
            throw new Error('Invalid API response, check network tab!');
        }

        return data;
    }
    catch (error){
        console.error('Delete did not work: ', error);
        return Promise.reject('Could not delete journal entry');
    }
}

export { retrieveAllJournalEntries, retrieveJournalEntry, retrieveJournalEntryByDate, createJournalEntry, updateJournalEntry, deleteJournalEntry};