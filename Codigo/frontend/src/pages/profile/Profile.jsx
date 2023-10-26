import React from "react";
import styles from "./Profile.module.css";
import { NavLink } from "react-router-dom";

// COMPONENTS
import Button from "../../components/Button";
import RendaForm from "./RendaForm";

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
