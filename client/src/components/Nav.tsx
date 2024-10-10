import { Link } from 'react-router-dom'

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/Home'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/testpage'>
            <button onClick={() => alert('Journal Entry clicked!')}>Journal Entry</button>
          </Link>
        </li>
        <li>
          <button onClick={() => alert('Calendar clicked!')}>Calendar</button>
        </li>
        <li>
          <button onClick={() => alert('Healthy Tips clicked!')}>Healthy Tips</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;