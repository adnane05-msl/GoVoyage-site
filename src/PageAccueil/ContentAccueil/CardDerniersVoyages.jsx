import React, {useState} from 'react'
import './Card.css'

import { faMapPin, faLandmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CardDerniersVoyages(props) {

        const [isHovered, setIsHovered] = useState(false);

        function MouseEnter(){
            setIsHovered(true)
        }
        function MouseLeave(){
            setIsHovered(false)
        }
        
    return (
        <div>
            <div className="carte" onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
            
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
