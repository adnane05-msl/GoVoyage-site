import React from 'react'
import './CardComment.css'
import StarRating from './starRating'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faCommentDots } from '@fortawesome/free-solid-svg-icons'

function CardComment(props) {
    return (
        <div className='card card-comment'>
            <div className='card-body' >
                <div className='nom-note'>
                    <h4 className='nom'><FontAwesomeIcon icon={faCircleUser} className='icon icon-user'/>{props.nom}</h4>
                    <StarRating rating={props.note}/>
                </div>
                <p className='comment'><FontAwesomeIcon icon={faCommentDots} className='icon icon-comment'/>{props.commentaire}</p>
            </div>
        </div>
    )
}

export default CardComment
