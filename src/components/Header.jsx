import React from 'react';
import Greeting from './Greeting';
import SocialLinks from './SocialLinks';

const Header = () => {
  return (
    <nav className="header-nav" aria-label="Main site navigation">
      <Greeting />
      <SocialLinks />
    </nav>
  );
};

export default Header;
