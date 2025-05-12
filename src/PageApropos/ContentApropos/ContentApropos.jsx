import React from 'react'
import './ContentApropos.css'
import planing from '../../assets/Apropos/PlaningToTravel.jpg'
// historique
import ContentHistorique from './ContentHistorique'
import DepartDuReve from '../../assets/Apropos/DepartDuReve.jpg'
import TracerItineraire from '../../assets/Apropos/TracerItineraire.jpg'
import GrandDecoulage from '../../assets/Apropos/GrandDecoulage.jpg'
import TroisPersonnes from '../../assets/Apropos/TroisPersonnes.jpg'
import Vision from '../../assets/Apropos/vision.jpg'
import RouteAvecVous from '../../assets/Apropos/RouteAvecVous.jpg' 

function ContentApropos() {

            // tableau d'historique
    
            const infoHistorique = [
                        {id:1,    img:DepartDuReve ,      nom:'Le Départ du Rêve' ,                   sousTitre:'Tout commence à Casablanca..',                                        text:'Dans une petite salle d’étude de Casablanca, l’idée a germé : et si on facilitait les voyages ? Et si on proposait une expérience clé en main, où le voyageur ne pense qu’à vivre ? Ce jour-là, GoVoyage est né de notre envie de faire voyager autrement'  ,          position: false},
                        {id:2,    img:TracerItineraire ,  nom:'Tracer l’Itinéraire' ,                 sousTitre:'Construire le voyage parfait, étape par étape',                       text:'Nous avons commencé à définir ce qui rend un voyage unique : les destinations, les moyens de transport, les activités, l’ambiance, et surtout… la tranquillité d’esprit. Chaque choix a été pensé comme une étape dans un itinéraire d’exception.'  ,                  position: true},
                        {id:3,    img:GrandDecoulage ,    nom:'Le Grand Décollage' ,                  sousTitre:'De l’idée à la réalité : GoVoyage prend son envol',                   text:'Après des mois de réflexion, de design et de préparation, le projet est devenu concret. Un site, des visuels, des fiches voyages, un nom. GoVoyage décolle officiellement, prêt à emmener ses premiers voyageurs.'  ,                                                  position: false},
                        {id:4,    img:TroisPersonnes ,    nom:'Une Équipe à Bord' ,                   sousTitre:'Derrière le projet, une équipe soudée',                               text:'Nous sommes trois passionnés : Nadia, Karim et Inès. Trois rôles, trois visions, mais une même passion : faire voyager les gens comme on aimerait voyager nous-mêmes. Notre force : la complémentarité et la bienveillance.',                                          position: true},
                        {id:5,    img:Vision ,            nom:'Une Vision Durable' ,                  sousTitre:'Notre mission : rendre les voyages accessibles, sûrs et humains',     text:'GoVoyage, ce n’est pas juste une plateforme. C’est une promesse : organiser des escapades authentiques, au juste prix, avec une attention portée à chaque détail. Notre objectif : que chaque voyageur reparte avec plus que des photos… des souvenirs vrais.'  ,      position: false},
                        {id:6,    img:RouteAvecVous ,     nom:'Et Maintenant, en Route Avec Vous' ,   sousTitre:'Ce n’est que le début du voyage...',                                  text:'Aujourd’hui, nous vous invitons à faire partie de l’aventure. Rejoignez-nous dans nos voyages organisés, vivez des moments forts, laissez-nous vous guider. Car le plus beau des voyages commence souvent par un simple clic.'  ,                                      position: true},
                    ]

    return (
        <div className='ContentApropos container'>

            <section id='intoduction'>
                <h5 className='titre'>Découvrez GoVoyage : votre compagnon de voyage organisé</h5>

                <div className='sectionOne'>
                    <img src={planing} alt="planing" className='img-fluid d-block mx-auto'/>
                    <p className='paragraphe'>
                        <span>GoVoyage</span> est une plateforme marocaine qui propose des voyages organisés vers 
                        des destinations uniques. Fondée par des passionnés du voyage, notre mission 
                        est de rendre les vacances accessibles, simples et inoubliables. Nous sélectionnons 
                        pour vous les meilleures offres avec hébergement, transport et activités incluses.
                    </p>
                </div>
            </section>

            <section id='historique'>
                <h5 className='titre'>Le voyage de GoVoyage, du rêve à la réalité</h5>

                <div className='row sectionTwo'>
                        {infoHistorique.map(historique=>
                            <div key={historique.id}>
                                <ContentHistorique
                                    img={historique.img}
                                    sousTitre={historique.sousTitre}
                                    text={historique.text}
                                    position={historique.position}
                                />
                            </div>
                            
                        )}
                </div>
            </section>




        </div>
    )
}

export default ContentApropos