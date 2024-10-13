import '../App.css';
import Header from '../components/Header';
import Footer from "../components/Footer";
// import Nav from '../components/Nav';
import Nav2 from '../components/Nav2';
import Calendar from '../components/Calendar';


function CalendarPage () {
    return (
        <div className="App">
            <Header />
            <Nav2 />
            <Calendar />
            <Footer />
        </div>
    )
}

export default CalendarPage;