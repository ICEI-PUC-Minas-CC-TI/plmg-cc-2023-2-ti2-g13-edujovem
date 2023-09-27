import React, { useEffect, useState } from 'react';
import { styles } from '../styles';
import Button from './Button';



const Navbar = () => {
  return (
    <div className={`inline-flex justify-between py-8 px-8 bg-white w-full`} >
      <h1 className="text-xl bg-red-500 p-2">EDUCA JOVEM</h1>
      <div className='gap-4 relative inline-flex justify-between'> 
        
        <Button onClick={() => console.log("olá")} className={'bg-red-200 p-2'}>Log In</Button>
        <Button onClick={() => console.log("olá")} className={'bg-red-500 p-2'}>Cadastro</Button>
      </div>
    </div>

    
  )
}

export default Navbar