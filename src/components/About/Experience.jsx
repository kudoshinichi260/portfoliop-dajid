import React, { useState, useEffect } from 'react';
import CV from '../../assets/file/NHGD_CV.pdf';

const slides = [
  {
    time: 'March 2024 - May 2024',
    company: 'Cybersoft Academy - Wordpress Internship',
    description:
        'Understanding WordPress and the Eduma theme. Develop and maintain responsive, user-friendly, and visually'
    +'appealing websites. Collaborate with cross-functional teams to optimize website performance, user experience,'
    +'and SEO.',
  },
  {
    time: 'Jan 2024 - Feb 2024',
    company: 'Mini Project - ReactJS',
    description:
      'Built a portfolio website using ReactJS and CSS Modules...',
  },
];

function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateBox, setAnimate] = useState(false);

  const goToSlide = (index) => {
    setAnimate(false); // Reset animation
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimate(true); // Trigger animation
    }, 50); // Delay để reset animation
  };

  useEffect(() => {
    setAnimate(true); // Initial load
  }, []);

  return (
    <div className="experience__container">
      <h3 className="experience__title">Experience</h3>

      <div className={`experience__box ${animateBox ? 'fade-box' : ''}`}>
        <div className="experience__box-item">
          <div className="exp-time">{slides[currentIndex].time}</div>
          <h4 className="exp-company">{slides[currentIndex].company}</h4>
          <p className="exp-description">{slides[currentIndex].description}</p>
        </div>
      </div>

      <div className="slider__dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>

      <div className="about__button">
        <a download href={CV} className="button button-flex">
          Download CV <i className="fa-solid fa-file-pdf"></i>
        </a>
      </div>
    </div>
  );
}

export default Experience;
