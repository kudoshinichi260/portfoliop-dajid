import React, {useState,useEffect} from 'react'
import './Education.css'
import StarBorder from '../Reactbits/StarBorder/StarBorder'
import GradientText from '../Reactbits/GradientText/GradientText'

function EduInfor() {
    const [theme, setTheme] = useState(document.body.getAttribute("data-theme") || "light");

    useEffect(() => {
        const observer = new MutationObserver(() => {
        setTheme(document.body.getAttribute("data-theme"));
        });

            observer.observe(document.body, { attributes: true, attributeFilter: ["data-theme"] });

            return () => observer.disconnect();
        }, []);

        const color = theme === "dark" ? "linear-gradient(to bottom, #060606, #111)" : "linear-gradient(to bottom, #ffffff, #f0f0f0)";
    return (    
        <div className="educinfo__container container grid">
            <div className="eduinfo__content ">
                <h4 className="info__content-subtitle"> School name </h4>
                <div className='info-school'>
                    Sai Gon University
                </div>
            </div>
            <div className="eduinfo__content ">
                <h4 className="info__content-subtitle"> Major </h4>
                <div  className='info-major'>
                    Software Engineering
                </div>
            </div>
            <StarBorder
                as='div'
                className="custom-class"
                color="var(--pattern-color)"
                backgroundcolor={color}
                speed="4s">
                <div className='info__content-subtitle'>
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class">
                        Scholarship
                    </GradientText>
                    <div>+3 <i class="fa-solid fa-award"></i></div> 
                </div>
            </StarBorder>
            <StarBorder
                as='div'
                className="custom-class"
                color="var(--pattern-color)"
                backgroundcolor={color}
                speed="4s">
                <div className='info__content-subtitle'>
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class">
                        Scientific Research (2024)  
                    </GradientText>
                </div>
            </StarBorder>
        </div>
    )
}

export default EduInfor
