import React from 'react';

const NavMenu = () => {
  return (
    <nav>
      <ul style={navStyle}>
        <li style={liStyle}>
          <button style={buttonStyle} onClick={() => alert('Journal Entry clicked!')}>Journal Entry</button>
        </li>
        <li style={liStyle}>
          <button style={buttonStyle} onClick={() => alert('Calendar clicked!')}>Calendar</button>
        </li>
        <li style={liStyle}>
          <button style={buttonStyle} onClick={() => alert('Healthy Tips clicked!')}>Healthy Tips</button>
        </li>
      </ul>
    </nav>
  );
};


const navStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  listStyleType: 'none',
  padding: '10px',
  backgroundColor: '#f0f0f0',
  borderRadius: '5px'
};

const liStyle = {
  margin: '0 10px'
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#4CAF50',
  color: 'white'
};

export default NavMenu;