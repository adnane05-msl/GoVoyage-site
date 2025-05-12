import CardReservation from './CardReservation'
import '../ContentReservation/ContentReservation.css'
// images
import Berlin from '../../assets/Reservation/Berlin.jpg'
import Londres from '../../assets/Reservation/Londres.jpg'
import NewYork from '../../assets/Reservation/NewYork.jpg'
import Tokyo from '../../assets/Reservation/Tokyo.jpg'
import Sydney from '../../assets/Reservation/Sydney.jpg'
import Barcelone from '../../assets/Reservation/Barcelone.jpg'

function ContentReservation() {

    const infoReservation = [
        {id:1,  img:Berlin,      lieu: 'Berlin',      date: '2025/10/01',     heure: '07:00',     nombrePersonnes: 10,    nbrJours: 5,    Transport: 'Avion',     Hotel: 'Hilton',                    Activites: 'Visite de la porte de Brandebourg | shopping à Kurfürstendamm | visite du musée de Pergame | balade dans le parc Tiergarten | spectacle de cabaret | visite du mur de Berlin | croisière sur la Spree | visite de quartiers historiques | dégustation de bière locale',                         prix: 7000 },
        {id:2,  img:Londres,     lieu: 'Londres',     date: '2025/11/01',     heure: '8:00',      nombrePersonnes: 15,    nbrJours: 7,    Transport: 'Avion',     Hotel: 'Marriott',                  Activites: 'Visite du British Museum | shopping à Oxford Street | visite de Buckingham Palace | balade dans Hyde Park | spectacle dans le West End | visite de la Tour de Londres | croisière sur la Tamise | visite de quartiers historiques | dégustation de thé',                                        prix: 10000},
        {id:3,  img:NewYork,     lieu: 'New York',    date: '2025/12/01',     heure: '9:00',      nombrePersonnes: 15,    nbrJours: 5,    Transport: 'Avion',     Hotel: 'Hilton',                    Activites: 'Visite de la Statue de la Liberté | shopping à Times Square | visite du Metropolitan Museum of Art | balade dans Central Park | spectacle à Broadway | visite de l’Empire State Building | croisière autour de Manhattan | visite de quartiers historiques | dégustation de cuisine locale',    prix: 8000},
        {id:4,  img:Tokyo,       lieu: 'Tokyo',       date: '2025/12/15',     heure: '11:00',     nombrePersonnes: 7,     nbrJours: 10,   Transport: 'Avion',     Hotel: 'Shinjuku Granbell Hotel',   Activites: 'Visite du temple Senso-ji | shopping à Shibuya | visite du musée Ghibli | balade dans le parc Ueno | spectacle de sumo | visite de la tour de Tokyo | croisière sur la baie de Tokyo | visite de quartiers historiques | dégustation de cuisine locale',                                        prix: 13000},
        {id:5,  img:Sydney,      lieu: 'Sydney',      date: '2026/01/01',     heure: '07:00',     nombrePersonnes: 8,     nbrJours: 3,    Transport: 'Avion',     Hotel: 'Sydney Harbour Marriott',   Activites: 'Visite de l’Opéra de Sydney | shopping à Pitt Street Mall | visite du zoo de Taronga | balade sur Bondi Beach | spectacle de danse aborigène | visite du Harbour Bridge | croisière sur la baie de Sydney | visite de quartiers historiques | dégustation de fruits de mer',                    prix: 10000},
        {id:6,  img:Barcelone,   lieu: 'Barcelone',   date: '2026/01/15',     heure: '12:00',     nombrePersonnes: 20,    nbrJours: 7,    Transport: 'Avion',     Hotel: 'Hilton',                    Activites: 'Visite de la Sagrada Familia | shopping à La Rambla | visite du parc Güell | balade sur la plage de Barceloneta | spectacle de flamenco | visite du musée Picasso | croisière sur la Méditerranée | visite de quartiers historiques | dégustation de tapas',                                    prix: 9000},
    ]

    return (
        <section className='reservation container'>
            <h1 className='titre'>Réservez votre aventure</h1>
            <p className='sous-titre'>Choisissez votre voyage, remplissez le formulaire, et laissez-nous organiser le reste !</p>
            
            <div className='container-reservation'>
                {infoReservation.map(reservation=>
                    <div key={reservation.id}>
                        <CardReservation
                            img={reservation.img}
                            lieu={reservation.lieu}
                            date={reservation.date}
                            heure={reservation.heure}
                            nombrePersonnes={reservation.nombrePersonnes}
                            nbrJours={reservation.nbrJours}
                            Transport={reservation.Transport}
                            Hotel={reservation.Hotel}
                            Activites={reservation.Activites}
                            prix={reservation.prix}
                        />
                    </div>
                )}  
            </div>
        </section>
    )
}

export default ContentReservation
