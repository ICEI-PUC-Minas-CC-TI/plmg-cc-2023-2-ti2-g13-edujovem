import React, { useEffect, useState } from 'react'
import { styles } from '../styles'
import Button from './Button'
import Logo from '../assets/edujovemlogo.png'

//<Button onClick={() => console.log("olá")} className={'relative bg-red-200 p-2'}>Log In</Button>
//<Button onClick={() => console.log("olá")} className={'relative bg-red-500 p-2'}>Cadastro</Button>

const Navbar = () => {
  return (
    <div className={`relative inline-flex flex-nowrap justify-between items-center bg-black/80 py-4 px-6 h-auto w-full`} >
      <img src={Logo} alt="logo" className='h-20 w-auto' />
      <div className='gap-4 relative inline-flex justify-between'> 
        
      <Button intent="basic" size="medium" roundness="round">entrar</Button>
      <Button intent="emphasis1" size="medium" roundness="round">cadastrar</Button>
      </div>
    </div>

    
  )
}

export default Navbar