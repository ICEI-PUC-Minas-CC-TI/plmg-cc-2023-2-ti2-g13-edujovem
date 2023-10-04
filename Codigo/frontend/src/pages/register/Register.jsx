import { useState, useEffect } from "react";
// CSS
import styles from './Register.module.css'

// CUSTUM HOOK
import { useFetch } from "../hooks/useFetch";

const url = "http://localhost:8080/users";

const Register = () => {
  const { data: users, httpCofig, loading, error } = useFetch(url);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("") 
    const user = { // forma os usuarios com base nos inputs
        name,
        email,
        senha,
    }
    console.log(user)
    // 1) validacao
    if(senha !== confirmSenha) {
        setErrorMessage("As senhas precisam ser iguais")
        return
    }
    httpCofig(user, "POST");
    setName("");
    setEmail("");
    setSenha("");
    setConfirmSenha("")
  };

  return (
    <div className={styles.register}>
      <h1> Cadastre-se</h1>
      <p>Crie seu usuario para acessar os conteudos</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome: </span>
          <input
            type="text"
            name="name"
            required
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail: </span>
          <input
            type="email"
            name="email"
            required
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha: </span>
          <input
            type="password"
            name="senha"
            required
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </label>
        <label>
          <span>Confirmacao de senha: </span>
          <input
            type="password"
            name="confirmSenha"
            required
            placeholder="Confirme sua senha"
            value={confirmSenha}
            onChange={(e) => setConfirmSenha(e.target.value)}
          />
        </label>
        <button className="btn">Cadastrar</button>
        {errorMessage && <p className="error"> {errorMessage} </p>}
      </form>
    </div>
  );
};

export default Register;
