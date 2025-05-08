import React from 'react'
import './ContentHistorique.css'

function ContentHistorique(props) {
    return (
        <div className="ContentHistorique align-items-center">
            {props.position ? (
                <>
                    <div className="order-md-2 image-historique">
                        <img src={props.img} alt={props.nom} className='right'/>
                    </div>
                    <div className="order-md-1 text">
                        <h5 className="sous-titre">{props.sousTitre}</h5>
                        <p className="paragraphe">{props.text}</p>
                    </div>
                </>
            ) : (
                <>
                    <div className="image-historique">
                        <img src={props.img} alt={props.nom} className='left'/>
                    </div>
                    <div className="text">
                        <h5 className="sous-titre">{props.sousTitre}</h5>
                        <p className="paragraphe">{props.text}</p>
                    </div>
                </>
            )}
        </div>
    )
}

export default ContentHistorique
