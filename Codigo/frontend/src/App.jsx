import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// CSS
import './App.css'

// PAGES
import NavBar from './components/NavBar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Landing from './pages/Landing/Landing'
import Why from './pages/Landing/Why'

function App() {

  return (
    <div className="app">
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/why' element={<Why />} />
        </Routes>
      </div>
    </BrowserRouter>
  </div>
      
  )
}

export default App
