import { Link } from 'react-router-dom';
import blush from '../assets/icons/blush.png';
import calendar from '../assets/icons/calendar.png';
import tips from '../assets/icons/tips.png';
import home from '../assets/icons/home.png';


const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/Home'>
            <button className="homeButton">Home <img src={home} alt="home-img" className='nav-icon'/></button>
          </Link>
        </li>
        <li>
          <Link to='/JournalPage'>
            <button className="journalButton">Journal Entry <img src={blush} alt="journal-img" className='nav-icon'/></button>
          </Link>
        </li>
        <li>
          <Link to='/CalendarPage'>
            <button className="calendarButton">Calendar <img src={calendar} alt="calendar-img" className='nav-icon'/></button>
          </Link>
          <a href="../SignUpPage">SignUp</a>
        </li>
        <li>
          <Link to='/TipsPage'>
            <button className="tipsButton">Healthy Tips <img src={tips} alt="tips-img" className='nav-icon'/></button>
          </Link>
          <a href="../LoginPage">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;