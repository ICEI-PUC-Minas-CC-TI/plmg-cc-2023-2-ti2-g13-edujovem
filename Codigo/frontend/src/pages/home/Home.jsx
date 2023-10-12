import React from 'react'
import { useState } from 'react'

// HOOKS
import { useAuthContext } from '../../hooks/useAuthContext'

const Home = () => {
  const { logout, authenticated } = useAuthContext()

  

  return (
    <div>
      <h1>Home page</h1>
      <p>{String(authenticated)}</p>
    </div>
  )
}

export default Home