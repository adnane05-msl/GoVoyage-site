import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='Navbar navbar-expand-lg navbar fixed-top'>
            <nav className='container-fluid '>

                <div className='logo'>
                    <span>Go</span>Voyage
                </div>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="menu navbar-nav ms-auto">
                        <Link to='/'            className="nav-link">accueil</Link>
                        <Link to='/Reservation' className="nav-link">Réservation</Link>
                        <Link to='/Apropos'     className="nav-link">À propos</Link>
                        <Link to='/Contact'     className="nav-link">Contact</Link>
                        <Link to='/Connexion'   className="nav-link connexion">Connexion</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
