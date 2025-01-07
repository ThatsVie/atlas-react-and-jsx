import React, { useContext } from 'react';
import ViePug from '../assets/ViePug.png';
import { LanguageContext } from '../App';

const AboutMe = () => {
  const language = useContext(LanguageContext);

  return (
    <div className="about-me">
      <img 
        src={ViePug} 
        alt={
          language === 'en'
            ? "A stylish pug wearing a tailored pink suit jacket, a light blue button-up shirt, and a navy pocket square."
            : "Un pug elegante con un saco rosado, una camisa azul clara y un pañuelo de bolsillo azul marino."
        }
      />
      <p>
        {language === 'en' ? (
          <>
            Hi, I’m Vie (/vi/). I’m in my 5th and final trimester at <strong>Atlas School</strong>, specializing in <strong>Full Stack Web Development</strong>. 
            My favorite technologies to work with include <strong>JavaScript</strong> and <strong>MongoDB</strong>. After graduation, I will gain a meaningful 
            role with a company that values inclusivity and innovation, while continuing to grow my passion projects: 
            <a href="https://whatdoyouknowaboutcovid19.com" target="_blank" rel="noopener noreferrer">
            What Do You Know About COVID-19?
            </a>
            , a platform for accessible pandemic related information, and
            <a href="https://whatdoyouknowaboutlove.com" target="_blank" rel="noopener noreferrer">
            What Do You Know About Love?
            </a>
            , an exploration of love in its many forms.
            <br />
            When I’m not coding, you’ll find me baking (my sweet potato bread and guava cake are favorites), engaging in a movement practice to stay centered, 
            and dreaming of becoming a great pug parent someday!
          </>
        ) : (
          <>
            Hola, soy Vie (/vi/). Estoy en mi quinto y último trimestre en <strong>Atlas School</strong>, especializándome en <strong>Full Stack Web Development</strong>. 
            Mis tecnologías favoritas incluyen <strong>JavaScript</strong> y <strong>MongoDB</strong>. Después de graduarme, encontraré empleo valioso en una empresa que valore 
            la inclusión y la innovación, mientras continuo creciendo mis proyectos personales: 
            <a href="https://whatdoyouknowaboutcovid19.com" target="_blank" rel="noopener noreferrer">
            What Do You Know About COVID-19?
            </a>
            , una plataforma para información accesible sobre la pandemia, y 
            <a href="https://whatdoyouknowaboutlove.com" target="_blank" rel="noopener noreferrer">
            What Do You Know About Love?
            </a>
            , una exploración del amor en todas sus formas.
            <br />
            Cuando no estoy codificando, me encontrarás horneando (mi pan de batata y bizcocho de guayaba son favoritos), participando en una práctica de movimiento para mantenerme centrado 
            y soñando con convertirme en un gran padre de Pug algún día.
          </>
        )}
      </p>
    </div>
  );
};

export default AboutMe;
