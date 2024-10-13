import React, { useState } from 'react';


const JournalEntry = () => {
  const [mood, setMood] = useState('');
  const [triggers, setTriggers] = useState<string[]>([]);
  const [newTrigger, setNewTrigger] = useState<string>('');
  const [content, setDescription] = useState<string>('');
  const userId = 1;

  const handleAddTrigger = () => {
    if (newTrigger && !triggers.includes(newTrigger)) {
      setTriggers([...triggers, newTrigger]);
      setNewTrigger('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const journalData = {
    date: new Date().toDateString(),
    userId,
    mood,
    triggers,
    content
    };
    /* console.log('Journal Entry Data:', journalData); */
    // Here you can send the data to your server or handle it as needed
    try {
      const response = await fetch('/api/journal-entries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(journalData)
      });

      if (response.ok) {
        console.log('Journal entry created successfully');
        // Handle successful submission (e.g., clear the form, show a success message)
      } else {
        console.error('Failed to create journal entry');
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error creating journal entry:', error);
      // Handle network error (e.g., show an error message)
    }
  };

  

  return (
    <div className='journal-entry'>
    <form onSubmit={handleSubmit}>
      <h1 className='journal-calendar-text'>{new Date().toDateString()}</h1>
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
}

export default JournalEntry;
