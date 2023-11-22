import React from "react";
import styles from "./Profile.module.css";
import { NavLink, Navigate } from "react-router-dom";

// COMPONENTS
import Button from "../../components/Button";
import IncomeForm from "../caderninho/IncomeForm";

// HOOKS
import { useAuthContext } from "../../hooks/useAuthContext";

const Profile = () => {
   const { user } = useAuthContext();
   return (
      <div className={styles.Profile}>
         
         <h1>Ola, <span>{user.user.username}</span></h1>
         <NavLink to="/home">
            <Button>Sair</Button>
         </NavLink>
      </div>
   );
};

export default Profile;
