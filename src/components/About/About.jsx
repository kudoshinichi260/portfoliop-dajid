import React from 'react'
import Resume from "../About/Resume"

function About() {
    return (
        <section className="section about" id="about">
            <h2 className="section__title">
                About me
            </h2>
            <span className="section__subtitle"> My introduction </span>
            <div className="about__container container ">
                <p className="resume__description">
                            As a final-year student at Saigon University, I aim to become a software developer and, eventually, a software
                        architect. I am self-motivated, disciplined, and capable of working well both independently and in teams. With a
                        can-do attitude, I enjoy tackling new challenges and stepping out of my comfort zone. I look forward to applying
                        my skills and knowledge to contribute to the company's growth.
                </p>
                <Resume></Resume>
            </div>
        </section>  
    )
}

export default About
