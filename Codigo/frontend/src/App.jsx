import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// CSS
import './App.css'

// PAGES
import NavBar from './components/NavBar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

function App() {

  return (
    <div className="app">
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  </div>
      
  )
}

export default App
