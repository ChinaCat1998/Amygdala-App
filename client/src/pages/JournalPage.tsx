/* import React from 'react'; */
import JournalEntry from '../components/JournalEntry';
import NavMenu from '../components/Nav';

const JournalPage = () => {
  return (
    <div className="App">
      <NavMenu />
      <JournalEntry />
    </div>
  );
};

export default JournalPage;