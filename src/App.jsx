import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'

import Accueil from './PageAccueil/Accueil'
import Apropos from './PageApropos/Apropos'
import Connexion from './PageConnexion/Connexion'
import Inscription from './PageConnexion/Inscription'

function App() {
  

  return (
    // <>
    //   <Inscription/>
    // </>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Accueil/>}/>
        <Route path='/Apropos' element={<Apropos/>}/>
        <Route path='/Connexion' element={<Connexion/>} />
        <Route path='/Inscription' element={<Inscription/>}/>
        <Route path='*' element={<h4>erreur</h4>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
