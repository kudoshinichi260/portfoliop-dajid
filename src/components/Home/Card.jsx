import React, { useState } from 'react'
import avatar from '../../assets/img/bg-card.png'
import logo from   '../../assets/img/logo_white.png'
import './Card.css';
function Card() {
    const [swapped,setSwapped] = useState(false);
    return (
        <div className="home__card swap-card" onClick={() => setSwapped(!swapped)}>
            <div className={`home__card-avt ${swapped ? 'swapped' : ' '} card-item`}>
                <img src={logo} alt="" />
            </div>
            <div className={`home__card-content ${swapped ? 'swapped' : ' '} card-item` }>
                <span className="card-major">Software Engineer</span>
                <div className="home__card-img">
                    <img src={avatar} alt="" />
                </div>
                <div className="card-infor">
                    <h4 className="card-name">Nguyen Hoang Gia Dai</h4>
                    <h5 className="card-dob">20-5-2002</h5> <b/>
                    <span className="card-gpa">GPA: 3.34/4.0 </span>
                    
                    <ul className="card-hashtag">
                        <li className="hashtag-item">
                            #Java
                        </li>
                        <li className="hashtag-item">
                            #WebDeveloper
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
