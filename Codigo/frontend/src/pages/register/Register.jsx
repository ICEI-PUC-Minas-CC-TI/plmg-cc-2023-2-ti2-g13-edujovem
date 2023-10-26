import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// COMPONENTS
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
      name: displayName,
      username: username,
      email: email,
      password: password,
    }
    // falta as validacoes de senha
    if(password != confirmPassword){
      alert("as senhas precisam ser iguais!")
      return
    }
    
    const res = await createUserAccount(user)
    if(res){
      login(user)
    }
  };

  return (
    <div className={"relative flex flex-col justify-center items-center h-[100vh] w-full bg-[#171717] text-black"}>
      <div className='border-2 rounded-md flex flex-col w-[30%] h-fit shadow-md bg-[#ffffff] p-5'>
        <div className='pb-4 border-b-2'>
          <h1 className='font-extrabold text-2xl font-montserrat '>Entrar na plataforma</h1>
          <p>Entre com sua conta EduJovem para aprender!</p>
        </div>
        <div className='pt-4 w-full h-full '>
          <form onSubmit={handleSubmit} className="flex-col">
            <label className='flex flex-col mb-[1em]'>
              <span className='font-bold mb-[0.3em] text-left'>Nick: </span>
              <input 
                className='box-border border-0 border-b-[1px] border-[#b3b1b1] bg-transparent focus:outline-0'
                
                type="text"
                name="username"
                required
                placeholder="Digite seu nome"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label className='flex flex-col mb-[1em]'>
              <span className='font-bold mb-[0.3em] text-left'>Nome: </span>
              <input 
                className='box-border border-0 border-b-[1px] border-[#b3b1b1] bg-transparent focus:outline-0'
                type="text"
                name="displayName"
                required
                placeholder="Digite seu nome"
                value={displayName || ""}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </label>
            <label className='flex flex-col mb-[1em]'>
              <span className='font-bold mb-[0.3em] text-left'>E-mail: </span>
              <input 
                className='box-border border-0 border-b-[1px] border-[#b3b1b1] bg-transparent focus:outline-0'
                type="email"
                name="email"
                required
                placeholder="Digite seu E-mail"
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className='flex flex-col mb-[1em]'>
              <span className='font-bold mb-[0.3em] text-left'>Senha: </span>
              <input 
                className='box-border border-0 border-b-[1px] border-[#b3b1b1] bg-transparent focus:outline-0'
                type="password"
                name="password"
                required
                placeholder="Digite sua senha"
                value={password || ""}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label className='flex flex-col mb-[1em]'>
              <span className='font-bold mb-[0.3em] text-left'>Confirmacao de senha: </span>
              <input 
                className='box-border border-0 border-b-[1px] border-[#b3b1b1] bg-transparent focus:outline-0'
                type="password"
                name="confirmPassword"
                required
                placeholder="Confirme sua senha"
                value={confirmPassword || ""}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
            <Button intent={"emphasis1"} roundness={"round"} size={"one"}>Cadastrar</Button>
            {error && <p className="error"> {error} </p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
