import React from 'react'
import './Skill.css'
import Chart from './Chart'
import Technical from './Technical'
import IconSlider from './IconSlider'

const color = '#33ffff'
const chartsData = [
    { value: 50, color: color, size: 100 , name: "Frontend"},
    { value: 75, color: color, size: 100 , name: "Backend" },
    { value: 50, color: color, size: 100 , name: "DevOps"},
    { value: 50, color: color, size: 100 , name: "Design other" },
  ];

function Skill() {
    return (
        <section className="section skills" id="skills">
            <h2 className="section__title">
                Skills 
                
            </h2>
            <div className="skill__container container">
                <Chart charts= {chartsData}>

                </Chart>
                <span className="section__subtitle">
                    My Technical
                </span>
                <IconSlider/>
                <Technical></Technical>
            </div>
        </section>  
    )
}

export default Skill
