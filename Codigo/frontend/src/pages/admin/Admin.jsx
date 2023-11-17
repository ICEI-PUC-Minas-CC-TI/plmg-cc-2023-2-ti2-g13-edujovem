import { NavLink } from "react-router-dom";
// CSS
import styles from "./Admin.module.css";

// ICONS
import { IoIosArrowBack } from 'react-icons/io';

// COMPONENTS
import Card from "../../components/Card";
import Button from "../../components/Button";

// HOOKS
import { useAuthContext } from "../../hooks/useAuthContext";

const Admin = () => {
   const { logout } = useAuthContext();

   const handleLogout = () => {
      logout();
   };

   return (
      <div className={styles.admin}>
         <div className={styles.admin_header}>
            <NavLink  to="/home">
               <Button onClick={handleLogout}><IoIosArrowBack /></Button>
            </NavLink>
            <h1>ADMIN</h1>
         </div>
         <div className={styles.cards}>
            <Card
               title="CRUD USUARIOS"
               content="Gerencie os usuarios que possuem conta no Educa Jovem"
               imageUrl="https://via.placeholder.com/300"
            >
               <Button>USUARIOS</Button>
            </Card>
            <Card
               title="CRUD MUNDOS"
               content="Funcionalidade de adiconar, deletar, e atualizar os mundos"
               imageUrl="https://via.placeholder.com/300"
            >
               <Button>MUNDOS</Button>
            </Card>
         </div>
      </div>
   );
};

export default Admin;
