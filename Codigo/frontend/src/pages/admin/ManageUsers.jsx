import axios from 'axios';
import { useState, useEffect } from 'react'
import { NavLink, Navigate } from "react-router-dom";

import { api,  getAllusers } from '../../../services/api';

// CSS
import styles from './ManageUsers.module.css'

// COMPONENTS
import NavBarAdmin from './NavBarAdmin'
import Button from '../../components/Button';

const ManageUsers = () => {
  const [users, setUsers] = useState([])

  const fetchAllUsers = async () => {
    try {
      const jwt = localStorage.getItem("jwt");
      api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
      console.log(jwt);
  
      const res = await getAllusers();
      console.log(res.data);
  
      const usersArray = Array.isArray(res.data) ? res.data : [];
  
      setUsers(usersArray);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    fetchAllUsers()
    console.log(users)
  }, [])

  return (
    <div>
      <NavBarAdmin />
        <div>
        <ul>
        {users && users.map((user)=>( 
          <li key={user.userId}><strong>ID: {user.userId}</strong> | <strong>Nick:</strong> {user.username} | <strong>Nome:</strong> {user.name} | <strong>Email: </strong>{user.email} | </li>
        ))}
      </ul>
        </div>
        <div className={styles.floor}>
        <NavLink to='/admin'>
      <Button>voltar</Button>
      </NavLink>
        </div>
    </div>
  )
}

export default ManageUsers