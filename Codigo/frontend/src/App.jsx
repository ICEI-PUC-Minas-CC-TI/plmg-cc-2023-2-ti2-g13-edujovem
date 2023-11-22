import { useState, useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


// PAGES
import NotFound from './pages/404/NotFound'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Landing from './pages/Landing/Landing'
import Profile from './pages/profile/Profile'
import Caderninho from './pages/caderninho/Caderninho'
import Admin from './pages/admin/Admin'
import ManageUsers from './pages/admin/ManageUsers'
import ExpenseReport from './pages/caderninho/ExpenseReport'
import UserDetails from './pages/admin/UserDetails'
import IncomeForm from './pages/caderninho/IncomeForm'

// CONTEXT
import { AuthContextProvider, AuthContext } from './context/AuthContext'


function App() {
  const Private = ({ children }) => {
    const {authenticated, loading} = useContext(AuthContext)

    if(loading){
      return  <div>Loading...</div>
    }
    if(!authenticated) {
      return <Navigate to='/'/>
    }
    return children
  }
  

  return (
    <div className="app">
    <BrowserRouter>
          <AuthContextProvider>
      <div className="">
        <Routes>
            <Route path='/admin' element={<Private><Admin /></Private>} />
            <Route path='/admin/manage' element={<Private><ManageUsers /></Private>} />
            <Route path='/admin/manage/:userId' element={<Private><UserDetails /></Private>} />
            <Route path='/' element={<Landing />} />
            <Route path='/home' element={<Private><Home /></Private>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Private><Profile /></Private>} />
            <Route path='/caderninho' element={<Private><Caderninho /></Private>} />
            <Route path='/caderninho/income' element={<Private><IncomeForm /></Private>} />
            <Route path='/report' element={<Private><ExpenseReport /></Private>} />
            <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
        </AuthContextProvider>
    </BrowserRouter>
  </div>
      
  )
}

export default App
