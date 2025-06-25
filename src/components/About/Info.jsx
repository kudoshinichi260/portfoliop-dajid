import React from 'react'
import './About.css'
import vietnam from '../../assets/img/flag.png'
function Info() {
    return (
        <div className="info__container">
            <h3 className="info__title">
                Profile
            </h3>
            <div className="info__content ">
                <table className="info__table">
                    <tr>
                        <th>Fullname</th>
                        <td>Nguyen Hoang Gia Dai</td>
                    </tr>
                    <tr>
                        <th>Day of birth</th>
                        <td>20-05-2002</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>dainguyen205sgu@gmail.com</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>(+84) 357802648</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>District 8, Ho Chi Minh City</td>
                    </tr>
                </table>
                <div className="info__residence">
                    <i class="fa-solid fa-location-dot"></i> Vietnam <img src={vietnam} alt="" />
                </div>
            </div>
           
        </div>
    )
}

export default Info
