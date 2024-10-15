import Header from '../components/Header';
import Nav2 from '../components/Nav2';
import Footer from '../components/Footer';
import CreateJournalEntry from '../components/CreateJournalEntry';

const CreateJournalEntryPage = () => {
    return (
        <div className="App">
            <Header />
            <Nav2 />
            <CreateJournalEntry />
            <Footer />
        </div>
    );
};

export default CreateJournalEntryPage;