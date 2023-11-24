import React, { useEffect } from "react";
import { NavLink, Navigate } from "react-router-dom";

//COMPONENTS
import MouseHoverBox from "../../components/MouseHoverBox";
import NivelCard from '../../components/NivelCard';

//ICONS
import { IoIosArrowBack } from "react-icons/io";


export default function Mundo({ title, id, desc }) {

    return (
        <>
            <div className="w-[100vw] h-[100vh] bg-[#B4EFF7] flex text-black justify-center items-center gap-x-4 truncate text-black font-montserrat">
                <div className="w-[90%] h-[90%] p-5 flex items-center justify-center">
                    <MouseHoverBox borderColor={"#FF810B"}>
                        <div className="h-auto w-full pb-3 border-b-2 flex justify-between">
                            <h1 className="font-extrabold text-2xl font-montserrat ">Mundo 1</h1>
                            <div className="flex inline-flex items-center">
                                <h1 className="text-2xl font-montserrat pr-5 ">0% completo</h1>
                                <NavLink to="/home">
                                    <button className="mt-1 bg-gray-400 hover:bg-gray-600 text-white px-4 py-2 rounded">
                                        <IoIosArrowBack />
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="w-full h-full flex flex-col pt-5">

                            <div className="w-full h-[70%] flex inline-flex items-center pl-5 ">
                                <NavLink to="/home/mundo/nivel">
                                    <NivelCard/>
                                </NavLink>
                                
                            </div>

                            <div className="w-full h-[30%]">
                                <h6 className="font-bold text-xl font-montserrat ">Descrição:</h6>
                                <h6 className="text-xl font-montserrat break-words  whitespace-normal truncate">
                                    Este é um exemplo de mundo. Aqui são contidos vários níveis interativos que o ajudarão a aprender sobre educação financeira</h6>
                            </div>
                            



                        </div>
                    </MouseHoverBox>
                </div>

            </div>


        </>
    )

}
