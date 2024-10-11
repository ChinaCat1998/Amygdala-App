import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <nav className='updated-nav-tk'>
      <ul>
        <li>
          <Link to='/JournalPage'>Journal
          </Link>
        </li>
        <li>
          <Link to='/CalendarPage'>Calendar
          </Link>
        </li>
        <li>
          <Link to='/TipsPage'>Tips
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;