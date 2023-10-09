import { BrowserRouter } from 'react-router-dom'
import Hero from './components/Hero'
import Informational from './components/Informational'
import React from 'react'
import Footer from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>
    
    <div className="relative z-0 bg-[#FFFFFF] text-black font-montserrat font-semibold">
      
      <Hero/>
      <Informational/>
      <Footer />
    </div>
    
    </BrowserRouter>
    
  )
}

export default App


