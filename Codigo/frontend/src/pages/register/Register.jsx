import { useState, useEffect } from "react";
// SERVICES
import { createUserAccount } from "../../../services/api";
// CSS
import styles from './Register.module.css'
// HOOKS
import { useAuthContext } from "../../hooks/useAuthContext";


const Register = () => {
  const {login} = useAuthContext()
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("")
    const user = {
      name: displayName,
      username: username,
      email: email,
      password: password,
    }
    // falta as validacoes de senha
    
    const res = await createUserAccount(user)
    if(res){
      login(user)
    }
  };

  return (
    <div className={styles.register}>
      <h1> Cadastre-se</h1>
      <p>Crie seu usuario para acessar os conteudos</p>
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
          <span>Nome: </span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Digite seu nome"
            value={displayName || ""}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail: </span>
          <input
            type="email"
            name="email"
            required
            placeholder="Digite seu E-mail"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
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
        <label>
          <span>Confirmacao de senha: </span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme sua senha"
            value={confirmPassword || ""}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button className="btn">Cadastrar</button>
        {error && <p className="error"> {error} </p>}
      </form>
    </div>
  );
};

export default Register;
