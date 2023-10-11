import { useState, useEffect } from "react";
// CSS
import styles from './Register.module.css'

const Register = () => {
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("") 
    const user = { // forma os usuarios com base nos inputs
        username,
        displayName,
        email,
        password,
        confirmPassword,
    }
    // 1) validacao
    if(password !== confirmPassword) {
        setError("As senhas precisam ser iguais")
        return
    }
    console.log(user)
    const url = 'http://localhost:8080/auth/login'
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
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
