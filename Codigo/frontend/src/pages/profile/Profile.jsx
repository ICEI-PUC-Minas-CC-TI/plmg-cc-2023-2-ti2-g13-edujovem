import React from "react";
import styles from "./Profile.module.css";
import { NavLink, Navigate } from "react-router-dom";

// COMPONENTS
import Button from "../../components/Button";
import RendaForm from "./RendaForm";

// HOOKS
import { useAuthContext } from "../../hooks/useAuthContext";

const Profile = () => {
   
   return (
      <div>
         <NavLink to="/home">
            <Button>Sair</Button>
         </NavLink>
         <RendaForm />
      </div>
   );
};

export default Profile;
