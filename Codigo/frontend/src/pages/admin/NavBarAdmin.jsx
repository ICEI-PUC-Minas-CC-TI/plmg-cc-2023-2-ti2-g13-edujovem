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
          <NavLink to="/" className={styles.brand}>
            Edu<span>Jovem</span>
          </NavLink>
          <ul className={styles.link_list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Home
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
               <Button size="small" onClick={handleLogout}>Sair</Button>
            </NavLink>
            </li>
          </ul>
        </nav>
      );
}

export default NavBarAdmin