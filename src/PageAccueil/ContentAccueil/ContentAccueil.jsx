import React from 'react'
import './ContentAccueil.css'
import Couple from '../../assets/couple.jpg'
//DerniersVoyages
import CardDerniersVoyages from 'c:/Users/user/Desktop/Projet Dev Web/projet/src/PageAccueil/ContentAccueil/CardDerniersVoyages'
import Interlaken from '../../assets/derniers-voyages/Interlaken-suisse.jpg'
import Madrid from '../../assets/derniers-voyages/madrid-espagne.jpg'
import Rome from '../../assets/derniers-voyages/rome-italy.jpg'
import Istanbul from '../../assets/derniers-voyages/istanbul-turkiye.jpg'
import Helsinki from '../../assets/derniers-voyages/Helsinki-Finland.jpg'
import Paris from '../../assets/derniers-voyages/paris-france.jpg'
// InfpoTransports
import CardTransport from './CardTransport'
import Avion from '../../assets/Nos transports/Avionn.jpg'
import Bus from '../../assets/Nos transports/Bus.jpg'
import Bateau from '../../assets/Nos transports/Bateau.jpg'
//infoComment
import CardComment from 'c:/Users/user/Desktop/Projet Dev Web/projet/src/PageAccueil/ContentAccueil/CardComment'



function ContentAccueil() {
    const infoPays = [
                {id:1, img: Interlaken,   ville:'Interlaken',   pays:'Suisse',  description:'Entre lacs et montagnes, un paradis pour les amoureux de la nature'},
                {id:2, img: Madrid,       ville:'Madrid',       pays:'Espagne', description:'Une ville vibrante où l’art, la fête et la passion se rencontrent'},
                {id:3, img: Rome,         ville:'Rome',         pays:'Italy',   description:'Un musée à ciel ouvert où l’Antiquité côtoie la dolce vita'},
                {id:4, img: Istanbul,     ville:'Istanbul',     pays:'Turkiye', description:'Un pont magique entre l’Europe et l’Asie, riche en couleurs et histoire'},
                {id:5, img: Helsinki,     ville:'Helsinki',     pays:'Finland', description:'Une escapade nordique entre modernité, mer et forêts'},
                {id:6, img: Paris,        ville:'Paris',        pays:'France',  description:'La ville de l’amour, de la culture et de l’élégance intemporelle'},
            ]
    
    const infoTransports = [
                {id:1,   img: Avion,    nom:'Avion',      description:'Le moyen le plus rapide pour voyager à l’international.'},
                {id:2,   img: Bus,      nom:'Bus',        description:'Idéal pour les trajets courts et les visites locales.'},
                {id:3,   img: Bateau,   nom:'Bateau',     description:'Pour une expérience unique sur l’eau, entre croisières et ferries.'},
            ]

    const infoComment = [
                {id:1, nom:'Jean Dupont',          note:4.5,       commentaire:'Un voyage inoubliable, tout était parfait !'},
                {id:2, nom:'Marie Curie',          note:5,         commentaire:'Une organisation impeccable, je recommande vivement !'},
                {id:3, nom:'Albert Einstein',      note:4,         commentaire:'Des souvenirs gravés à jamais, merci pour cette expérience !'},
                {id:4, nom:'Marie Antoinette',     note:4.2,       commentaire:'Un voyage de rêve, merci pour tout !'},
                {id:5, nom:'Napoléon Bonaparte',   note:4.7,       commentaire:'Une expérience mémorable, je suis très satisfait !'},                
                {id:6, nom:'Léonard de Vinci',     note:4.5,       commentaire:'Un voyage incroyable, je suis ravi de mon expérience !'},
                {id:9, nom:'Jules César',          note:4.6,       commentaire:'Un voyage fantastique, je suis très heureux de mon choix !'}
            ]


    return (
        
        <div className='ContentAccueil container'>
            <section id='premier-section'>
                <p>" Les plus beaux souvenirs commencent toujours par un billet réservé "</p>
                <img src={Couple} className='image-couple img-fluid d-block mx-auto' alt="image" />
            </section>

            <hr className='ligne'/>

            <section id='derniers-voyages'>
                <h5 className='titre'>derniers voyages</h5>

                <div className='album-voyages'>
                    {infoPays.map(nation =>
                        <div key={nation.id} className='image'>
                            <CardDerniersVoyages
                                img={nation.img}
                                ville={nation.ville}
                                pays={nation.pays}
                                description={nation.description}
                            />
                        </div>
                    )}
                </div>
                    
            </section>
            


            <section id='nos-transports'>
                <h5 className='titre'>Nos transports</h5>
                <p className='moyen-transport'>Découvrez tous les moyens que nous organisons pour votre confort de voyage.</p>
                
                <div className=' album-transport'>
                    {infoTransports.map(transport=>
                        <div key={transport.id} className='col-10 col-sm-12 col-md-6 col-lg-4 col-xl-4 image-transport'>
                            <CardTransport
                                img={transport.img}
                                nom={transport.nom}
                                description={transport.description}
                            />
                        </div>
                    )}
                </div>
            </section>
            
            

            <section id='commentaires'>
                <h5 className='titre'>avis clients</h5>

                <div className='comments'>
                        {infoComment.map(comment=>
                            <div key={comment.id} className='border-comment'>
                                <CardComment
                                    nom={comment.nom}
                                    note={comment.note}
                                    commentaire={comment.commentaire}
                                />
                            </div>
                        )}
                </div>
            </section>

        </div>
    )
}

export default ContentAccueil
