import React, {useState} from 'react'
import './Project.css'
function ProjectItem({projects}) {
    const [expandedItems, setExpandedItems] = useState({});

    const toggleExpand = (index) => {
      setExpandedItems((prev) => ({
        ...prev,
        [index]: !prev[index], // toggle riêng từng item
      }));
    };
    return (
        <div className="project__container container grid">
            {projects.map((projects,index) => (
            <div className="project__item " key={index}>
                <div className="project__image">
                    
                </div>
                <div
                    className={`content ${expandedItems[index] ? 'expanded' : ''}`}
                    onClick={() => toggleExpand(index)}
                >
                    <div className="project__title grid">
                        <h3 className="project__item-name">
                            {projects.name}
                        </h3>
                        <div className="project__item-timework">
                            {projects.timework}
                        </div>
                    </div>
                    <p className="project__item-description">
                    This thesis explores the capabilities of .NET MAUI and its application in developing a personal
financial management system. The study focuses on leveraging .NET MAUI’s crossplatform capabilities to create a
user-friendly and efficient solution for managing personal finances

                        {projects.description}
                    </p>
                    <div className="project__item-tech">
                        <b>Technical:</b> {projects.tech}
                        
                    </div>
                   <div className="project__team grid">
                        <div className="project__item-teamsize ">
                            <b>Teamsize:</b>   {projects.size}
                        </div>
                        <div className="project__item-resposibility">
                            <b>Resposibility:</b> {projects.respon}
                        </div>
                   </div>
                </div>
            </div> 
            ))}
        </div>
    )
}

export default ProjectItem
