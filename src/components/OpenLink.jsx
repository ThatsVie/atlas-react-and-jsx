import React from 'react';
import openIcon from '../assets/open.svg';

const OpenLink = ({ link }) => {
  const handleOpen = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <img
      src={openIcon}
      alt="Open link icon"
      className="open-link"
      onClick={handleOpen}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default OpenLink;
