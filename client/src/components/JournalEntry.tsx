import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createJournalEntry } from '../api/journalEntryAPI';
import Auth from '../utils/auth';

const formatDate = (date: Date): string => {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    
    return `${month}-${day}-${year}`;
};

const JournalEntry = () => {
  const [mood, setMood] = useState('');
  const [triggers, setTriggers] = useState<string[]>([]);
  const [newTrigger, setNewTrigger] = useState<string>('');
  const [content, setDescription] = useState<string>('');
  const [validationMessage, setValidationMessage] = useState<string>('');
  const userId = Auth.getUserId() as number;
  // const { date } = useParams<{ date: string }>() as { date: string };
  const todaysDate = new Date();
  const formattedDate = formatDate(todaysDate);
  const navigate = useNavigate();

  const handleAddTrigger = () => {
    if (newTrigger && !triggers.includes(newTrigger)) {
      setTriggers([...triggers, newTrigger]);
      setNewTrigger('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood || triggers.length === 0 || !content) {
      setValidationMessage('Please input your information.');
      return;
    }
    setValidationMessage(''); // Clear any previous validation messages

    const todaysDate = new Date();
    const formattedDate = formatDate(todaysDate);

    const journalData = {
      date: formattedDate,
      mood,
      triggers,
      content,
      userId,
    };

    try {
      const response = await createJournalEntry(journalData);

      if (response) {
        console.log('Journal entry created successfully');
        navigate('/Home'); // Redirect to home page
      } else {
        console.error('Failed to create journal entry');
      }
    } catch (error) {
      console.error('Error creating journal entry:', error);
    }
  };

  return (
    <div className='journal-entry'>
      <form onSubmit={handleSubmit}>
        <h1 className='journal-calendar-text'>{formattedDate}</h1>
        {validationMessage && <p className='validation-message'>{validationMessage}</p>}
        <div className="mood-description">Mood: {mood}</div>
        <div className='mood-emojis'>
          <div className="mood-select"><span onClick={() => setMood('great')} role="img" aria-label="great">😃</span>Great</div>
          <div className='mood-select'><span onClick={() => setMood('good')} role="img" aria-label="good">🙂</span>Good</div>
          <div className='mood-select'><span onClick={() => setMood('ok')} role="img" aria-label="ok">😐</span>OK</div>
          <div className='mood-select'><span onClick={() => setMood('bad')} role="img" aria-label="bad">😞</span>Bad</div>
          <div className='mood-select'><span onClick={() => setMood('awful')} role="img" aria-label="awful">😫</span>Awful</div>
        </div>
        <div className="mood-triggers">
          <h2 className='journal-whats-affecting-text'>What's affecting your mood?</h2>
          <div className="triggers-list">
            {triggers.map((trigger, index) => (
              <span key={index} className="trigger">{trigger}</span>
            ))}
          </div>
          <input
            type="text"
            value={newTrigger}
            onChange={(e) => setNewTrigger(e.target.value)}
            placeholder="Add a trigger (e.g., traffic)"
          />
          <button type='button' className='triggerButton' onClick={handleAddTrigger}>Add Trigger</button>
        </div>
        <div className="situation-description">
          <textarea
            value={content}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the situation that triggered you"
          />
        </div>
        <button className='submitButton' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JournalEntry;
