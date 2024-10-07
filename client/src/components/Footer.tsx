import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>Call or text <strong>988</strong> or chat <a href="https://988lifeline.org" target="_blank" rel="noopener noreferrer">988lifeline.org</a></p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#f0f0f0',
  textAlign: 'center',
  padding: '10px',
  borderTop: '1px solid #ccc',
  position: 'fixed',
  bottom: '0',
  width: '100%'
};

export default Footer;