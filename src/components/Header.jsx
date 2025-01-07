import React, { useContext } from 'react';
import Greeting from './Greeting';
import SocialLinks from './SocialLinks';
import { LanguageContext } from '../App';

const Header = ({ toggleLanguage }) => {
  const language = useContext(LanguageContext);

  return (
    <nav className="header-nav sticky-nav" aria-label="Main site navigation">
      <div className="header-left">
        <Greeting />
      </div>
      <div className="header-right">
        <SocialLinks />
        <button className="language-toggle" onClick={toggleLanguage}>
          {language === 'en' ? 'Español' : 'English'}
        </button>
      </div>
    </nav>
  );
};

export default Header;
