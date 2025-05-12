import {Link} from 'react-router-dom'
import '../ContentReservation/CardReservation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faHotel, faCalendarAlt, faUsers, faClock, faPlane,faSackDollar } from '@fortawesome/free-solid-svg-icons'
function CardReservation(props) {
    return (
        <div className='card-reservation'>
            <img src={props.img} alt={props.lieu} className='image-reservation'/>

            <div className='infos-reservation'>

                <div className='infos'>
                    <div>
                        <p className='titre-reservation'><FontAwesomeIcon icon={faLocationDot} className='icon'/><span>Lieu:</span> {props.lieu}</p>
                        <p className='date-reservation'><FontAwesomeIcon icon={faCalendarAlt} className='icon'/><span>Date :</span> {props.date} <strong>à</strong> {props.heure}</p>
                        <p className='nombre-personnes'><FontAwesomeIcon icon={faUsers} className='icon'/><span>Nombre de personnes :</span> {props.nombrePersonnes}</p>
                    </div>
                    <div>
                        <p className='nbr-jours'><FontAwesomeIcon icon={faClock} className='icon'/><span>Nombre de jours :</span> {props.nbrJours}</p>
                        <p className='transport'><FontAwesomeIcon icon={faPlane} className='icon'/><span>Transport :</span> {props.Transport}</p>
                        <p className='hotel'><FontAwesomeIcon icon={faHotel} className='icon'/><span>Hôtel :</span> {props.Hotel}</p>
                    </div>    
                </div>

                <p className='activites'><FontAwesomeIcon icon={faCalendarAlt} className='icon' /><span>Activités :</span> {props.Activites}</p>
                <p className='prix'><FontAwesomeIcon icon={faSackDollar} className='icon' /><span>Prix :</span> {props.prix}$</p>
                
                <Link to='/FormulaireReservation'><button className='reservation-button'>Réserver</button></Link>
            </div>
        </div>
    )
}

export default CardReservation
