import React from 'react';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a 
        href="https://www.linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Visit LinkedIn"
      >
        <img src={linkedin} alt="LinkedIn logo" />
      </a>
      <a 
        href="https://github.com/ThatsVie" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Visit my GitHub repository"
      >
        <img src={github} alt="GitHub logo" />
      </a>
    </div>
  );
};

export default SocialLinks;
