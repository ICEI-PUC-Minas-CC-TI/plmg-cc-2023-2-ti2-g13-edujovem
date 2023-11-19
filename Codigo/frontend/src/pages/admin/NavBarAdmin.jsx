import React from 'react'
import { NavLink, Navigate } from "react-router-dom";

// ICONS
import { IoIosArrowBack } from 'react-icons/io';

// CSS
import styles from './NavBarAdmin.module.css'

// HOOKS
import { useAuthContext } from '../../hooks/useAuthContext';


// COMPONENTS
import Button from '../../components/Button';

const NavBarAdmin = () => {
    const { logout } = useAuthContext();

    const handleLogout = () => {
       logout();
    };
    
    return (
        <nav className={styles.navbar}>
          <div to="/admin" className={styles.brand}>
            Edu<span>Jovem</span>
          </div>
          <ul className={styles.link_list}>
            <li>
              <NavLink
                to="/admin/manage"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Manage users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Entrar
              </NavLink>
            </li>
            <li>
            <NavLink  to="/">
               <Button onClick={handleLogout}>Sair</Button>
            </NavLink>
            </li>
          </ul>
        </nav>
      );
}

export default NavBarAdmin