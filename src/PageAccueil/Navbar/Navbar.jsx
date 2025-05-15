import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const [open, setOpen] = useState(false);
    function handleOpen(){
        setOpen(!open);
    }

    const location = useLocation();
    
    function isActive(path) {
        return location.pathname === path;
    }

    return (
        <div className='Navbar navbar navbar-expand-lg fixed-top'>
            <div className='container-fluid'>
                <div className='logo'>
                    <span>Go</span>Voyage
                </div>

                <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded={open ? "true" : "false"}
                    aria-label="Toggle navigation"
                    onClick={handleOpen}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse${open ? " show" : ""}`} id="navbarNavAltMarkup">
                    <div className="menu navbar-nav ms-auto">
                        <Link to='/' className={`nav-link ${isActive('/') ? 'active' : ''}`}>accueil</Link>
                        <Link to='/Reservation' className={`nav-link ${isActive('/Reservation') ? 'active' : ''}`}>Réservation</Link>
                        <Link to='/Apropos' className={`nav-link ${isActive('/Apropos') ? 'active' : ''}`}>À propos</Link>
                        <Link to='/Contact' className={`nav-link ${isActive('/Contact') ? 'active' : ''}`}>Contact</Link>
                        <Link to='/Connexion' className={`nav-link connexion ${isActive('/Connexion') ? 'active' : ''}`}>Se connecter</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;