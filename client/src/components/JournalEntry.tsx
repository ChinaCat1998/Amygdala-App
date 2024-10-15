import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { retrieveJournalEntryByDate } from '../api/journalEntryAPI'
import { JournalEntryData } from '../interfaces/JournalEntryData';

const formatDate = (date: Date): string => {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    
    return `${month}-${day}-${year}`;
};

const JournalEntry = () => {
  const todaysDate = new Date();
  const renderTodaysDate = todaysDate.toDateString();
  const formattedDate = formatDate(todaysDate);
  const [entry, setEntry] = useState<JournalEntryData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        // const formattedDate = formatDateForQuery(date!);
        const response = await retrieveJournalEntryByDate(formattedDate);
        const journalEntry = response[0];
        if (journalEntry) {
          console.log(response);
          setEntry(journalEntry);
        } else {
          setEntry(null);
        }
      } catch (error) {
        console.error('Failed to fetch journal entry:', error);
      }
    };

    fetchEntry();
  }, [formattedDate]);

  return (
    <div className="journal-entry-page">
      <h1 className='journal-entry-page-header'>Journal Entry for today:</h1>
      <h1 className='journal-entry-page-header'>{renderTodaysDate}</h1>
      {entry ? (
        <div className="journal-entry">
          <p><strong>Mood:</strong> {entry.mood}</p>
          <p><strong>Triggers:</strong> {entry.triggers.join(', ')}</p>
          <p><strong>Description:</strong> {entry.content}</p>
        </div>
      ) : ( 
        <>
          <p className='journal-entry-page-paragraph'>No journal entry for this date.</p>
          <button className='createButton' onClick={() => navigate(`/journal-entry/${formattedDate}/create`)}>Create</button>
        </>
      )}
      <button className='closeButton' onClick={() => navigate('/CalendarPage')}>Close</button>
    </div>
  );
};

export default JournalEntry;
