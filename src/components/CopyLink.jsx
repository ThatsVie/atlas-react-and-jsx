import React from 'react';
import copyIcon from '../assets/copy.svg';

const CopyLink = ({ link }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard!');
  };

  return (
    <img
      src={copyIcon}
      alt="Copy link icon"
      className="copy"
      onClick={handleCopy}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default CopyLink;
