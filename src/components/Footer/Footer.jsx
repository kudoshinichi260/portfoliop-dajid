import React, { useState,useEffect } from "react";
import logoLight from "../../assets/img/logo_light.png";
import logoDark from "../../assets/img/logo_dark.png";
import './Footer.css'
// import Hyperspeed from '../Reactbits/Hyperspeed/Hyperspeed'
function Footer() {
    const [theme, setTheme] = useState(document.body.getAttribute("data-theme") || "light");
    
        useEffect(() => {
            const observer = new MutationObserver(() => {
            setTheme(document.body.getAttribute("data-theme") || "light");
            });
            observer.observe(document.body, { attributes: true, attributeFilter: ["data-theme"] });
            return () => observer.disconnect();
        }, []);
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__icon">
                    <img src={theme === "dark" ? logoDark : logoLight}
                            alt="Icon" className="nav__logo-img " />
                </div>
                
                <div className="footer__social">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="https://www.facebook.com/dajid195" >
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="https://www.instagram.com/xdajidx.cpp" >
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="https://www.linkedin.com/in/nhgdai" >
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="https://github.com/kudoshinichi260" >
                                <i class="fa-brands fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__nav">
                    <ul className="nav__list">
                        <li className="nav-item">
                            Home
                        </li>
                        <li className="nav-item">
                            About
                        </li>
                        <li className="nav-item">
                            Skills
                        </li>
                    </ul>
                </div>  
                
            </div>
            {/* <Hyperspeed
                effectOptions={{
                    onSpeedUp: () => { },
                    onSlowDown: () => { },
                    distortion: 'turbulentDistortion',
                    length: 400,
                    roadWidth: 10,
                    islandWidth: 2,
                    lanesPerRoad: 4,
                    fov: 90,
                    fovSpeedUp: 150,
                    speedUp: 2,
                    carLightsFade: 0.4,
                    totalSideLightSticks: 20,
                    lightPairsPerRoadWay: 40,
                    shoulderLinesWidthPercentage: 0.05,
                    brokenLinesWidthPercentage: 0.1,
                    brokenLinesLengthPercentage: 0.5,
                    lightStickWidth: [0.12, 0.5],
                    lightStickHeight: [1.3, 1.7],
                    movingAwaySpeed: [60, 80],
                    movingCloserSpeed: [-120, -160],
                    carLightsLength: [400 * 0.03, 400 * 0.2],
                    carLightsRadius: [0.05, 0.14],
                    carWidthPercentage: [0.3, 0.5],
                    carShiftX: [-0.8, 0.8],
                    carFloorSeparation: [0, 5],
                    colors: {
                    roadColor: 0x080808,
                    islandColor: 0x0a0a0a,
                    background: 0x000000,
                    shoulderLines: 0xFFFFFF,
                    brokenLines: 0xFFFFFF,
                    leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                    rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                    sticks: 0x03B3C3,
                    }
                }}
            /> */}
        </footer>
    )
}

export default Footer