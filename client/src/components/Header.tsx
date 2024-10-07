import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <img src="your-logo-url-here" alt="Logo" style={logoStyle} />
      <h1>Welcome!!</h1>
      <p>We are happy to help you</p>
    </header>
  );
};

const headerStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f0f0f0'
};

const logoStyle = {
  width: '100px',
  height: '100px',
  marginBottom: '20px'
};

export default Header;