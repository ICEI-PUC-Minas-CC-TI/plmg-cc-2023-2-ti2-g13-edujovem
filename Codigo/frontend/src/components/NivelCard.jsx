import React, { useState } from 'react';

//ICONS
import Star from '../assets/estrela.png'





export default function MundoCard({title, id, desc}){

    return (
        <>
            <div className='w-[200px] h-[200px] shadow-md border-2'>
                <div className='w-full h-[80%] flex justify-center items-center'>
                <img src={Star} alt="nivel"/>
                </div>
                <h6 className="font-bold text-xl font-montserrat text-center ">Nível 1</h6>
            </div>
        </>
    )

}