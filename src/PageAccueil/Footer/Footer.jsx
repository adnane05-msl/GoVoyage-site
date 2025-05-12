import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCalendarCheck, faCompass, faUser, faMessage  } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row contenue-footer '>

                    <div className='oragnisateurs col'>
                        <h3 className='text-center'>Organisé par</h3>
                        <ul className='list-emplacement oragnisateurs-list '> 
                            <li><FontAwesomeIcon icon={faUser} className='icon'/> Nadia El Amrani</li>
                            <li><FontAwesomeIcon icon={faUser} className='icon'/> Karim Bensalah</li>
                            <li><FontAwesomeIcon icon={faUser} className='icon'/> Inès Toumi</li>
                        </ul>
                    </div>

                    <div className='Navigation col'>
                        <h3 className='text-center'>Navigation</h3>
                            <ul className='list-emplacement Navigation-list '>
                                <li><a href="" className="d-flex align-items-center"><FontAwesomeIcon icon={faHouse}          className='icon'/>Accueil</a></li>
                                <li><a href="" className="d-flex align-items-center"><FontAwesomeIcon icon={faCalendarCheck}  className='icon'/>réservation</a></li>
                                <li><a href="" className="d-flex align-items-center"><FontAwesomeIcon icon={faCompass}        className='icon'/>À propos</a></li>
                                <li><a href="" className="d-flex align-items-center"><FontAwesomeIcon icon={faMessage}           className='icon'/>Contact</a></li>
                            
                            </ul>
                    </div>

                    <div className='resaux-sociaux col'>
                        <h3 className='text-center'>réseau sociaux</h3>
                        <ul className="list-emplacement  resaux-sociaux-list ">
                            <li><a href=""><FontAwesomeIcon icon={faFacebook} className='icon'/>Facebook</a></li>
                            <li><a href=""><FontAwesomeIcon icon={faInstagram} className='icon'/>Instagram</a></li>
                            <li><a href=""><FontAwesomeIcon icon={faLinkedin} className='icon'/>LinkedIn</a></li>
                            
                            
                        </ul>
                </div>

                </div>

                

                    <div className='copyright text-center'>
                        <p>&copy; 2025 GoVoyage. Tous droits réservés.</p>
                    </div>
                

            </div>
        </div>
    )
}

export default Footer


