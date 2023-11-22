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
import SearchForm from '../../components/SearchForm';

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
              <div className={styles.content}>
                <p><strong>ID: {user.userId}</strong></p>
                <h2><strong>Username: </strong> {user.username}</h2>
              </div>
              <Link to={`/admin/manage/${user.userId}`}><Button> <AdminIcon /> </Button></Link>
            </li>
            ))}
          </ul>
        </div>
        <footer>
        <NavLink to='/admin'>
          <Button> <IoIosArrowBack size={30}/></Button>
        </NavLink>

        <div className={styles.search}>
          <h1>Pesquisar Usuarios: </h1>
        <SearchForm />
        </div>
        </footer>
    </div>
  )
}

export default ManageUsers