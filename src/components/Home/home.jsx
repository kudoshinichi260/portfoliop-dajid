import React from 'react';
import Card from './Card';
import './home.css';
import BlurText from "../Reactbits/BlurText/BlurText";
import GradientText from '../Reactbits/GradientText/GradientText'
function Home() {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
      };
      
    return (
       <section className="home section" id="home">
         <div className="home__container container grid">
            <div className="home__content  grid">
                <div className="home__data">
                    <h1 className="profile__title">
                        {/* Nguyen Hoang Gia Dai  <i class="fa-solid fa-laptop-code"></i> */}
                    <BlurText
                        text="Nguyen Hoang Gia Dai"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="text-2xl mb-8"
                    /> 
                    </h1>
                    <h3 className="profile__subtitle">
                        <GradientText
                            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                            animationSpeed={3}
                            showBorder={true}
                            className="custom-class"
                            >
                                Fullstack Developer
                            </GradientText>
                        </h3>
                    <p className="profile__description">
                    Hi, I’m a developer passionate about creating efficient and user-friendly applications. 
                    Always eager to learn and improve, I strive to build high-quality software solutions.
                    </p>
                    <ul className="profile__social">
                        <li className="social__item">
                            <a href="https://www.facebook.com/dajid195" className="social__link">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://www.instagram.com/xdajidx.cpp" className="social__link">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://www.linkedin.com/in/nhgdai" className="social__link">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://github.com/kudoshinichi260" className="social__link">
                                <i class="fa-brands fa-github"></i>
                            </a>
                        </li>
                    </ul>   
                </div>
                <div className="home__img">
                    <Card></Card>
                </div>
            </div>
        </div>
       </section>
    );
}

export default Home;
