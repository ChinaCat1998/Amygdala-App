import '../App.css';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Calendar from '../components/Calendar';


function CalendarPage () {
    return (
        <div className="App">
            <Nav />
            <Calendar />
            <Footer />
        </div>
    )
}

export default CalendarPage;