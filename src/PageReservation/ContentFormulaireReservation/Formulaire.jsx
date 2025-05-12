import '../ContentFormulaireReservation/Formulaire.css'
import BgConnexion from '../../assets/Connexion/BgConnexion.mp4'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';


function Formulaire() {

    
    const navigate = useNavigate();

    function handleReservation(e){
        e.preventDefault();
        Swal.fire({
            title: 'Réservation réussie!',
            text: 'Votre réservation a été enregistrée avec succès.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            navigate('/reservation'); 
        });
    };

    function handleAnnuler(e) {
        e.preventDefault();
        navigate('/reservation'); 
    }




    return (
            <div className='formulaire-Reservation'>
                <video className='video-inscrire' autoPlay muted loop replay>
                    <source src={BgConnexion} type="video/mp4"/>
                </video>

                <form className='formulaire' onSubmit={handleReservation}>
                    <h3>Réservez votre aventure</h3>

                    <div className='input'>
                        <label>Nom complet</label>
                        <input type="text" required/>
                    </div>

                    <div className='input'>
                        <label>Compte bancaire</label>
                        <input type="number" required/>
                    </div>
                    <div className='input'>
                        <label>CIN</label>
                        <input type="text" required/>
                    </div>
                    
                    <div className='button'>
                        <button type="button" className='annuler'onClick={handleAnnuler}>Annuler</button>
                        <button type="submit" className='reserver' >Réserver</button>
                    </div>
                </form>
        </div>
    )
}

export default Formulaire