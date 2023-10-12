import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
// HOOKS
import { useAuthContext } from "../hooks/useAuthContext";

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
