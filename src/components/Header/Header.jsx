import React, { useState,useEffect } from "react";
import "./Header.css";
import logoLight from "../../assets/img/logo_light.png";
import logoDark from "../../assets/img/logo_dark.png";
import LightMode from '../LightMode/lightmode';

const Header = () => {

    const [Toggle, showMenu] = useState(false);
    const [theme, setTheme] = useState(document.body.getAttribute("data-theme") || "light");

    useEffect(() => {
        const observer = new MutationObserver(() => {
        setTheme(document.body.getAttribute("data-theme") || "light");
        });
        observer.observe(document.body, { attributes: true, attributeFilter: ["data-theme"] });
        return () => observer.disconnect();
    }, []);
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo"> 
                    <img src={theme === "dark" ? logoDark : logoLight}
                        alt="Icon" className="nav__logo-img " />
                </a>
        
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link ">
                                <i className="fa-solid fa-house nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="fa-solid fa-address-card nav__icon"></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="fa-solid fa-file-lines nav__icon"></i>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="fa-solid fa-address-book nav__icon" ></i>Contact
                            </a>
                        </li>
                       
                    </ul>
                    <i className="fa-solid fa-xmark nav__close" onClick={() => showMenu(false)}></i>
                </div>
                <div className="nav__toggle" onClick={()=> showMenu(!Toggle) }>
                    <i className="fa-solid fa-bars nav__icon"></i>    
                </div>
                <LightMode/>
            </nav>
            
        </header>
        
    )
}
export default Header