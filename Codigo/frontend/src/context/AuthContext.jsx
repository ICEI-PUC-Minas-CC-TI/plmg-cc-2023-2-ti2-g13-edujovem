import { createContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const login = (username, password) => {
    console.log("login auth", { username, password })

    useEffect(()=>{
        const userStoraged = localStorage.getItem('user')

        if(userStoraged){
            setUser(JSON.parse(userStoraged))
        }
        setLoading(false)
    }, []) 

    const loggedUser = {
        id: '123',
        username,
    }
    // armazena no local storage
    localStorage.setItem('user', JSON.stringify(loggedUser))

    if(password = "123"){
        setUser(loggedUser)
    }
    navigate('/home')

  };

  const logout = () => {
    console.log("logout")
    setUser(null)
    navigate('/')
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
        {children}
    </AuthContext.Provider>
  );
};
