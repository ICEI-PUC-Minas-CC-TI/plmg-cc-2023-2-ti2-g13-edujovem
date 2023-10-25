
import { useState } from "react";
import Button from '../../components/Button';

import { useAuthContext } from '../../hooks/useAuthContext';


const Login = () => {

  const {authenticated, login} = useAuthContext()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { 
      username: username,
      password: password,
    }
    login(user)
  };

  return (
    <div className={"relative flex flex-col justify-center items-center h-[100vh] w-full bg-[#171717] text-black"}>
      <div className='border-2 rounded-md flex flex-col w-[30%] h-fit shadow-md bg-[#ffffff] p-5'>
        <div className='pb-4 border-b-2'>
          <h1 className='font-extrabold text-2xl font-montserrat'>Entrar na plataforma</h1>
          <p>Entre com sua conta EduJovem para aprender!</p>
        </div>
        <div className='pt-4 w-full h-full '>
          <form onSubmit={handleSubmit} className=''>
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
            <Button intent={"emphasis1"} roundness={"round"} size={"one"}>Entrar</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login