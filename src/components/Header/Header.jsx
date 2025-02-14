import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/img/logo_dajid.png"

const Header = () => {

    const [Toggle, showMenu] = useState(false);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo"> 
                    <img src={logo} alt="Icon" className="nav__logo-img " />
                </a>
        
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
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
            </nav>
        </header>
        
    )
}
export default Header