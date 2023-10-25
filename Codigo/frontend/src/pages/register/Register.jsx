import { useState, useEffect } from "react";
import Button from "../../components/Button";
// SERVICES
import { createUserAccount } from "../../../services/api";

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
      username: username,
      displayName: displayName,
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
    <div className="relative flex justify flex-col justify-center items-center w-full h-[100vh] text-black font-montserrat bg-white">
      <div className="flex flex-col items-center p-2 rounded-md shadow-lg">
        <h1 className="text-spct font-extrabold"> Cadastro</h1>
        <h6 className="mb-4">Crie seu usuario para acessar os conteudos</h6>
        <form onSubmit={handleSubmit} className="flex-col flex items-center gap-y-5">
          <label>
            <span>Nick: </span>
            <input
              className="w-full "
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
          <Button intent={"emphasis1"} roundness={"round"}>Cadastrar</Button>
          {error && <p className="error"> {error} </p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
