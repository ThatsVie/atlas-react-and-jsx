import React from 'react';
import links from '../assets/links.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <ul className="footer-links">
        {links.map((link, index) => (
          <li key={index} className="footer-link-item">
            <a
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="footer-text">© {currentYear} Atlas School</p>
    </footer>
  );
};

export default Footer;
