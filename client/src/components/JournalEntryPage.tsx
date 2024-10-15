import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { retrieveJournalEntryByDate } from '../api/journalEntryAPI'
import { JournalEntryData } from '../interfaces/JournalEntryData';




// const formatDateForQuery = (dateString: string) => {
//   const date = new Date(dateString);
//   console.log(date);
//   const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric', timeZone: 'UTC' } as const;
//   return date.toLocaleDateString('en-US', options).replace(/,/g, ' ').replace(/\s+/g, ' ');
// };

const JournalEntryPage = () => {
  const { date } = useParams<{ date: string }>();
  const [entry, setEntry] = useState<JournalEntryData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        // const formattedDate = formatDateForQuery(date!);
        const response = await retrieveJournalEntryByDate(date as string);
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
  }, [date]);

  const formatedDate = new Date(date || '').toString().slice(0, 16);

  return (
    <div className="journal-entry-page">
      <h1 className='journal-entry-page-header'>Journal Entry for {formatedDate}</h1>
      {entry ? (
        <div className="journal-entry">
          <p><strong>Mood:</strong> {entry.mood}</p>
          <p><strong>Triggers:</strong> {entry.triggers.join(', ')}</p>
          <p><strong>Description:</strong> {entry.content}</p>
        </div>
      ) : ( 
        <>
          <p className='journal-entry-page-paragraph'>No journal entry for this date.</p>
          <button className='createButton' onClick={() => navigate(`/journal-entry/${date}/create`)}>Create</button>
        </>
      )}
      <button className='closeButton' onClick={() => navigate('/CalendarPage')}>Close</button>
    </div>
  );
};

export default JournalEntryPage;


