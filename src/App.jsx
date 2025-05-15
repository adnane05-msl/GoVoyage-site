import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'

import Accueil from './PageAccueil/Accueil'
import Apropos from './PageApropos/Apropos'
import Connexion from './PageConnexion/Connexion'
import Inscription from './PageConnexion/Inscription'
import Contact from './PageContact/Contact'
import Reservation from './PageReservation/Reservation'
import FormulaireReservation from './PageReservation/FormulaireReservation'
import Erreur from './Erreur/Erreur'
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Accueil/>}/>
        <Route path='/Reservation' element={<Reservation/>}/>
        <Route path='/Apropos' element={<Apropos/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Connexion' element={<Connexion/>} />
        <Route path='/Inscription' element={<Inscription/>}/>
        <Route path='/FormulaireReservation' element={<FormulaireReservation/>}/>
        <Route path='*' element={<Erreur/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
