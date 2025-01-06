import React, { useState } from 'react';
import day from '../assets/day.svg';
import evening from '../assets/evening.svg';
import night from '../assets/night.svg';

const Greeting = () => {
  const now = new Date();
  const hours = now.getHours();
  const [language, setLanguage] = useState('en'); // State for language toggle

  const getGreeting = () => {
    if (hours >= 6 && hours < 12) {
      return {
        message: language === 'en' ? 'Good morning!' : '¡Buenos días!',
        image: day,
        alt: language === 'en' ? 'Sun representing the morning' : 'Sol que representa la mañana',
      };
    } else if (hours >= 12 && hours < 17) {
      return {
        message: language === 'en' ? 'Good afternoon!' : '¡Buenas tardes!',
        image: day,
        alt: language === 'en' ? 'Sun representing the afternoon' : 'Sol que representa la tarde',
      };
    } else if (hours >= 17 && hours < 21) {
      return {
        message: language === 'en' ? 'Good evening!' : '¡Buenas noches!',
        image: evening,
        alt: language === 'en' ? 'Orange sun representing the evening' : 'Sol naranja que representa la tarde',
      };
    } else {
      return {
        message: language === 'en' ? 'Good night!' : '¡Buenas noches!',
        image: night,
        alt: language === 'en' ? 'Moon representing the night' : 'Luna que representa la noche',
      };
    }
  };

  const { message, image, alt } = getGreeting();

  return (
    <div className="greeting-container">
      <h1 className="greeting">
        <img src={image} alt={alt} />
        {message}
      </h1>
      <button
        onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
        className="toggle-button"
      >
        {language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
      </button>
    </div>
  );  
};

export default Greeting;
