import React from "react";
import "./LightMode.css";
const lightmode = () => {
    
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
    };
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
    };
    const toggleTheme = (e) => {
        if(e.target.checked) setDarkMode();
        else setLightMode();
        
    }
    return (
        <div>
            <label className="switch">
                <input type="checkbox" 
                        onChange={toggleTheme}/>
                <span className="slider round"> </span>
            </label>
        </div>
        
    )
}
export default lightmode