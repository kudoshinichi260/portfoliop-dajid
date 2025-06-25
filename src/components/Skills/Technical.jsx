import React from 'react'
import './Skill.css'
function Technical() {
    return (
        <div className="technical__container container grid">
            <div className="technical__content ">
                <h3 className="technical__title">Frontend Developer</h3>
                <ul className="technical__box grid">
                    <li className="technical__item">
                        <i class="fa-brands fa-react"></i> React JS   
                    </li>
                    <li className="technical__item">
                        <i class="fa-brands fa-html5"></i> HTML
                    </li>
                    <li className="technical__item">
                        <i class="fa-brands fa-css3-alt"></i> CSS
                    </li>
                    <li className="technical__item">
                        <i class="fa-brands fa-js"></i> Javascript
                    </li>
                </ul>
            </div>
            <div className="technical__content backend">
                <h3 className="technical__title">Backend Developer</h3>

                <ul className="technical__box grid">
                    <li className="technical__item">
                        <i class="fa-brands fa-java"></i> Java
                    </li>
                    <li className="technical__item">
                        <i class="fa-brands fa-java"></i> C#
                    </li>
                    <li className="technical__item">
                        <i class="fa-solid fa-database"></i>  My SQL
                    </li>
                    <li className="technical__item">
                        <i class="fa-solid fa-database"></i> PostgreSQL
                    </li>
                </ul>
            </div>
            <div className="technical__content other">
                <h3 className="technical__title">Other</h3>

                <ul className="technical__box grid">
                    <li className="technical__item">
                        <i class="fa-brands fa-java"></i> Figma
                    </li>
                    <li className="technical__item">
                        <i class="fa-brands fa-java"></i> Draw.io
                    </li>
                    <li className="technical__item">
                        <i class="fa-solid fa-database"></i> Docker
                    </li>
                    <li className="technical__item">
                        <i class="fa-solid fa-database"></i> Github
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Technical
