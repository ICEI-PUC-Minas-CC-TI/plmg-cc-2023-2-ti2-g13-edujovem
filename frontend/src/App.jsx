import { BrowserRouter } from 'react-router-dom'
import Hero from './components/Hero'
import Informational from './components/Informational'
import React from 'react'


const App = () => {
  return (
    <BrowserRouter>
    
    <div className="relative z-0 bg-white text-black font-montserrat font-semibold">
      
      <Hero/>
      <Informational/>
    </div>
    
    </BrowserRouter>
    
  )
}

export default App


