import { Link } from 'react-router-dom';
// import blush from '../assets/icons/blush.png';
import calendar from '../assets/icons/calendar.png';
import tips from '../assets/icons/tips.png'


const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/Home'>
            <button className="homeButton">Home</button>
          </Link>
        </li>
        <li>
          <Link to='/testpage'>
            <button className="journalButton">Journal Entry</button>
          </Link>
        </li>
        <li>
          <Link to='/CalendarPage'>
            <button className="calendarButton">Calendar <img src={calendar} alt="calendar-img" className='calendar-img'/></button>
          </Link>
        </li>
        <li>
          <Link to='/TipsPage'>
            <button className="tipsButton">Healthy Tips <img src={tips} alt="tips-img" className='tips-img'/></button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;