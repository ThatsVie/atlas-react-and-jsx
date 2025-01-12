import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Section from './components/Section.jsx';
import HelpfulResource from './components/HelpfulResource.jsx';
import AboutMe from './components/AboutMe.jsx';
import Footer from './components/Footer.jsx';
import capybara from './assets/capybara.png';


export const LanguageContext = React.createContext();

function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const resources = [
    {
      link: 'https://react.dev/learn/tutorial-tic-tac-toe',
      label: language === 'en' ? 'React Official Tutorial (Tic-Tac-Toe)' : 'Tutorial oficial de React (Tic-Tac-Toe)',
    },
    {
      link: 'https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/',
      label: language === 'en' ? 'Full React Guide on freeCodeCamp' : 'Guía completa de React en freeCodeCamp',
    },
    {
      link: 'https://scrimba.com/learn-react-c0e',
      label: language === 'en' ? 'Scrimba’s React Course' : 'Curso interactivo de React en Scrimba',
    },
    {
      link: 'https://kentcdodds.com/blog/application-state-management-with-react',
      label: language === 'en' ? 'React State Management with Redux by Kent C. Dodds' : 'Gestión del estado en React con Redux',
    },
    {
      link: 'https://zustand.docs.pmnd.rs/getting-started/introduction',
      label: language === 'en'
        ? 'Introduction to Zustand - A lightweight state management library for React'
        : 'Introducción a Zustand: una biblioteca ligera para la gestión de estado en React',
    },
  ];

  return (
    <LanguageContext.Provider value={language}>
      <div className="app">
        <Header toggleLanguage={toggleLanguage} />
        <Section className="section" title={language === 'en' ? "What is React?" : "¿Qué es React?"}>
        <div className="react-section">
        <p>
          {language === 'en'
          ? "React is like a capybara in the world of JavaScript frameworks—chill, adaptable, and gets along with everyone."
          : "React es como una capibara en el mundo de los frameworks de JavaScript: tranquilo, adaptable y se lleva bien con todos."}
        </p>
        <img 
          src={capybara} 
          alt={language === 'en' 
          ? "A sleek and vibrant digital illustration of a capybara symbolizing React's adaptability." 
          : "Una ilustración digital elegante y vibrante de una capibara que simboliza la adaptabilidad de React."
            } 
          className="capybara-image"
          />
        </div>
        </Section>

        <Section className="section" title={language === 'en' ? "Benefits of React" : "Beneficios de React"}>
          <ul>
            {language === 'en' ? (
              <>
                <li>Reusable components save time and effort.</li>
                <li>Efficient rendering with the virtual DOM.</li>
                <li>A vast and active community of developers.</li>
                <li>Flexibility for solving real-world problems.</li>
                <li>Long-term support ensures reliability.</li>
              </>
            ) : (
              <>
                <li>Los componentes reutilizables ahorran tiempo y esfuerzo.</li>
                <li>Renderizado eficiente con el DOM virtual.</li>
                <li>Una comunidad vasta y activa de desarrolladores.</li>
                <li>Flexibilidad para resolver problemas reales.</li>
                <li>El soporte a largo plazo asegura confiabilidad.</li>
              </>
            )}
          </ul>
        </Section>
        <Section className="section" title={language === 'en' ? "Helpful Resources" : "Recursos útiles"}>
          {resources.map((resource, index) => (
            <HelpfulResource key={index} link={resource.link} label={resource.label} />
          ))}
        </Section>
        <AboutMe className="section" />
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
