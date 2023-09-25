import React, { useEffect, useState } from 'react';
import { styles } from '../styles';
import Button from './Button';



const Navbar = () => {
  return (
    <div className={`inline-flex justify-between py-8 px-8 bg-white w-full`} >
      <h1 className="text-xl">EDUCA JOVEM</h1>
      <div className='relative inline-flex justify-between'> 
        adaddaaaaaaaaaaaaaaaaa
        <Button onClick={() => console.log("olá")} children="olá"/>
      </div>
    </div>

    
  )
}

export default Navbar