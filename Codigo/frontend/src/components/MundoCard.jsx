import React, { useState } from 'react';

import PoupancaImg from '../assets/PoupancaImg.jpg';



export default function MundoCard({title, id, desc}){
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className='relative rounded-md h-[200px] w-[350px] overflow-hidden z-10 ' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={PoupancaImg} alt="poupanca" className='absolute h-auto w-auto z-20 pointer-events-none' />
                <div className='absolute h-full w-full z-30 flex justify-center items-center'>
                    <h1 className='font-extrabold text-white text-4xl pointer-events-none truncate'>{title}</h1>
                </div>
            <div className='relative z-40 flex justify-end w-full max-w-[350px] h-full'>
                <div className={`relative bg-[#A2A2A2] transition-all ease-in-out z-50 ${isHovered ? 'w-[0%]' : 'w-[80%]'}`}>
                {isHovered ? null : (
                    <div className="relative p-4 w-full h-full max-w-[350px] flex flex-col ">
                        <h1 className='font-bold font-montserrat w-full h-[10%]'>Mundo {id}</h1>
                        <div className='w-[100px] h-[80%] break-words pt-2 font-montserrat' >
                            Este é um exemplo de <br/>descrição de mundo.<br/> Serão contidas aqui <br/>informações adicionais
                        </div>
                    </div>
                )}
                </div>
            </div>
        </div>

    )

}
