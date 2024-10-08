import React, { useState } from 'react';


const JournalEntry = () => {
  const [mood, setMood] = useState('');
  const [triggers, setTriggers] = useState<string[]>([]);
  const [newTrigger, setNewTrigger] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleAddTrigger = () => {
    if (newTrigger && !triggers.includes(newTrigger)) {
      setTriggers([...triggers, newTrigger]);
      setNewTrigger('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const journalData = {
    date: new Date().toDateString(),
    mood,
    triggers,
    description
    };
    console.log('Journal Entry Data:', journalData);
    // Here you can send the data to your server or handle it as needed
  }

  return (
    <div className='journal-entry'>
    <form onSubmit={handleSubmit}>
      <h1 className='journal-calendar-text'>{new Date().toDateString()}</h1>
      <div className='mood-emojis'>
        <div className="mood-select"><span onClick={() => setMood('great')} role="img" aria-label="great">😃</span></div>
        <div className='mood-select'><span onClick={() => setMood('good')} role="img" aria-label="good">🙂</span></div>
        <div className='mood-select'><span onClick={() => setMood('ok')} role="img" aria-label="ok">😐</span></div>
        <div className='mood-select'><span onClick={() => setMood('bad')} role="img" aria-label="bad">😞</span></div>
        <div className='mood-select'><span onClick={() => setMood('awful')} role="img" aria-label="awful">😫</span></div>
      </div>
      <div className="mood-description">Mood: {mood}</div>
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
        <button className='triggerButton' onClick={handleAddTrigger}>Add Trigger</button>
      </div>
      <div className="situation-description">
        <textarea 
          value={description} 
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
