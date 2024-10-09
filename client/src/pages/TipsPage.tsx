import React from 'react';
import MentalHealthTips from '../components/Tips';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const TipsPage = () => {
  return (
    <div className="App">
      <Nav />
      <MentalHealthTips />
      <Footer />
    </div>
  );
};

export default TipsPage;
