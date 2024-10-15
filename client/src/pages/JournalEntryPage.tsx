import JournalEntryPage from '../components/JournalEntryPage';
import NavMenu from '../components/Nav';
import Header from '../components/Header';
import Nav2 from '../components/Nav2';
import Footer from '../components/Footer';

const CalendarDataPage = () => {
  return (
    <div className="App">
      <Header />
      <Nav2 />
      <JournalEntryPage />
      <Footer />
    </div>
  );
};

export default CalendarDataPage;