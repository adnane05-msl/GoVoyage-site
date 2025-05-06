import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'

import Accueil from './PageAccueil/Accueil'
import Apropos from './PageApropos/Apropos'

function App() {
  

  return (
    // <>
    //   <Accueil/>
    // </>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Accueil/>}/>
        <Route path='/Apropos' element={<Apropos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
