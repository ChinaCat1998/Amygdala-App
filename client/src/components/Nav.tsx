import { Link } from 'react-router-dom';
import blush from '../assets/icons/blush.png';
import calendar from '../assets/icons/calendar.png';
import tips from '../assets/icons/tips.png'


const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <button className="journalButton" onClick={() => alert('Journal Entry clicked!')}>Journal Entry <img src={blush} alt="blush-img" className='blush-img'/></button>
        </li>
        <li>
          <button className="calendarButton" onClick={() => alert('Calendar clicked!')}>Calendar <img src={calendar} alt="calendar-img" className='calendar-img'/></button>
        </li>
        <li>
          <button className="tipsButton" onClick={() => alert('Healthy Tips clicked!')}>Healthy Tips <img src={tips} alt="tips-img" className='tips-img'/></button>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;