import styles from './login.module.css'
import { useState, useEffect, useContext } from "react";

// CONTEXT
import { AuthContext } from '../../context/AuthContext';


const Login = () => {

  const {authenticated, login} = useContext(AuthContext)

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    }
    if(password.length < 3){
      alert('senha muito pequena')
      return
    }
    login(username, password)
  };

  return (
    <div className={styles.login}>
      <h1>Entrar na plataforma</h1>
      <p>Entre com sua conta EduJovem para se divertir</p>
      <p>{String(authenticated)}</p>
      <form onSubmit={handleSubmit}>
      <label>
          <span>Nick: </span>
          <input
            type="text"
            name="username"
            required
            placeholder="Digite seu nome"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <span>Senha: </span>
          <input
            type="password"
            name="password"
            required
            placeholder="Digite sua senha"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type='submit' className="btn">Entrar</button>
      </form>
    </div>
  )
}

export default Login