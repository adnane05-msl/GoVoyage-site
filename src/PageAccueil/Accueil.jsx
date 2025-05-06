import React from 'react'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ContentAccueil from './contentAccueil/contentAccueil'
function Accueil() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <ContentAccueil/>
            <Footer/>
        </div>
    )
}

export default Accueil