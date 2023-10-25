import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Button from './Button';
import Logo from '../assets/edujovemlogo.png';

//<Button onClick={() => console.log("olá")} className={'relative bg-red-200 p-2'}>Log In</Button>
//<Button onClick={() => console.log("olá")} className={'relative bg-red-500 p-2'}>Cadastro</Button>

const Navbar = () => {
  const { logout, authenticated } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className={`relative inline-flex flex-nowrap justify-between items-center bg-black/80 py-4 px-6 h-auto w-full`} >
      <NavLink to="/home" >
        <img src={Logo} alt="logo" className='h-20 w-auto' />
      </NavLink>
      
      <div className='gap-4 relative inline-flex justify-between'> 
        
      <NavLink
        to="/login"
        //className={({ isActive }) => isActive ? styles.active : ""}
      >
        <Button intent="basic" size="medium" roundness="round">entrar</Button>
      </NavLink>
      <NavLink
        to="/register"
        //className={({ isActive }) => isActive ? styles.active : ""}
      >
        <Button intent="emphasis1" size="medium" roundness="round">cadastrar</Button>
      </NavLink>
        
      </div>
    </div>

    
  )
}

/*
const NavBar = () => {
   const { logout, authenticated } = useAuthContext();

   const handleLogout = () => {
      logout();
   };

   return (
      <nav className={styles.navbar}>
         <NavLink to="/home" className={styles.brand}>
            Edu<span>Jovem</span>
         </NavLink>
         <ul className={styles.link_list}>
            <li>
               <NavLink
                  to="/home"
                  className={({ isActive }) => (isActive ? styles.active : "")}
               >
                  Home
               </NavLink>
            </li>
            {authenticated && (
               <li>
                  <NavLink
                     to="/caderninho"
                     className={({ isActive }) =>
                        isActive ? styles.active : ""
                     }
                  >
                     Caderninho
                  </NavLink>
               </li>
            )}
            <li>
               {!authenticated ? (
                  <NavLink
                     to="/login"
                     className={({ isActive }) =>
                        isActive ? styles.active : ""
                     }
                  >
                     Entrar
                  </NavLink>
               ) : (
                  <NavLink
                     to="/profile"
                     className={({ isActive }) =>
                        isActive ? styles.active : ""
                     }
                  >
                     Perfil
                  </NavLink>
               )}
            </li>
            <li>
               {!authenticated ? (
                  <NavLink
                     to="/register"
                     className={({ isActive }) =>
                        isActive ? styles.active : ""
                     }
                  >
                     Cadastrar
                  </NavLink>
               ) : (
                  <button onClick={handleLogout}>Sair</button>
               )}
            </li>
         </ul>
      </nav>
   );
};

export default NavBar;
*/

export default Navbar