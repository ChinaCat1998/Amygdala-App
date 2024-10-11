import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <nav className='updated-nav-tk'>
      <ul>
        <li>
          <Link to='/JournalPage'>
          </Link>
        </li>
        <li>
          <Link to='/CalendarPage'>
          </Link>
        </li>
        <li>
          <Link to='/TipsPage'>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;