

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => alert('Journal Entry clicked!')}>Journal Entry</button>
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