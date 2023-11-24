import React, { useEffect, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";

//COMPONENTS
import MouseHoverBox from "../../components/MouseHoverBox";
import Button from "../../components/Button";




//ICONS
import { IoIosArrowBack } from "react-icons/io";

//DADOS
import { Perguntas } from "./Perguntas";






export default function Nivel({ title, id, desc }) {
    const [reloadDiv, setReloadDiv] = useState(0);
    const [perguntaIndex, setPerguntaIndex] = useState(0);
    const [pontuacao, setPontuacao] = useState(0);

    const handleButtonClick = (opcoesResposta) => {
        if (opcoesResposta.correta) {
            setPerguntaIndex(perguntaIndex + 1);
            setPontuacao(pontuacao + 1);
        } else {
            setPerguntaIndex(perguntaIndex + 1);
            console.log(perguntaIndex);
        }
        setReloadDiv(reloadDiv + 1);
    };

    return (
        <>
            <div className="w-[100vw] h-[100vh] bg-[#B4EFF7] flex text-black justify-center items-center gap-x-4 truncate text-black font-montserrat">
                <div className="w-[90%] h-[90%] p-5 flex items-center justify-center">
                    <MouseHoverBox borderColor={"#FF810B"}>
                        <div className="h-auto w-full pb-3 border-b-2 flex justify-between">
                            <h1 className="font-extrabold text-2xl font-montserrat ">Nivel 1</h1>
                            <div className="flex inline-flex items-center">
                                <h1 className="text-2xl font-montserrat pr-5 ">0% completo</h1>
                                <NavLink to="/home/mundo">
                                    <button className="mt-1 bg-gray-400 hover:bg-gray-600 text-white px-4 py-2 rounded">
                                        <IoIosArrowBack />
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="w-full h-full">
                            <div className="h-[60%] w-full flex items-center justify-center bg-white ">
                                <div className="w-[50%] flex items-center justify-center whitespace-normal truncate break-words font-bold text-xl">
                                    {Perguntas[perguntaIndex].pergunta}
                                </div>
                            </div>
                            <div className="w-full h-[30%] border-t-2 p-4 flex flex-col gap-y-2">
                                {Perguntas[perguntaIndex].opcoesResposta.map((opcoesResposta, id) => (
                                    <Button
                                        key={id}
                                        intent="emphasis2"
                                        size="one"
                                        roundness="round"
                                        onClick={() => handleButtonClick(opcoesResposta)}
                                    >
                                        {opcoesResposta.resposta}
                                    </Button>
                                ))}
                            </div>
                        </div>

                    </MouseHoverBox>
                </div>

            </div>


        </>
    )

}