import axios from 'axios';
import { useState, useEffect } from 'react'
import { NavLink, Link } from "react-router-dom";

// SERVICES
import { api,  getAllusers } from '../../../services/api';

// CSS
import styles from './ManageUsers.module.css'

// ICONS
import { IoIosArrowBack } from 'react-icons/io';
import useIcons from '../../hooks/useIcons';

// COMPONENTS
import NavBarAdmin from './NavBarAdmin'
import Button from '../../components/Button';

const ManageUsers = () => {
  const [users, setUsers] = useState([])

  const { AdminIcon } = useIcons()

  const fetchAllUsers = async () => {
    try {
      const jwt = localStorage.getItem("jwt");
      api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
  
      const res = await getAllusers();
      console.log(res.data)
      const usersArray = Array.isArray(res.data) ? res.data : [];
      setUsers(usersArray);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    fetchAllUsers()
  }, [])

  return (
    <div className={styles.ManageUsers}>
      <NavBarAdmin />
        <div className={styles.get}>
          <h1>Usuários registrados: </h1> 
          <ul className={styles.users}>
            {users && users.map((user)=>( 
              <li key={user.userId}>
              <h2><strong>Username: </strong> {user.username}</h2>
              <p><strong>Email: </strong> {user.email}</p>
              <Link to={`/admin/manage/${user.userId}`}><Button> <AdminIcon /> </Button></Link>
            </li>
            ))}
          </ul>
        </div>
        <footer>
        <NavLink to='/admin'>
          <Button><IoIosArrowBack /></Button>
        </NavLink>
        </footer>
    </div>
  )
}
{/* <li key={user.userId}><strong>ID: {user.userId}</strong> |
             <strong>Nick:</strong> {user.username} | <strong>Nome:</strong> {user.name} | 
             <strong>Email: </strong>{user.email} | </li> */}

export default ManageUsers