import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Video from '../../assets/Design sans titre.mp4'

function Header() {
    return (
        <div className='Header'>
            <div className="video-container">
                <video className="video" autoPlay muted loop replay>
                    <source src={Video} type="video/mp4" />
                </video>
                
                <div className='solgan'>
                    <h1>" Bienvenue sur  <span>GoVoyage</span> "</h1>
                    <br />
                    <p>- Réservez votre prochain voyage en quelques clics -</p>

                    <div className='button'>
                        <Link to='/Reservation'><button className='btn btn-outline-light btn-lg'>Réservation</button></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header
