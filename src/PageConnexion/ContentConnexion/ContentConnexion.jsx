import BgConnexion from '../../assets/Connexion/BgConnexion.mp4'
import './ContentConnexion.css'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


function ContentConnexion() {
        
    // Hook pour le mot de passe

    const [showPasswordInscri, setShowPasswordInscri] = useState(false);

    // Fonction pour afficher ou masquer le mot de passe
    
    function togglePasswordInscri (){
        setShowPasswordInscri(!showPasswordInscri);
    }
    
    // Hook pour la navigation
    
    const navigate = useNavigate();

    // Alert de connexion
    
    function handleConnexion (e) {
        e.preventDefault();
        Swal.fire({
            position: 'top',
            title: "Connexion réussie!",
            text: "Bienvenue de retour!",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            navigate('/'); 
        });
    }
        
    return (
        <div className='connexion'>
                <video className='video-connexion' autoPlay muted loop replay>
                    <source src={BgConnexion} type="video/mp4"/>
                </video>
                
                <div className='form-connexion'>
                    <h3>se connecter</h3>
                    <form action="" onSubmit={handleConnexion}>
                        <div className="input">
                            <input type="text" placeholder="Nom d'utilisateur" required/>
                        </div>

                        <div className="input password-field">
                            <input type={showPasswordInscri ? "text" :"password"} placeholder="Mot de passe" required />
                            <button type="button" className="toggle-password" onClick={togglePasswordInscri}>
                                {showPasswordInscri ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>}
                            </button>
                        </div>
                        
                        <div className='oublie'>
                            <a href="#">Mot de passe oublié ?</a>
                        </div>

                        
                        <button type="submit" className='btn-connexion'>se connecter</button>

                        <div className='inscrivez-link'>
                            <p>vous n'avez pas de compte ? <Link to='/Inscription'>inscrivez-vous</Link></p>
                        </div>
                    </form>
                    
                </div>
        </div>
    )
}

export default ContentConnexion
