import { createContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { api, createSession } from "../../services/api";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userStoraged = localStorage.getItem("user");
    console.log(userStoraged)
    if (userStoraged) {
      setUser(JSON.parse(userStoraged));
    }
    setLoading(false);
  }, []);

  const login = async(username, password) => {

    const res = await createSession(username, password)
    console.log("login", res.data)
    const userLogged = res.data
    const token = res.data.token
    localStorage.setItem("user", JSON.stringify(userLogged));
    localStorage.setItem("jwt", token);

    api.defaults.Authorization = `Bearer ${token}`

    setUser(userLogged);

    navigate("/home");
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user")
    localStorage.removeItem("jwt")
    api.defaults.Authorization = null //tirar o token
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
