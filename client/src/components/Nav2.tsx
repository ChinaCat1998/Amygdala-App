import { Link, useLocation } from 'react-router-dom';

const NavMenu = () => {
  const currentPage = useLocation().pathname;
  return (
    <nav className='updated-nav-tk'>
      <ul>
        <li>
          <Link to='/JournalPage' className={currentPage === '/JournalPage' ? 'nav-link active' : 'nav-link'}>Journal
          </Link>
        </li>
        <li>
          <Link to='/CalendarPage' className={currentPage === '/CalendarPage' ? 'nav-link active' : 'nav-link'}>Calendar
          </Link>
        </li>
        <li>
          <Link to='/TipsPage' className={currentPage === '/TipsPage' ? 'nav-link active' : 'nav-link'}>Tips
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;