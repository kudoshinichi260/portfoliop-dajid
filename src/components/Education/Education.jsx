import React from 'react'
import EduInfor from './EduInfor'
import TranscriptChart from './TranscriptChart'
import CustomActiveShapePieChart from "./CustomActiveShapePieChart";
import './Education.css'


function Education() {
    return (
        <section className="education section" id="education">
            <h2 className="section__title">Education</h2>
            <span className="section__subtitle">
                My Achievement
            </span>
            <div className="education__container container grid">  
                <div className="education__content-left">
                    <EduInfor></EduInfor>
                </div>
                <div className="education__transcript grid">
                    <div className="education__content-right grid">
                        <CustomActiveShapePieChart label="Toeic" value={470} defaultValue={900} />
                        <CustomActiveShapePieChart label="GPA" value={3.34} defaultValue={4.0} />
                    </div>
                    <TranscriptChart></TranscriptChart>
                    
                </div>
            </div>
        </section>
    )
}

export default Education