import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



/* interface JournalEntry {
  date: string;
  mood: string;
  triggers: string[];
  description: string;
}

const JournalEntryPage = () => {
  const { date } = useParams<{ date: string }>();
  const [entry, setEntry] = useState<JournalEntry | null>(null);

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await fetch(`/api/journal-entries?date=${date}`);
        if (response.ok) {
          const data = await response.json();
          setEntry(data);
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
          <p><strong>Description:</strong> {entry.description}</p>
        </div>
      ) : (
        <p>No journal entry for this date.</p>
      )}
    </div>
  );
}; */






interface JournalEntry {
  date: string;
  mood: string;
  triggers: string[];
  content: string;
}

const formatDateForQuery = (dateString: string) => {
  const date = new Date(dateString);
  const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric', timeZone: 'UTC' } as const;
  return date.toLocaleDateString('en-US', options).replace(/,/g, ' ');
};

const JournalEntryPage = () => {
  const { date } = useParams<{ date: string }>();
  const [entry, setEntry] = useState<JournalEntry | null>(null);

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const formattedDate = formatDateForQuery(date!);
        const response = await fetch(`/api/journal-entries?date=${formattedDate}`);
        if (response.ok) {
          const data = await response.json();
          setEntry(data);
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


