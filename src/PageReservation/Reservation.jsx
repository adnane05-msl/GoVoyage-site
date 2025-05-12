import React from 'react'
import Navbar from '../PageAccueil/Navbar/Navbar'
import ContentReservation from './ContentReservation/ContentReservation'
import Footer from '../PageAccueil/Footer/Footer'

function Reservation() {
    return (
        <div>
            <Navbar/>
            <ContentReservation/>
            <Footer/>
        </div>
    )
}

export default Reservation
