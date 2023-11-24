import React, { useEffect } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet"; 
// COMPONENTS
import Button from "../../components/Button";
import MouseHoverBox from "../../components/MouseHoverBox";
import ExpenseNotes from "../caderninho/ExpenseNotes";
import MundoCard from "../../components/MundoCard";
// ICONS
import useIcons from "../../hooks/useIcons";

// IMG
import Sair from "../../assets/sair.png";
import Conta from "../../assets/conta.png";
import Configuracoes from "../../assets/configuracoes.png";
import Calculadora from "../../assets/calculadora.png";
import CalcJuros from "../../assets/calcJuros.png";
import Gastos from "../../assets/salvando.png";
import Cifrao from "../../assets/cifrao.png";

// HOOKS
import { useAuthContext } from "../../hooks/useAuthContext";


            
const Home = () => {
  const { logout, role } = useAuthContext();

  const { AdminIcon } = useIcons();

  const handleLogout = () => {
    logout();
  };

  //<div className=' shadow-lg bg-[#ffffff] from-[#cacaca] to-[#f0f0f0] rounded-md h-[60%]'>aaaaaa</div>

  return (
    <>
      {role === "ADMIN" ? (
        <div>
          <Navigate to="/admin" />
        </div>
      ) : (
        <div
          className="
      w-[100vw] h-[100vh] bg-[blackF] flex inline-flex text-black justify-between gap-x-4 truncate text-black font-montserrat
   "
        >
          <Helmet>
          <script src="https://unpkg.com/blip-chat-widget" type="text/javascript"></script>

            <script>
              {`
                    (function () {
                        window.onload = function () {
                            new BlipChat()
                                .withAppKey('ZWR1Mzk6YmUwOTM2ZWEtNGFkOC00YTQ5LWFkOWQtMWU2MTU2ZjU3M2U2')
                                .withButton({"color":"#161616","icon":""})
                                .withCustomCommonUrl('https://rodrigo-drummond-6apfd.chat.blip.ai/')
                                .build();
                        }
                    })();
                            
      `}
            </script>
          </Helmet>
          <section className="relative rounded-md shadow-lg bg-[#ffffff] from-10% from-[#cacaca] to-[#f0f0f0] h-[97vh] w-[20%] my-3 ml-3">
            <MouseHoverBox borderColor={"#FF810B"}>
              <div className="relative w-full h-full flex flex-col items-center gap-y-2 px-1">
                <div className="relative w-full h-[5%] border-b-2">
                  <h1 className="text-2xl font-bold">Menu</h1>
                </div>
                <div className="relative w-full h-[75%] flex flex-col gap-y-2 pt-5">
                  <div
                    className="
                bg-[#A2A2A2] shadow-md text-white font-bold hover:bg-[#D66F00] h-fit 
                flex inline-flex items-center uppercase tracking-normal transition-colors 
                duration-150 text-base px-4 w-full rounded-md"
                  >
                    <div className="border-r-2 h-full py-2 pr-3">
                      <img src={Calculadora} alt="calculadora" />
                    </div>
                    <h1 className="pl-3">Calculadora</h1>
                  </div>
                  <div
                    className="
                bg-[#A2A2A2] shadow-md text-white font-bold hover:bg-[#D66F00] h-fit 
                flex inline-flex items-center uppercase tracking-normal transition-colors 
                duration-150 text-base px-4 w-full rounded-md"
                  >
                    <div className="border-r-2 h-full py-2 pr-3">
                      <img src={CalcJuros} alt="calculadora juros" />
                    </div>
                    <h1 className="pl-3">Calc. juros</h1>
                  </div>

                  <NavLink to="/report">
                    <div
                      className="
                bg-[#A2A2A2] shadow-md text-white font-bold hover:bg-[#D66F00] h-fit 
                flex inline-flex items-center uppercase tracking-normal transition-colors 
                duration-150 text-base px-4 w-full rounded-md">
                    <div className="border-r-2 h-full py-2 pr-3">
                      <img src={Gastos} alt="gastos mensais" />
                    </div>
                    <h1 className="pl-3">gastos mensais</h1>
                  </NavLink>

                  <NavLink to="/caderninho/income">
                    <div
                      className="
                bg-[#A2A2A2] shadow-md text-white font-bold hover:bg-[#D66F00] h-fit 
                flex inline-flex items-center uppercase tracking-normal transition-colors 
                duration-150 text-base px-4 w-full rounded-md">
                    <div className="border-r-2 h-full py-2 pr-3">
                      <img src={Cifrao} alt="caderninho registro" />
                    </div>
                    <h1 className="pl-3">registrar despesa</h1>
                  </NavLink>

                </div>
                <div className="relative w-full h-[20%] rounded-md flex flex-col justify-end pb-1">
                  <div className="flex inline-flex items-center gap-x-4">
                    <div
                      className="
                  bg-[#A2A2A2] text-white font-bold hover:bg-[#D66F00] h-[110%] 
                  flex justify-center items-center uppercase tracking-normal transition-colors 
                  duration-150 text-base py-2 px-4 w-[32%] rounded-md"
                      onClick={handleLogout}
                    >
                      <img src={Sair} alt="sair" />
                    </div>

                    <div
                      className="
                  bg-[#A2A2A2] text-white font-bold hover:bg-[#D66F00] h-[110%] 
                  flex justify-center items-center uppercase tracking-normal transition-colors 
                  duration-150 text-base py-2 px-4 w-[32%] rounded-md"
                    >
                      <NavLink to="/profile">
                        <img src={Conta} alt="conta" />
                      </NavLink>
                    </div>

                    <div
                      className="
                  bg-[#A2A2A2] text-white font-bold hover:bg-[#D66F00] h-[110%] 
                  flex justify-center items-center uppercase tracking-normal transition-colors 
                  duration-150 text-base py-2 px-4 w-[32%] rounded-md"
                    >
                      <img src={Configuracoes} alt="configuracoes" />
                    </div>
                  </div>
                </div>
              </div>
            </MouseHoverBox>
          </section>
          <section className="relative rounded-md h-[97vh] w-[80%] my-3 mr-3 flex flex-col gap-y-4">
            <section className=" shadow-lg bg-[#ffffff] from-[#cacaca] to-[#f0f0f0] rounded-md w-full h-[40%]">
              <MouseHoverBox borderColor={"#FF810B"}>
                <div className="relative w-full h-full flex flex-col items-center gap-y-2 px-1 ">
                  <div className="relative w-full h-[15%] border-b-2">
                    <h1 className="text-2xl font-bold">Mundos</h1>
                  </div>
                  <div className="relative w-full h-[85%] pt-10 flex inline-flex gap-x-5">

                    <NavLink to="/home/mundo">
                      <MundoCard
                        title={"Poupança"}
                        id={1}
                        desc="Este é um exemplo de mundo, aqui você pode aprender educação financeira de forma interativa"
                      />
                    </NavLink>
                  </div>
                </div>
              </MouseHoverBox>
            </section>
            <section className="shadow-lg bg-[#ffffff] from-[#cacaca] to-[#f0f0f0] rounded-md h-[60%]">
              <MouseHoverBox borderColor={"#FF810B"}>
                <div className="relative w-full h-[10%] border-b-2">
                  <h1 className="text-2xl font-bold">
                    Anotação de despesas
                  </h1>
                </div>
                <ExpenseNotes />
              </MouseHoverBox>
            </section>
          </section>

        </div>
      )}

    </>

  );
};
//#E4E4E4
export default Home;
