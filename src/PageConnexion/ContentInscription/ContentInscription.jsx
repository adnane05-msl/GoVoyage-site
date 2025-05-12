import { useState } from 'react'
import BgConnexion from '../../assets/Connexion/BgConnexion.mp4'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import '../ContentInscription/ContentInscription.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

function ContentInscription() {

    // Hook pour le mot de passe

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Fonction pour afficher ou masquer le mot de passe
    
    function togglePassword(){
        setShowPassword(!showPassword);
    }
    function togglePasswordConfirm(){
        setShowConfirmPassword(!showConfirmPassword)
    }


    // Hook pour le mot de passe et la confirmation du mot de passe

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    // Fonction pour vérifier le mot de passe et la confirmation du mot de passe

    function verificationPassword(e){
        setPassword(e.target.value);
    }
    function verificationConfirmPassword(e){
        setConfirmPassword(e.target.value);
    }

    // Hook pour la navigation

    const navigate = useNavigate();

    // Alert d'inscription

    function handleInscription(e){
        e.preventDefault();
    
        if (password !== confirmPassword) {
            Swal.fire({
                position: 'top',
                title: "Erreur",
                text: "Les mots de passe ne correspondent pas",
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }
    
        Swal.fire({
            position: 'top',
            title: "Compte créé avec succès",
            text: "Bienvenue chez GoVoyage",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
        }).then(() => {
            navigate('/');
        });
    };

    return (
        <div>
            <div className='inscrire'>
                    <video className='video-inscrire' autoPlay muted loop replay>
                        <source src={BgConnexion} type="video/mp4"/>
                    </video>
                    
                    <div className='form-inscrire'>
                        <h3>s'inscrire</h3>
                        <form action="" onSubmit={handleInscription}>
                            <div className='input'>
                                <input type="email" placeholder='e-mail' required/>
                            </div>
                            <div className="input">
                                <input type="text" placeholder="Nom d'utilisateur" required/>
                            </div>
                            <div className="input password-field-inscri">
                                <input type={showPassword ? "text" : "password" } placeholder="Mot de passe" required value={password} onChange={verificationPassword}/>
                                <button type="button" className="toggle-password-inscri" onClick={togglePassword}>
                                    {showPassword ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>}
                                </button>
                            </div>

                            <div className="input password-field-inscri">
                                <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirmer mot de passe" required value={confirmPassword} onChange={verificationConfirmPassword}/>
                                <button type="button" className="toggle-password-inscri" onClick={togglePasswordConfirm}>
                                    {showConfirmPassword ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>}
                                </button>
                            </div>
                            
                            <button type="submit" className='btn-inscrire'>s'inscrire</button>
    
                            <div className='connecter-link'>
                                <p>Vous avez déjà un compte ? <Link to='/connexion'>connectez-vous</Link></p>
                            </div>
                        </form>
                        
                    </div>
            </div>
        </div>
    )
}

export default ContentInscription
