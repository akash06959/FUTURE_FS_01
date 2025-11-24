import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} M. Akash</p>
    </footer>
  );
};

export default Footer;
