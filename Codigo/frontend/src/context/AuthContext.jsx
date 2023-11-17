import { createContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { api, createSession } from "../../services/api";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userStoraged = localStorage.getItem("user");
    console.log(userStoraged)
    if (userStoraged) {
      setUser(JSON.parse(userStoraged));
    }
    setLoading(false);
  }, []);
  
  useEffect(() => {
  if (user) {
    setRole(user.user.authorities[0].authority);
  }
}, [user]);

  const login = async(username, password) => {
    console.log("login");

    const res = await createSession(username, password)
    
    if(res.data.jwt){
      const userLogged = res.data
      const token = res.data.jwt
      localStorage.setItem("user", JSON.stringify(userLogged));
      localStorage.setItem("jwt", token);
      api.defaults.Authorization = `Bearer ${token}`

      setUser(userLogged);
      
      
      navigate("/home");
    }else{
      alert("incorreto")
    }
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user")
    localStorage.removeItem("jwt")
    api.defaults.Authorization = null //tirar o token
    setUser(null);
    setRole(null)
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, role, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
