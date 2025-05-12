import { Link } from 'react-router-dom'
import './Erreur.css'

function Erreur() {
    return (
        <div className='erreur'>            
            <h1>Erreur 404</h1>
            <p>La page que vous recherchez n'existe pas.</p>
            <p>Veuillez vérifier l'URL ou retourner à la page d'accueil.</p>
            <Link to='/' className='lien'>Retourner à l'accueil</Link>
        </div>
    )
}

export default Erreur
