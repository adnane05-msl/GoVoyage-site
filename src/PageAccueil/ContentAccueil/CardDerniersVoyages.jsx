import React, {useState} from 'react'
import './Card.css'

import { faMapPin, faLandmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CardDerniersVoyages(props) {

        const [isHovered, setIsHovered] = useState(false)
        
    
    return (
        <div>
            <div className="carte"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
            
                        <div>
                            <img src={props.img} alt={props.ville} className='carte-image rounded'/>
                        </div>
                        <div className={isHovered ? "carte-content hovered" : "carte-content"}>
                            <h3 className='ville'>{props.ville}</h3>
                            <h5 className='pays'><FontAwesomeIcon icon={faMapPin} className='icon'/>{props.pays}</h5>
                            <p className='description'><FontAwesomeIcon icon={faLandmark} className='icon'/>{props.description}</p>
                        </div>
            </div>
        </div>
    )
}

export default CardDerniersVoyages
