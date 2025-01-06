import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Section from './components/Section.jsx';

export const LanguageContext = React.createContext(); // global language context

function App() {
  const [language, setLanguage] = useState('en'); // app-wide language state

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  return (
    <LanguageContext.Provider value={language}>
      <div className="app">
        <Header />
        <button className="language-toggle" onClick={toggleLanguage}>
          {language === 'en' ? 'Switch Language to Spanish' : 'Cambia el idioma a Inglés'}
        </button>
        <Section title={language === 'en' ? "What is React?" : "¿Qué es React?"}>
          <p>
            {language === 'en'
              ? "React is like a capybara in the world of JavaScript frameworks—chill, adaptable, and gets along with everyone."
              : "React es como una capibara en el mundo de los frameworks de JavaScript: tranquilo, adaptable y se lleva bien con todos."}
          </p>
        </Section>
        <Section title={language === 'en' ? "Benefits of React" : "Beneficios de React"}>
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
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
