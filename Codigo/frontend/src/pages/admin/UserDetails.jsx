import React from "react";
import { useState, useEffect } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";

// CSS
import styles from "./UserDetails.module.css";

// ICONS
import { IoIosArrowBack } from "react-icons/io";

// COMPONENTS
import Button from "../../components/Button";

// SERVICES
import { api } from "../../../services/api";

const UserDetails = () => {
   const { userId } = useParams();
   const [user, setUser] = useState({});
   const [editMode, setEditMode] = useState(false);
   const [editedUser, setEditedUser] = useState({});

   const url = "http://localhost:8080/admin/users/" + userId;
   const navigate = useNavigate();
   async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setUser(data);
   }
   useEffect(() => {
      fetchData();
   }, []);

   const handleDelete = async () => {
      try {
         const jwt = localStorage.getItem("jwt");
         api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
         console.log(jwt);
         await api.delete(`/admin/delete/${userId}`);
         navigate("/admin/manage");
      } catch (err) {
         console.log(err);
      }
   };

   const handleEdit = () => {
      setEditMode(true);
      setEditedUser({ ...user });
   };

   const handleSave = async () => {
      try {
         const jwt = localStorage.getItem("jwt");
         api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
         console.log(jwt);
         console.log(editedUser);
         await api.put(`/admin/update/${userId}`, editedUser);
         setEditMode(false);
         fetchData();
      } catch (err) {
         console.log(err);
      }
   };
   const handleEmailInputChange = (e) => {
      const { name, value } = e.target;
      setEditedUser((prevUser) => ({
         ...prevUser,
         [name]: value,
      }));
   };
   const handleNameInputChange = (e) => {
      const { name, value } = e.target;
      setEditedUser((prevUser) => ({
         ...prevUser,
         [name]: value,
      }));
   };
   const handleUsernameInputChange = (e) => {
      const { name, value } = e.target;
      setEditedUser((prevUser) => ({
         ...prevUser,
         [name]: value,
      }));
   };
   return (
      <div className={styles.UserDetails}>
         <h1>Usuário: {user.username}</h1>
         <ul>
            <li>
               <strong>ID: </strong> {user.userId}
            </li>

            <li>
                <label><strong>Nick: </strong>
               {editMode ? (
                  <input
                     type="text"
                     name="username"
                     value={editedUser.username}
                     onChange={handleUsernameInputChange}
                  />
               ) : (
                  user.username
               )}
               </label>
            </li>

            <li>
            <label><strong>Nome: </strong>
               {editMode ? (
                  <input
                     type="text"
                     name="name"
                     value={editedUser.name}
                     onChange={handleNameInputChange}
                  />
               ) : (
                  user.name
               )}
               </label>
            </li>
            <li>
               <label><strong>Email: </strong>
               {editMode ? (
                  <input
                     type="email"
                     name="email"
                     value={editedUser.email}
                     onChange={handleEmailInputChange}
                  />
               ) : (
                  user.email
               )}
               </label>
            </li>
            {user.authorities && user.authorities.length > 0 && (
               <li>
                  <strong>Role: </strong>
                  {user.authorities[0].authority}
               </li>
            )}
         </ul>
         <div className={styles.crud}>
            {!editMode && (
               <>
                  <NavLink to="/admin/manage">
                     <Button>
                        <IoIosArrowBack size={20} />
                     </Button>
                  </NavLink>
                  <Button
                     size="oneOfThree"
                     intent="delete"
                     onClick={handleDelete}
                  >
                     DELETAR
                  </Button>
               </>
            )}
            {!editMode ? (
               <Button
                  size="oneOfThree"
                  intent="update"
                  onClick={handleEdit}
               >
                  EDITAR
               </Button>
            ) : (
               <>
                  <Button
                     size="medium"
                     intent="cancel"
                     onClick={() => setEditMode(false)}
                  >
                     CANCELAR
                  </Button>
                  <Button size="medium" intent="save" onClick={handleSave}>
                     SALVAR
                  </Button>
               </>
            )}
         </div>
      </div>
   );
};

export default UserDetails;
