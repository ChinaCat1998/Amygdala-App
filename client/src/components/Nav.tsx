import { Link } from 'react-router-dom';

const NavMenu = () => {
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true'; // Check local storage for login status

  const handleLogout = () => {
    localStorage.removeItem('loggedIn'); // Remove login status from local storage
    alert('Logged out successfully!');
    window.location.href = '/'; // Redirect to home page after logout
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Journal Entry</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/healthy-tips">Healthy Tips</Link>
        </li>
        {!isLoggedIn ? (
          <>
            <li>
              <Link to="../SignUpPage">SignUp</Link>
            </li>
            <li>
              <Link to="./LoginPage">Login</Link>
            </li>
          </>
        ) : (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavMenu;
