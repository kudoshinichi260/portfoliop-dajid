import React from 'react'
import './About.css'
import Info from './Info.jsx'
import Experience from './Experience.jsx'
function Resume() {
    return (
        <div className="resume__container container">
            <div className="resume__box grid">
                <div className="resume__box-item">
                    <i class="fa-solid fa-code"></i>
                </div>
                <div className="resume__box-item">
                    <i class="fa-solid fa-music"></i>
                </div>  
                <div className="resume__box-item">
                    <i class="fa-solid fa-futbol"></i>
                </div>
                <div className="resume__box-item">
                    <i class="fa-solid fa-mug-saucer"></i>
                </div>
                <div className="resume__box-item">
                    <i class="fa-solid fa-book"></i>
                </div>
            </div>
            <div className="resume__content grid ">
                <Experience></Experience>
                <Info></Info> 
            </div>
        </div>
    )
}

export default Resume
