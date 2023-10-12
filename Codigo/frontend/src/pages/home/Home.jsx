import React from 'react'
import { useContext, useState } from 'react'
// CONTEXT
import { AuthContext } from '../../context/AuthContext'

const Home = () => {
  const { logout, authenticated } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
  }

  return (
    <div>
      <h1>Home page</h1>
      <p>{String(authenticated)}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home