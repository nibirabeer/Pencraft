// index.jsx

import React from 'react';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Join Us</a>
          <a href="#">Collaborate</a>
          <a href="#">Contact</a>
        </div>
        <div className="social-links">
          <a href="mailto:info@pencraft.com">Email</a>
          <a href="https://www.linkedin.com/company/pencraft" target="_blank" rel="noopener noreferrer">Linkedin</a>
          <p>&copy; 2024 PenCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
