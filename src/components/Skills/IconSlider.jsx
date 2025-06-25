import React from "react";
import "./Skill.css"; // Import file CSS

import javaIcon from "../../assets/img/icons/java.png"
import csharpIcon from "../../assets/img/icons/c-sharp.png"
import dotnetIcon from  "../../assets/img/icons/website.png"
import reactIcon from  "../../assets/img/icons/react.png"
import sqlIcon from  "../../assets/img/icons/sql-server.png"
import htmlIcon from  "../../assets/img/icons/html-5.png"
import cssIcon from  "../../assets/img/icons/css-3.png"
import jsIcon from  "../../assets/img/icons/java-script.png"
import figmaIcon from  "../../assets/img/icons/figma.png"
const icons = [
  javaIcon,csharpIcon,dotnetIcon,reactIcon,sqlIcon,htmlIcon,cssIcon,jsIcon,figmaIcon
  
];

export default function IconSlider() {
  return (
    <div className="slider-container">
      <div className="slider-track">
        {[...icons, ...icons].map((src, index) => (
          <img key={index} src={src} alt="icon" className={` icon-style`}></img>
        ))}
      </div>
    </div>
  );
}
