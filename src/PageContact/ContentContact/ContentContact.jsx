import React from 'react'
import './ContentContact.css'
import BgConnexion from '../../assets/Connexion/BgConnexion.mp4'
import Swal from 'sweetalert2'
import {  useNavigate } from 'react-router-dom'

function ContentContact() {

        const navigate = useNavigate();

        // Alert de succès après l'envoi du formulaire

        function handleContact (e) {
            e.preventDefault();
            Swal.fire({
                position: 'top',
                title: "Message envoyé avec succès!",
                icon: "success",
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                navigate('/') ;
            });
        }

    return (
        <div className='contact'>
            <video className='video-contact' autoPlay muted loop>
                <source src={BgConnexion} type="video/mp4" />
            </video>
            
            <div className='form-contact'>
                <h3>Contact</h3>
                <form action="" onSubmit={handleContact}>
                    <div className="left-right">
                        <div className="left">
                            <label htmlFor="fullName">Nom Complet</label>
                            <input type="text" id="fullName" required/>
                            <label htmlFor="subject">sujet</label>
                            <input type="text" id="subject" />
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" required/>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" cols="30" rows="10" required></textarea>
                        </div>
                        <div className="right">
                            <label htmlFor="phone">Numéro</label>
                            <input type="text" id="phone" />
                            <label htmlFor="date">Date</label>
                            <input type="date" id="date" />
                            <label htmlFor="address">Adresse</label>
                            <input type="text" id="address" />
                            <label htmlFor="map">Localisation</label>
                            <div className="map-container">
                                <iframe
                                    title="Google Maps Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.1234567890123!2d-7.5499344!3d33.567083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda633261bbe100f%3A0xe48b03dd8c6794a0!2sFaculty%20of%20Sciences%20Ben%20M'Sick%20(FSBM-UH2C)!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </div>
    )
}

export default ContentContact
