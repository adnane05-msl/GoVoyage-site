import React from 'react'
import Navbar from '../PageAccueil/Navbar/Navbar'
import Footer from '../PageAccueil/Footer/Footer'
import ContentApropos from './ContentApropos/ContentApropos'


function Apropos() {
    return (
        <div>
            <Navbar/>
            <ContentApropos/>
            <Footer/>
        </div>
    )
}

export default Apropos
