import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// // HOOKS
// import useFetch from '../../hooks/useFetch' 

const UserDetails = () => {
    const { userId } = useParams()

  

  return (
    <>
    <p>ID do usuario: {userId}</p>
    </>
  )
}

export default UserDetails