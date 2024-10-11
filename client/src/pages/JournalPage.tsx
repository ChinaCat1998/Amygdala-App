/* import React from 'react'; */
import Header from '../components/Header';
import JournalEntry from '../components/JournalEntry';
// import Nav from '../components/Nav';
import Nav2 from '../components/Nav2';

const JournalPage = () => {
  return (
    <div className="App">
      <Header />
      <Nav2 />
      <JournalEntry />
    </div>
  );
};

export default JournalPage;