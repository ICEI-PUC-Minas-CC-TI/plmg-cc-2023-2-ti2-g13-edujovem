import { useState, useContext } from 'react'
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

// Context
import { AuthContextProvider, AuthContext } from './context/AuthContext'

function App() {

  const Private = ({children}) => {
    const {authenticated, loading} = useContext(AuthContext)

    if(loading){
      return  <div>Loading...</div>
    }

    if(!authenticated){
      return <Navigate to='/'/>
    }
    return children
  }
  

  return (
    <div className="app">
    <BrowserRouter>
      <div className="container">
        <NavBar />
          <AuthContextProvider>
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/home' element={<Private><Home /></Private>} />
            <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/why' element={<Why />} />
        </Routes>
        </AuthContextProvider>
      </div>
    </BrowserRouter>
  </div>
      
  )
}

export default App
