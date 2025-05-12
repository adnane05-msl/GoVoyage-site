import React from 'react'
import './CardTransport.css'

function CardTransport(props) {
    return (
        <div className='carte-transport card'>
                <img src={props.img} alt={props.nom} className='card-img-top '  height='280' />
                <div className='card-body '>
                    <h2 className='nom-transport'>{props.nom}</h2>
                    <p>{props.description}</p>
            </div>
            
        </div>
    )
}

export default CardTransport




