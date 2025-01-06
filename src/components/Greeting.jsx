import React, { useContext } from 'react';
import day from '../assets/day.svg';
import evening from '../assets/evening.svg';
import night from '../assets/night.svg';
import { LanguageContext } from '../App';

const Greeting = () => {
  const language = useContext(LanguageContext); // app-wide language state
  const now = new Date();
  const hours = now.getHours();

  const getGreeting = () => {
    if (hours >= 6 && hours < 12) {
      return {
        message: language === 'en' ? 'Good morning!' : '¡Buenos días!',
        image: day,
        alt: language === 'en' ? 'Yellow sun representing the morning' : 'Sol amarillo que representa la mañana',
      };
    } else if (hours >= 12 && hours < 17) {
      return {
        message: language === 'en' ? 'Good afternoon!' : '¡Buenas tardes!',
        image: day,
        alt: language === 'en' ? 'Yellow sun representing the afternoon' : 'Sol amarillo que representa la tarde',
      };
    } else if (hours >= 17 && hours < 21) {
      return {
        message: language === 'en' ? 'Good evening!' : '¡Buenas noches!',
        image: evening,
        alt: language === 'en' ? 'Orange sun representing the evening' : 'Sol anaranjado que representa la tarde',
      };
    } else {
      return {
        message: language === 'en' ? 'Good night!' : '¡Buenas noches!',
        image: night,
        alt: language === 'en' ? 'Blue moon representing the night' : 'Luna azul que representa la noche',
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
    </div>
  );
};

export default Greeting;
