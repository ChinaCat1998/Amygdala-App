import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { retrieveJournalEntryByDate } from '../api/journalEntryAPI'

interface JournalEntry {
  date: string;
  mood: string;
  triggers: string[];
  content: string;
}

const JournalEntryPage = () => {
  const { date } = useParams<{ date: string }>();
  const [entry, setEntry] = useState<JournalEntry | null>(null);

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await retrieveJournalEntryByDate(date || '');
        if (response) {
          setEntry(response);
        } else {
          setEntry(null);
        }
      } catch (error) {
        console.error('Failed to fetch journal entry:', error);
      }
    };

    fetchEntry();
  }, [date]);

  return (
    <div className="journal-entry-page">
      <h1>Journal Entry for {date}</h1>
      {entry ? (
        <div className="journal-entry">
          <p><strong>Mood:</strong> {entry.mood}</p>
          <p><strong>Triggers:</strong> {entry.triggers.join(', ')}</p>
          <p><strong>Description:</strong> {entry.content}</p>
        </div>
      ) : (
        <p>No journal entry for this date.</p>
      )}
    </div>
  );
};

export default JournalEntryPage;
